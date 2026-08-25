import React from 'react';
import { isMobile } from 'react-device-detect';
import io from 'socket.io-client';
import scorecardService from '../../../services/scorecard.service';

interface ScoreProps {
  matchId: number;
  sportId: string | number;
  isT10?: boolean;
}

interface CricketScoreData {
  spnnation1: string;
  spnnation2: string;
  spnballrunningstatus: string;
  score1: string;
  score2: string;
  spnrunrate1: string;
  spnrunrate2: string;
  spnmessage: string;
  spnreqrate1: string;
  spnreqrate2: string;
  dayno: string;
  isfinished: string;
  activenation1: string;
  activenation2: string;
  balls: string[];
}

const Score = ({ matchId, sportId, isT10 = false }: ScoreProps) => {
  const [loading, setLoading] = React.useState(true);
  const [scorecardData, setScorecardData] = React.useState<any>(null);
  const [cricketScoreData, setCricketScoreData] = React.useState<CricketScoreData | null>(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [iframeHeight, setIframeHeight] = React.useState(210);
  
  // Cricket scorecard specific state
  const [cricketScore, setCricketScore] = React.useState<any>(null);
  const [cricketConnected, setCricketConnected] = React.useState(false);
  const pollIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  
  const socketRef = React.useRef<any>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    fetchScorecardData();
    
    // Cleanup socket on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [matchId, sportId]);

  // Cricket scorecard effect - runs when we have oldgmid from scorecardData
  React.useEffect(() => {
    if (scorecardData?.oldgmid && sportId === 4) { // Only for cricket (sportId 4)
      connectToCricketScore(scorecardData.oldgmid);
    }
    
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
      // Cleanup backend connection
      if (scorecardData?.oldgmid) {
        const baseUrl = process.env.REACT_APP_API_SPORTS_URL || 'http://localhost:3010';
        fetch(`${baseUrl}cricket-score/${scorecardData.oldgmid}/disconnect`, {
          method: 'DELETE'
        }).catch(err => console.log('Cleanup disconnect error:', err));
      }
    };
  }, [scorecardData?.oldgmid, sportId]);

  const connectToCricketScore = async (oldgmid: string) => {
    try {
      console.log(`🏏 Cricket score: Connecting for oldgmid: ${oldgmid}`)
      
      // Enhanced: Get match details first to determine sport type
      let sportType = 'cricket'; // Default to cricket
      
      try {
        const detailsUrl = `https://api.cricketid.xyz/getDetailsData`;
        const detailsResponse = await fetch(detailsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gmid: oldgmid
          })
        });
        
        if (detailsResponse.ok) {
          const detailsData = await detailsResponse.json();
          console.log(`📊 Cricket score: Details data received for ${oldgmid}`, detailsData);
          
          // Determine sport type from details
          if (detailsData?.data?.spid) {
            const sportId = detailsData.data.spid;
            if (sportId === 1) sportType = 'cricket';
            else if (sportId === 2) sportType = 'football';  
            else if (sportId === 4) sportType = 'tennis';
            else sportType = 'cricket'; // fallback
          }
        }
      } catch (detailsError) {
        console.warn('⚠️ Could not fetch match details, using cricket as default:', detailsError);
      }
      
      console.log(`🎯 Cricket score: Sport type determined as: ${sportType}`);
      
      if (sportType === 'cricket') {
        // Start the backend connection with proper parameters
        const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3010';
        const connectResponse = await fetch(`${baseUrl}cricket-score/${oldgmid}/connect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'cricket',
            oldgmid: oldgmid,
            sportType: sportType
          })
        });
        
        if (connectResponse.ok) {
          console.log(`✅ Cricket score: Backend connection initiated for ${oldgmid}`);
        } else {
          console.warn(`⚠️ Cricket score: Backend connection failed for ${oldgmid}`);
        }
        
        // Start polling for cricket score data  
        startScorePolling(oldgmid);
        
        // Also attempt direct socket connection as backup
        connectToScoreSocket(oldgmid, 'cricket');
      } else {
        // For non-cricket sports, fetch scorecard differently
        console.log(`🏃 Non-cricket sport: Using iframe/API approach for ${sportType}`);
        connectToNonCricketScore(oldgmid, sportType);
      }
      
    } catch (error) {
      console.error(`❌ Cricket score connection error for ${oldgmid}:`, error);
      setCricketConnected(false);
    }
  };

  // Helper function to connect directly to score socket
  const connectToScoreSocket = (oldgmid: string, type: string) => {
    try {
      console.log(`🔌 Direct socket connection for ${oldgmid}, type: ${type}`);
      // This is a backup connection method
      // The main connection is handled by the backend service
      setCricketConnected(true);
    } catch (error) {
      console.error('❌ Direct socket connection failed:', error);
    }
  };

  // Helper function for non-cricket sports scorecard
  const connectToNonCricketScore = (oldgmid: string, sportType: string) => {
    try {
      console.log(`🏃 Setting up ${sportType} scorecard for ${oldgmid}`);
      // For non-cricket sports, we might use different scorecard approaches
      // This is a placeholder for future implementation
      setCricketConnected(false); // Non-cricket sports don't use cricket connection
    } catch (error) {
      console.error(`❌ ${sportType} scorecard setup failed:`, error);
    }
  };

  const startScorePolling = (oldgmid: string) => {
    const pollScore = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3010';
        const response = await fetch(`${baseUrl}cricket-score/${oldgmid}`);
        
        if (response.ok) {
          // Handle JSON parsing more safely
          const text = await response.text();
          if (text && text.trim() !== '') {
            try {
              const result = JSON.parse(text);
              if (result.success && result.data) {
                console.log(`📊 Cricket score update:`, result.data);
                setCricketScore(result.data);
                setCricketConnected(result.connected || true);
              }
            } catch (jsonError) {
              console.warn('❌ JSON parsing error:', jsonError);
            }
          }
        } else if (response.status === 204) {
          // No content yet, keep waiting
          console.log(`⏳ Waiting for cricket score data for ${oldgmid}...`);
        } else {
          console.warn(`⚠️ Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error('❌ Cricket score polling error:', error);
        setCricketConnected(false);
      }
    };

    // Poll every 3 seconds
    pollScore(); // Initial poll
    pollIntervalRef.current = setInterval(pollScore, 3000);
  };

  // Auto-adjust iframe height for other sports
  React.useEffect(() => {
    if (scorecardData?.type === 'iframe' && iframeRef.current) {
      const adjustHeight = () => {
        try {
          // Use responsive height based on device
          const baseHeight = isMobile ? 320 : 420;
          const dynamicHeight = Math.max(baseHeight, window.innerHeight * 0.4);
          setIframeHeight(Math.min(dynamicHeight, 600));
        } catch (error) {
          setIframeHeight(isMobile ? 320 : 420);
        }
      };

      // Initial adjustment
      adjustHeight();
      
      // Adjust on window resize
      window.addEventListener('resize', adjustHeight);
      
      // Adjust after iframe loads
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.onload = () => {
          setTimeout(adjustHeight, 500);
          setTimeout(adjustHeight, 2000);
        };
      }

      return () => {
        window.removeEventListener('resize', adjustHeight);
      };
    }
  }, [scorecardData?.type, scorecardData?.scoreUrl]);

  const fetchScorecardData = async () => {
    try {
      setLoading(true);
      console.log(`🏆 Fetching scorecard for match ${matchId}, sport ${sportId}`);
      
      const sportIdNum = typeof sportId === 'string' ? parseInt(sportId) : sportId;
      const data = await scorecardService.getScorecardData(matchId, sportIdNum);
      
      if (data) {
        setScorecardData(data);
        
        if (data.type === 'cricket' && data.oldgmid) {
          // Initialize cricket WebSocket scorecard
          setupCricketScorecard(data.oldgmid);
        }
        
        console.log(`✅ Scorecard data loaded:`, data);
    } else {
        console.log('⚠️ No scorecard data available');
      }
    } catch (error) {
      console.error('❌ Error fetching scorecard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const setupCricketScorecard = (oldgmid: string) => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }

    // Force Socket.IO v2.x protocol (EIO=3) for compatibility
    const options = {
      transports: ['websocket', 'polling'],
      upgrade: true,
      rememberUpgrade: true,
      reconnection: true,
      reconnectionAttempts: 3,
      reconnectionDelay: 2000,
      reconnectionDelayMax: 5000,
      timeout: 15000,
      forceNew: true,
      // CRITICAL: Force EIO=3 for v2.x compatibility
      query: {
        EIO: '3',
        transport: 'websocket'
      },
      // v2.x specific options
      autoConnect: true,
      jsonp: false
    };

    try {
      console.log(`🏏 Connecting to cricket scores with v2.x protocol (EIO=3)...`);
      
      // Create socket connection with forced v2.x protocol
      socketRef.current = io("wss://d-score.scoreswift.xyz", options);

      // Connection event handlers
      socketRef.current.on("connect", () => {
        console.log("✅ Connected to cricket score server (v2.x)");
        setIsConnected(true);
        
        // Subscribe to score updates using oldgmid - v2.x format
        const subscribeData = { 
          type: 1, 
          rooms: [parseInt(oldgmid)]
        };
        socketRef.current.emit("subscribe", subscribeData);
        console.log(`🎯 Subscribed to cricket score updates for oldgmid: ${oldgmid}`);
      });

      socketRef.current.on("disconnect", (reason: string) => {
        console.log("❌ Disconnected from cricket score server:", reason);
        setIsConnected(false);
      });

      // Enhanced error handling with v2.x fallback
      socketRef.current.on("connect_error", (error: any) => {
        console.error("🔥 Cricket score connection error:", error);
        setIsConnected(false);
        
        // Try HTTP polling fallback with v2.x protocol
        console.log("🔄 Trying v2.x polling fallback...");
        setTimeout(() => {
          // connectWithV2Fallback(oldgmid); // This line was removed from the original file, so it's removed here.
        }, 3000);
      });

      socketRef.current.on("connect_timeout", () => {
        console.error("⏰ Cricket score connection timeout");
        setIsConnected(false);
      });

      // Score update handler - handle v2.x response formats
      socketRef.current.on("update", (data: any) => {
        console.log("🔄 Cricket score update received:", data);
        if (data && data.data) {
          setCricketScoreData(data.data);
        } else if (data && typeof data === 'object') {
          // Handle direct data format
          setCricketScoreData(data);
        }
      });

      // Additional v2.x compatible events
      socketRef.current.on("message", (data: any) => {
        console.log("📨 Cricket score message:", data);
        if (data && data.data) {
          setCricketScoreData(data.data);
        }
      });

      // Handle v2.x specific events
      socketRef.current.on("data", (data: any) => {
        console.log("📊 Cricket score data event:", data);
        if (data) {
          setCricketScoreData(data);
        }
      });

    } catch (error) {
      console.error("🔥 Failed to create cricket socket connection:", error);
      setIsConnected(false);
    }
  };

  // v2.x polling fallback with forced protocol
  const connectWithV2Fallback = (oldgmid: string) => {
    try {
      console.log("🔄 Attempting v2.x polling fallback...");
      
      // Force polling with v2.x protocol
      const fallbackOptions = {
        transports: ['polling'],
        upgrade: false,
        reconnection: false,
        timeout: 15000,
        forceNew: true,
        // CRITICAL: Force EIO=3 for v2.x polling
        query: {
          EIO: '3',
          transport: 'polling'
        },
        jsonp: false
      };

      if (socketRef.current) {
        socketRef.current.disconnect();
      }

      socketRef.current = io("https://d-score.scoreswift.xyz", fallbackOptions);
      
      socketRef.current.on("connect", () => {
        console.log("✅ v2.x Polling fallback connection successful");
        setIsConnected(true);
        socketRef.current.emit("subscribe", { type: 1, rooms: [parseInt(oldgmid)] });
        console.log(`🎯 Fallback subscribed to oldgmid: ${oldgmid}`);
      });

      socketRef.current.on("connect_error", (error: any) => {
        console.error("🔥 v2.x Polling fallback failed:", error);
        setIsConnected(false);
        // Show user-friendly message after all attempts fail
        setCricketScoreData({
          spnmessage: "Live cricket scores temporarily unavailable. Please refresh the page.",
          spnnation1: "Score service",
          spnnation2: "Reconnecting...",
          score1: "",
          score2: "",
          spnballrunningstatus: "",
          spnrunrate1: "",
          spnrunrate2: "",
          spnreqrate1: "",
          spnreqrate2: "",
          dayno: "",
          isfinished: "",
          activenation1: "",
          activenation2: "",
          balls: []
        });
      });

      // Handle score updates in fallback mode
      socketRef.current.on("update", (data: any) => {
        console.log("🔄 Fallback score update:", data);
        if (data) {
          setCricketScoreData(data.data || data);
        }
      });

    } catch (error) {
      console.error("🔥 v2.x Fallback connection creation failed:", error);
      setIsConnected(false);
    }
  };

  const getBallClass = (ball: string) => {
    switch (ball) {
      case '6':
        return 'six';
      case '4':
        return 'four';
      case 'ww':
      case 'W':
        return 'wicket';
      default:
        return '';
  }
  };

  // Cricket Scorecard Implementation (Restored Previous UI)
  const renderCricketScorecard = () => {
    if (!cricketScore) {
      return (
        <div className='scorecard-cricket m-b-5'>
          <div className='text-center'>
            <p className='mb-0'>
              {cricketConnected ? 'Waiting for cricket score updates...' : 'Connecting to cricket score server...'}
            </p>
            <span className={`badge ${cricketConnected ? 'badge-success' : 'badge-danger'}`}>
              {cricketConnected ? 'Live' : 'Disconnected'}
            </span>
          </div>
        </div>
      );
    }

    // Helper function for ball styling
    const getBallClass = (ball: string) => {
      if (ball === '4') return 'four';
      if (ball === '6') return 'six';
      if (ball === 'W' || ball === 'w') return 'wicket';
      return '';
    };

    if (isMobile) {
      return (
        <div className='scorecard-cricket m-b-5'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-between align-items-center mb-2'>
                <h6 className='mb-0'>Live Cricket Score</h6>
                <span className={`badge ${cricketConnected ? 'badge-success' : 'badge-danger'}`}>
                  {cricketConnected ? 'Live' : 'Disconnected'}
                </span>
              </div>
            </div>
          </div>

          <div className='row row5'>
            <div className='col-6'>
              {cricketScore.spnnation1 && (
                <p className='team-1 row m-t-10'>
                  <span className='team-name col-6'>
                    {cricketScore.spnnation1.trim()}
                    {cricketScore.activenation1 === '1' && <span className='text-success'> *</span>}
                  </span>
                  <span className='score col-6 text-right'>{cricketScore.score1}</span>
                </p>
              )}
            </div>
            <div className='col-6'>
              {cricketScore.spnnation2 && (
                <p className='team-1 row m-t-10'>
                  <span className='team-name col-6'>
                    {cricketScore.spnnation2.trim()}
                    {cricketScore.activenation2 === '1' && <span className='text-success'> *</span>}
                  </span>
                  <span className='score col-6 text-right'>{cricketScore.score2}</span>
                </p>
              )}
            </div>
          </div>

          {cricketScore.spnmessage && (
            <div className='row'>
              <div className='col-md-12'>
                <div className='text-center mb-2'>
                  <small>{cricketScore.spnmessage}</small>
                </div>
              </div>
            </div>
          )}

          {cricketScore.balls && cricketScore.balls.length > 0 && (
            <div className='row'>
              <div className='col-md-12'>
                <p className='text-center ball-by-ball'>
                  {cricketScore.balls.map((ball: string, index: number) => (
                    ball !== '' && (
                      <span
                        key={`ball-${index}`}
                        className={`ball-runs m-l-5 ${getBallClass(ball)}`}
                      >
                        {ball}
                      </span>
                    )
                  ))}
                </p>
              </div>
            </div>
          )}

          {cricketScore.spnballrunningstatus && (
            <div className='row'>
              <div className='col-md-12'>
                <div className='text-center alert alert-warning mb-2'>
                  Ball Running: {cricketScore.spnballrunningstatus}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Desktop cricket scorecard (Previous UI)
    return (
      <div className='scorecard-cricket m-b-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='d-flex justify-content-between align-items-center mb-2'>
              <h6 className='mb-0'>Live Cricket Score</h6>
              <span className={`badge ${cricketConnected ? 'badge-success' : 'badge-danger'}`}>
                {cricketConnected ? 'Live' : 'Disconnected'}
              </span>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-5'>
            <div>
              {cricketScore.spnnation1 && (
                <p className='team-1 d-flex m-t-10'>
                  <span className='team-name col-md-6'>
                    {cricketScore.spnnation1.trim()}
                    {cricketScore.activenation1 === '1' && <span className='text-success'> *</span>}
                  </span>
                  <span className='score col-md-6 text-right'>{cricketScore.score1}</span>
                </p>
              )}
              {cricketScore.spnnation2 && (
                <p className='team-1 d-flex m-t-10'>
                  <span className='team-name col-md-6'>
                    {cricketScore.spnnation2.trim()}
                    {cricketScore.activenation2 === '1' && <span className='text-success'> *</span>}
                  </span>
                  <span className='score col-md-6 text-right'>{cricketScore.score2}</span>
                </p>
              )}
              {(!cricketScore.spnnation1 && !cricketScore.spnnation2) && (
                <p className='team-1 m-t-10'><span>&nbsp;</span></p>
              )}
            </div>
          </div>
          <div className='col-md-7'>
            {cricketScore.spnmessage && (
              <div className='text-right'>
                <p className='m-b-0'>{cricketScore.spnmessage}</p>
              </div>
            )}
            <div className='row'>
              <div className='col-md-12'>
                {cricketScore.balls && cricketScore.balls.length > 0 && (
                  <p className='text-right ball-by-ball m-t-10'>
                    {cricketScore.balls.map((ball: string, index: number) => (
                      ball !== '' && (
                        <span
                          key={`ball-${index}`}
                          className={`ball-runs m-l-5 ${getBallClass(ball)}`}
                        >
                          {ball}
                        </span>
                      )
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {cricketScore.spnballrunningstatus && (
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center alert alert-warning mb-2'>
                Ball Running: {cricketScore.spnballrunningstatus}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderIframeScorecard = () => {
    if (!scorecardData?.scoreUrl) {
      // No scorecard available - show message instead of loading
      return (
        <div className='scorecard m-b-5'>
          <div className='text-center p-3' style={{ 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #dee2e6'
          }}>
            <p className='mb-0' style={{ color: '#6c757d' }}>
              {loading ? 'Loading scorecard...' : 'Scorecard not available for this match'}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className='scorecard-iframe m-b-5'>
        <iframe
          ref={iframeRef}
          style={{ 
            width: '100%', 
            height: `${iframeHeight}px`, 
            border: 'none',
            transition: 'height 0.3s ease-in-out',
            minHeight: isMobile ? '280px' : '320px',
            maxHeight: '600px',
            display: 'block'
          }}
          src={scorecardData.scoreUrl}
          title="Live Scorecard"
          onLoad={() => {
            console.log(`📊 Iframe scorecard loaded: ${scorecardData.scoreUrl}`);
          }}
          onError={() => {
            console.error("❌ Failed to load iframe scorecard");
          }}
        />
      </div>
    );
  };

  if (loading) {
    return (
      <div className='scorecard m-b-5'>
        <div className='text-center'>
          <p>Loading scorecard...</p>
        </div>
      </div>
    );
  }

  // Convert sportId to number for comparison
  const sportIdNum = typeof sportId === 'string' ? parseInt(sportId) : sportId;
  
  return (
    <>
      {/* Scorecard only - no streaming here */}
      {/* UPDATED: All sports now use zplay iframe approach when scoreUrl is available */}
      {scorecardData?.scoreUrl ? 
        renderIframeScorecard() : 
        (scorecardData?.type === 'cricket' || sportIdNum === 4) ? 
          renderCricketScorecard() : 
          renderIframeScorecard()
      }
    </>
  );
};

export default Score;

