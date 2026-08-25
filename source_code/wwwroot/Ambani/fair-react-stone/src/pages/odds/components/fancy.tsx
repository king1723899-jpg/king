// /* eslint-disable */
// import React, { MouseEvent } from 'react'
// import LFancy from '../../../models/LFancy'
// import { FancyType, IFancy } from '../../../models/IFancy'
// import { SocketContext } from '../../../context/webSocket'
// import { FancyList } from './fancy/fancy-list'
// import { isMobile } from 'react-device-detect'
// import { connect } from 'react-redux'
// import { selectFancyType, setFancyType } from '../../../redux/actions/bet/betSlice'
// import { store } from '../../../redux/store'
// import { setRules } from '../../../redux/actions/common/commonSlice'
// import sportsService from '../../../services/sports.service'

// type FancyBallTypes = {
//   blank: LFancy[]
//   ballRun: LFancy[]
//   overBallNo: LFancy[]
//   fancy1: LFancy[]
//   meter: LFancy[]
//   khado: LFancy[]
//   oddeven: LFancy[]
//   cricketcasino: LFancy[]
//   [key: string]: LFancy[]
// }

// // Market type to display name mapping
// const FANCY_TYPE_NAMES: { [key: string]: string } = {
//   session: 'Fancy',
//   blank: 'Fancy',
//   ballRun: 'Ball by Ball Session',
//   overBallNo: 'Over by Over Session',
//   fancy1: 'Fancy1',
//   meter: 'Meter',
//   khado: 'Khado',
//   oddeven: 'Odd/Even',
//   cricketcasino: 'Cricket Casino',
//   wkt: 'Wicket',
//   Four: 'Four',
//   Sixes: 'Six',
//   Casino: 'Cricket Casino'
// }

// class Fancy extends React.Component<
//   {
//     fancies: LFancy[]
//     matchId: string
//     fancyType: string
//     setRules: (data: { open: boolean; type: string }) => void
//     socketUser: any
//   },
//   {
//     fancies: FancyBallTypes
//     matchId: string
//     fancyUpdate: Record<string, IFancy>
//   }
// > {
//   static contextType = SocketContext
//   context!: React.ContextType<typeof SocketContext>

//   interval: any
//   lastErrorTime: number = 0

//   constructor(props: any) {
//     super(props)
//     const session = props.fancies
//     const updateFancy: Record<string, IFancy> = {}
//     const typesFancy: any = {}
//     session
//       .sort((a: any, b: any) => a.sr_no - b.sr_no)
//       .forEach((fancy: LFancy) => {
//         updateFancy[fancy.marketId] = {
//           gtype: fancy.gtype as FancyType,
//           SelectionId: fancy.marketId,
//           RunnerName: fancy.fancyName,
//         }
//         // Use gtype for better categorization, fallback to name-based categorization
//         const type = this.getFancyCategory(fancy)
//         typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
//       })

//     this.state = {
//       matchId: props.matchId,
//       fancies: typesFancy,
//       fancyUpdate: updateFancy,
//     }
//   }

//   componentDidMount(): void {
//     this.socketEvents()
//   }

//   componentDidUpdate(prevProps: Readonly<{ fancies: LFancy[]; matchId: string }>): void {
//     if (prevProps.matchId !== this.props.matchId) {
//       this.leaveSocketEvents()
//       this.socketEvents()
//       clearInterval(this.interval)
//     }
//     if (prevProps.fancies !== this.props.fancies) {
//       const typesFancy: any = {}
//       this.props.fancies.forEach((fancy: LFancy) => {
//         const type = this.getFancyCategory(fancy)
//         typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
//       })
//       this.setState({ fancies: typesFancy })
//     }
//   }

//   socketEvents = () => {
//     this.context.socket.emit('joinRoom', this.props.matchId)
//     if (this.props.socketUser) {
//       this.props.socketUser.emit('joinRoomMatchIdWUserId', this.props.matchId)
//     }
//     this.getFancySockets()
//     this.addNewFancy()
//     this.removeFancy()
//     this.suspendedFancy()
//     this.context.socket.on('connect', () => {
//       this.context.socket.emit('joinRoom', this.props.matchId)
//     })
//   }

//   leaveSocketEvents = () => {
//     this.context.socket.off('addNewFancy')
//     this.context.socket.off('removeFancy')
//     this.context.socket.off('getFancyData')
//     this.context.socket.off('suspendedFancy')
//     this.context.socket.emit('leaveRoom', this.props.matchId)
//   }

//   getFancySockets() {
//     const handler = () => {
//       sportsService.fancyData(+this.props.matchId)
//         .then(({ data }) => {
//           console.log('🎯 Fancy API response:', data)
          
//           // Transform fancy API response format
//           let fancyData = [];
//           if (data.data && Array.isArray(data.data)) {
//             // Direct array format from API
//             fancyData = data.data.map((item: any) => ({
//               SelectionId: item.SelectionId,
//               RunnerName: item.RunnerName,
//               gtype: item.gtype,
//               GameStatus: item.GameStatus,
//               LayPrice1: item.LayPrice1 || 0,
//               LaySize1: item.LaySize1 || 0,
//               BackPrice1: item.BackPrice1 || 0,
//               BackSize1: item.BackSize1 || 0,
//               LayPrice2: item.LayPrice2 || 0,
//               LaySize2: item.LaySize2 || 0,
//               BackPrice2: item.BackPrice2 || 0,
//               BackSize2: item.BackSize2 || 0,
//               LayPrice3: item.LayPrice3 || 0,
//               LaySize3: item.LaySize3 || 0,
//               BackPrice3: item.BackPrice3 || 0,
//               BackSize3: item.BackSize3 || 0,
//               min: item.min,
//               max: item.max,
//               sr_no: item.sr_no,
//               rem: item.rem || '',
//               ballsess: item.ballsess || '',
//               status: item.status || 'active',
//               active: item.active !== false,
//               suspended: item.suspended || item.GameStatus === 'SUSPENDED' || item.GameStatus === 'Ball Running',
//               matchId: parseInt(this.props.matchId),
//               sportId: 4
//             }));
//           } else if (data.sessions) {
//             // Old format: direct sessions (fallback)
//             fancyData = data.sessions;
//           }
          
//           console.log('🎯 Processed fancy data:', fancyData.length, 'items')
          
//           const fancies = fancyData.reduce((acc: Record<string, IFancy>, fancy: IFancy) => {
//             acc[fancy.SelectionId] = { ...this.state.fancyUpdate[fancy.SelectionId], ...fancy }
//             return acc
//           }, {})
//           this.setState({ fancyUpdate: fancies })
//         })
//         .catch((error) => {
//           // Handle timeout and other errors gracefully
//           console.warn('Fancy data fetch failed:', error.message)
//           // Don't spam the console with errors - just log once per minute
//           if (!this.lastErrorTime || Date.now() - this.lastErrorTime > 60000) {
//             console.error('Fancy API error:', error.message)
//             this.lastErrorTime = Date.now()
//           }
//         })
//     }
//     // Update every 500ms (0.5 seconds) for faster odds updates
//     this.interval = setInterval(handler, 500)

//     // const socketHandler = (fancy: IFancy) => {
//     //   this.setState({ fancyUpdate: { ...this.state.fancyUpdate, [fancy.SelectionId]: fancy } })
//     // }
//     // this.context.socket.on('getFancyData', socketHandler)
//   }

//   checkFancyKey = (allFancies: LFancy[], fancy: IFancy) => {
//     return allFancies.findIndex((f) => f.marketId === fancy.SelectionId)
//   }

//   addNewFancy = () => {
//     if (this.props.socketUser) {
//       this.props.socketUser.on('addNewFancy', ({ newFancy, fancy }: any) => {
//         const type = this.getFancyCategory(fancy)
//         const allFacies = [...this.state.fancies[type]]

//         if (this.checkFancyKey(allFacies, fancy) === -1 && this.props.fancyType == newFancy.gtype) {
//           const items = { ...this.state.fancyUpdate }
//           allFacies.push(newFancy)
//           this.setState({
//             fancies: {
//               ...this.state.fancies,
//               [type]: allFacies.sort((a: any, b: any) => a.sr_no - b.sr_no),
//             },
//             fancyUpdate: { ...items, [fancy.SelectionId]: fancy },
//           })
//         }
//       })
//     }
//   }

//   removeFancy = () => {
//     if (this.props.socketUser)
//       this.props.socketUser.on('removeFancy', (fancy: any) => {
//         const type = this.getFancyCategory(fancy)
//         const allFacies = [...this.state.fancies[type]]

//         const fancies = allFacies.filter((f) => f.marketId !== fancy.marketId)
//         delete this.state.fancyUpdate[fancy.marketId]
//         this.setState({
//           fancies: { ...this.state.fancies, [type]: fancies },
//           fancyUpdate: this.state.fancyUpdate,
//         })
//       })
//   }

//   suspendedFancy = () => {
//     this.context.socket.on('suspendedFancy', ({ fancy, type }) => {
//       const fancies = [...this.state.fancies[this.getFancyCategory(fancy)]]

//       const fanciesIndex = fancies.findIndex(
//         (f) => f.marketId === fancy.marketId && f.matchId === fancy.matchId,
//       )

//       if (fanciesIndex !== -1) {
//         if (type !== 'active') {
//           fancies[fanciesIndex].GameStatus = fancy.GameStatus
//           fancies[fanciesIndex].isSuspend = fancy.isSuspend
//         } else {
//           fancies[fanciesIndex].active = fancy.active
//         }
//         this.setState({
//           fancies: { ...this.state.fancies, [type]: fancies },
//           fancyUpdate: this.state.fancyUpdate,
//         })
//       }
//     })
//   }

//   componentWillUnmount(): void {
//     this.leaveSocketEvents()
//     clearInterval(this.interval)
//   }

//   FancyBallTypes(fancyName: string) {
//     let type = 'blank'
//     if (fancyName) {
//       if (fancyName.includes(' ball run ')) {
//         type = 'ballRun'
//       }
//       if (
//         /^Only/.test(fancyName) ||
//         fancyName.includes(' ball No ') //||
//         //fancyName.includes(' over run ')
//       ) {
//         type = 'overBallNo'
//       }
//     }
//     return type
//   }

//   onFancyType = (type: string) => {
//     // Remove this method as nav tabs are no longer used
//   }

//   fancyMenu = (fancyType: string) => {
//     // Remove this method as nav tabs are no longer used
//     return []
//   }

//   fancyheader = (title: string) => {
//     return (
//       <div className='table-header'>
//         <div className={`float-left ${isMobile ? 'bg-theme text-white' : ''} country-name box-6`}>
//           {isMobile ? title : ''}
//         </div>
//         <div className={`${isMobile ? 'box-2' : 'box-1'} float-left lay text-center`}>
//           <b>No</b>
//         </div>
//         <div className={`${isMobile ? 'box-2' : 'box-1'} float-left back text-center`}>
//           <b>Yes</b>
//         </div>
//         {!isMobile && <div className='box-2 float-left' />}
//       </div>
//     )
//   }

//   // Enhanced categorization function
//   getFancyCategory(fancy: LFancy): string {
//     // Map API gtype values to display categories
//     const gtypeMapping: { [key: string]: string } = {
//       'fancy': 'blank',           // Traditional fancy markets
//       'fancy1': 'fancy1',         // Fancy1 markets - HIDDEN
//       'fancy2': 'blank',          // Fancy2 markets - treat as traditional fancy
//       'meter': 'meter',           // Meter markets
//       'khado': 'khado',           // Khado markets - HIDDEN
//       'oddeven': 'oddeven',       // Odd/Even markets - HIDDEN
//       'cricketcasino': 'cricketcasino', // Cricket casino markets - HIDDEN
//       'session': 'blank'          // Session markets - treat as traditional fancy
//     };
    
//     // First check if it has a specific gtype and map it
//     if (fancy.gtype && gtypeMapping[fancy.gtype]) {
//       return gtypeMapping[fancy.gtype];
//     }
    
//     // If gtype is not recognized, check if it's a valid category directly
//     if (fancy.gtype && ['blank', 'fancy1', 'meter', 'khado', 'oddeven', 'ballRun', 'overBallNo', 'cricketcasino'].includes(fancy.gtype)) {
//       return fancy.gtype;
//     }
    
//     // Fallback to name-based categorization for unknown types
//     return this.FancyBallTypes(fancy.fancyName);
//   }
//   render(): React.ReactNode {
//     const { fancies, matchId, fancyUpdate } = this.state
//     const clsgrid = isMobile ? 'col-12' : 'col-6'

//     // Helper function to render a fancy section
//     const renderFancySection = (fancyKey: string, fancyList: LFancy[]) => {
//       if (!fancyList || fancyList.length === 0) return null;
      
//       const displayName = FANCY_TYPE_NAMES[fancyKey] || fancyKey.charAt(0).toUpperCase() + fancyKey.slice(1);
//       const ruleType = this.getFancyRuleType(fancyKey);
      
//       return (
//         <div key={fancyKey} style={{ marginBottom: '20px' }}>
//           {!isMobile && (
//             <div className='market-title mt-1'>
//               {displayName} Market
//               <a
//                 href='#'
//                 onClick={(e: MouseEvent<HTMLAnchorElement>) => {
//                   e.preventDefault()
//                   this.props.setRules({
//                     open: true,
//                     type: ruleType,
//                   })
//                 }}
//                 className='m-r-5 game-rules-icon'
//               >
//                 <span>
//                   <i className='fa fa-info-circle float-right' />
//                 </span>
//               </a>
//             </div>
//           )}
//           {this.fancyheader(`${displayName} Market`)}
//           <FancyList fancies={fancyList} fancyUpdate={fancyUpdate} />
//         </div>
//       );
//     };

//     return (
//       <>
//         <div
//           className='fancy-market row'
//           style={{ marginLeft: isMobile ? '0px' : '', marginRight: isMobile ? '0px' : '' }}
//         >
//           {/* Left Column */}
//           <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
//             {/* Traditional Fancy/Session Markets */}
//             {renderFancySection('blank', fancies.blank)}
            
//             {/* Fancy1 Markets - HIDDEN */}
//             {/* {renderFancySection('fancy1', fancies.fancy1)} */}
            
//             {/* Ball Run Markets */}
//             {renderFancySection('ballRun', fancies.ballRun)}
//           </div>
          
//           {/* Right Column */}
//           <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
//             {/* Over Ball Number Markets */}
//             {renderFancySection('overBallNo', fancies.overBallNo)}
            
//             {/* Meter Markets */}
//             {renderFancySection('meter', fancies.meter)}
            
//             {/* Khado Markets - HIDDEN */}
//             {/* {renderFancySection('khado', fancies.khado)} */}
            
//             {/* Odd/Even Markets - HIDDEN */}
//             {/* {renderFancySection('oddeven', fancies.oddeven)} */}
            
//             {/* Cricket Casino Markets - HIDDEN */}
//             {/* {renderFancySection('cricketcasino', fancies.cricketcasino)} */}
            
//             {/* Other custom fancy types */}
//             {Object.keys(fancies).map((fancyKey) => {
//               // Skip already rendered types and hidden types
//               if (['blank', 'fancy1', 'ballRun', 'overBallNo', 'meter', 'khado', 'oddeven', 'cricketcasino'].includes(fancyKey)) {
//                 return null;
//               }
//               return renderFancySection(fancyKey, fancies[fancyKey]);
//             })}
//           </div>
//         </div>
//       </>
//     )
//   }

//   // Helper function to get rule type for different fancy categories
//   getFancyRuleType(fancyKey: string): string {
//     const ruleTypeMap: { [key: string]: string } = {
//       'blank': 'Fancy-Market-1',
//       'fancy1': 'Fancy1-Market',
//       'meter': 'Meter-Market',
//       'khado': 'Khado-Market',
//       'oddeven': 'OddEven-Market',
//       'cricketcasino': 'Cricket-Casino-Market',
//       'ballRun': 'Fancy-Market-1',
//       'overBallNo': 'Fancy-Market-1'
//     };
    
//     return ruleTypeMap[fancyKey] || 'Fancy-Market-1';
//   }
// }

// const mapStateToProps = (state: any) => ({
//   fancyType: state.betReducer.fancyType,
// })

// const actionCreators = {
//   selectFancyType,
//   setRules,
// }
// export default connect(mapStateToProps, actionCreators)(Fancy)



/* eslint-disable */
import React, { MouseEvent } from 'react'
import LFancy from '../../../models/LFancy'
import { FancyType, IFancy } from '../../../models/IFancy'
import { SocketContext } from '../../../context/webSocket'
import { FancyList } from './fancy/fancy-list'
import { isMobile } from 'react-device-detect'
import { connect } from 'react-redux'
import { selectFancyType, setFancyType } from '../../../redux/actions/bet/betSlice'
import { store } from '../../../redux/store'
import { setRules } from '../../../redux/actions/common/commonSlice'
import sportsService from '../../../services/sports.service'
import AccordianHeader from './accordian-header'
import IMarket, { OddsType } from '../../../models/IMarket'
type FancyBallTypes = {
  blank: LFancy[]
  ballRun: LFancy[]
  overBallNo: LFancy[]
  fancy1: LFancy[]
  meter: LFancy[]
  khado: LFancy[]
  oddeven: LFancy[]
  cricketcasino: LFancy[]
  [key: string]: LFancy[]
}

// Market type to display name mapping
const FANCY_TYPE_NAMES: { [key: string]: string } = {
  session: 'Fancy',
  blank: 'Fancy',
  ballRun: 'Ball by Ball Session',
  overBallNo: 'Over by Over Session',
  fancy1: 'Fancy1',
  meter: 'Meter',
  khado: 'Khado',
  oddeven: 'Odd/Even',
  cricketcasino: 'Cricket Casino',
  wkt: 'Wicket',
  Four: 'Four',
  Sixes: 'Six',
  Casino: 'Cricket Casino'
}

class Fancy extends React.Component<
  {
    fancies: LFancy[]
    matchId: string
    fancyType: string
    setRules: (data: { open: boolean; type: string }) => void
    socketUser: any
  },
  {
    fancies: FancyBallTypes
    matchId: string
    fancyUpdate: Record<string, IFancy>
  }
> {
  static contextType = SocketContext
  context!: React.ContextType<typeof SocketContext>

  interval: any
  lastErrorTime: number = 0
  constructor(props: any) {
    super(props)
    const session = props.fancies
    const updateFancy: Record<string, IFancy> = {}
    const typesFancy: any = {}
    session
      .sort((a: any, b: any) => a.sr_no - b.sr_no)
      .forEach((fancy: LFancy) => {
        updateFancy[fancy.marketId] = {
          gtype: fancy.gtype as FancyType,
          SelectionId: fancy.marketId,
          RunnerName: fancy.fancyName,
        }
        // Use gtype for better categorization, fallback to name-based categorization
        const type = this.getFancyCategory(fancy)
        typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
      })

    this.state = {
      matchId: props.matchId,
      fancies: typesFancy,
      fancyUpdate: updateFancy,
    }
  }

  componentDidMount(): void {
    this.socketEvents()
  }

  componentDidUpdate(prevProps: Readonly<{ fancies: LFancy[]; matchId: string }>): void {
    if (prevProps.matchId !== this.props.matchId) {
      this.leaveSocketEvents()
      this.socketEvents()
      clearInterval(this.interval)
    }
    if (prevProps.fancies !== this.props.fancies) {
      const typesFancy: any = {}
      this.props.fancies.forEach((fancy: LFancy) => {
        const type = this.getFancyCategory(fancy)
        typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
      })
      this.setState({ fancies: typesFancy })
    }
  }

  socketEvents = () => {
    this.context.socket.emit('joinRoom', this.props.matchId)
    if (this.props.socketUser) {
      this.props.socketUser.emit('joinRoomMatchIdWUserId', this.props.matchId)
    }
    this.getFancySockets()
    this.addNewFancy()
    this.removeFancy()
    this.suspendedFancy()
    this.context.socket.on('connect', () => {
      this.context.socket.emit('joinRoom', this.props.matchId)
    })
  }

  leaveSocketEvents = () => {
    this.context.socket.off('addNewFancy')
    this.context.socket.off('removeFancy')
    this.context.socket.off('getFancyData')
    this.context.socket.off('suspendedFancy')
    this.context.socket.emit('leaveRoom', this.props.matchId)
  }

   getFancySockets() {
    const handler = () => {
      sportsService.fancyData(+this.props.matchId)
        .then(({ data }) => {
          console.log('🎯 Fancy API response:', data)

          // Transform fancy API response format
          let fancyData = [];
          if (data.data && Array.isArray(data.data)) {
            // Direct array format from API
            fancyData = data.data.map((item: any) => ({
              SelectionId: item.SelectionId,
              RunnerName: item.RunnerName,
              gtype: item.gtype,
              GameStatus: item.GameStatus,
              LayPrice1: item.LayPrice1 || 0,
              LaySize1: item.LaySize1 || 0,
              BackPrice1: item.BackPrice1 || 0,
              BackSize1: item.BackSize1 || 0,
              LayPrice2: item.LayPrice2 || 0,
              LaySize2: item.LaySize2 || 0,
              BackPrice2: item.BackPrice2 || 0,
              BackSize2: item.BackSize2 || 0,
              LayPrice3: item.LayPrice3 || 0,
              LaySize3: item.LaySize3 || 0,
              BackPrice3: item.BackPrice3 || 0,
              BackSize3: item.BackSize3 || 0,
              min: item.min,
              max: item.max,
              sr_no: item.sr_no,
              rem: item.rem || '',
              ballsess: item.ballsess || '',
              status: item.status || 'active',
              active: item.active !== false,
              suspended: item.suspended || item.GameStatus === 'SUSPENDED' || item.GameStatus === 'Ball Running',
              matchId: parseInt(this.props.matchId),
              sportId: 4
            }));
          } else if (data.sessions) {
            // Old format: direct sessions (fallback)
            fancyData = data.sessions;
          }

          console.log('🎯 Processed fancy data:', fancyData.length, 'items')

          const fancies = fancyData.reduce((acc: Record<string, IFancy>, fancy: IFancy) => {
            acc[fancy.SelectionId] = { ...this.state.fancyUpdate[fancy.SelectionId], ...fancy }
            return acc
          }, {})
          this.setState({ fancyUpdate: fancies })
        })
        .catch((error) => {
          // Handle timeout and other errors gracefully
          console.warn('Fancy data fetch failed:', error.message)
          // Don't spam the console with errors - just log once per minute
          if (!this.lastErrorTime || Date.now() - this.lastErrorTime > 60000) {
            console.error('Fancy API error:', error.message)
            this.lastErrorTime = Date.now()
          }
        })
    }
    // Update every 500ms (0.5 seconds) for faster odds updates
    this.interval = setInterval(handler, 500)

    // const socketHandler = (fancy: IFancy) => {
    //   this.setState({ fancyUpdate: { ...this.state.fancyUpdate, [fancy.SelectionId]: fancy } })
    // }
    // this.context.socket.on('getFancyData', socketHandler)
  }

  checkFancyKey = (allFancies: LFancy[], fancy: IFancy) => {
    return allFancies.findIndex((f) => f.marketId === fancy.SelectionId)
  }

  addNewFancy = () => {
    if (this.props.socketUser) {
      this.props.socketUser.on('addNewFancy', ({ newFancy, fancy }: { newFancy: any, fancy: any }) => {
        const type = this.getFancyCategory(fancy)
        const allFacies = [...this.state.fancies[type]]

        if (this.checkFancyKey(allFacies, fancy) === -1 && this.props.fancyType == newFancy.gtype) {
          const items = { ...this.state.fancyUpdate }
          allFacies.push(newFancy)
          this.setState({
            fancies: {
              ...this.state.fancies,
              [type]: allFacies.sort((a: any, b: any) => a.sr_no - b.sr_no),
            },
            fancyUpdate: { ...items, [fancy.SelectionId]: fancy },
          })
        }
      })
    }
  }

  removeFancy = () => {
    if (this.props.socketUser)
      this.props.socketUser.on('removeFancy', (fancy: any) => {
        const type = this.getFancyCategory(fancy)
        const allFacies = [...this.state.fancies[type]]

        const fancies = allFacies.filter((f) => f.marketId !== fancy.marketId)
        delete this.state.fancyUpdate[fancy.marketId]
        this.setState({
          fancies: { ...this.state.fancies, [type]: fancies },
          fancyUpdate: this.state.fancyUpdate,
        })
      })
  }

  suspendedFancy = () => {
    this.context.socket.on('suspendedFancy', ({ fancy, type }: { fancy: any, type: string }) => {
      const fancies = [...this.state.fancies[this.getFancyCategory(fancy)]]

      const fanciesIndex = fancies.findIndex(
        (f) => f.marketId === fancy.marketId && f.matchId === fancy.matchId,
      )

      if (fanciesIndex !== -1) {
        if (type !== 'active') {
          fancies[fanciesIndex].GameStatus = fancy.GameStatus
          fancies[fanciesIndex].isSuspend = fancy.isSuspend
        } else {
          fancies[fanciesIndex].active = fancy.active
        }
        this.setState({
          fancies: { ...this.state.fancies, [type]: fancies },
          fancyUpdate: this.state.fancyUpdate,
        })
      }
    })
  }

  componentWillUnmount(): void {
    this.leaveSocketEvents()
    clearInterval(this.interval)
  }

  FancyBallTypes(fancyName: string) {
    let type = 'blank'
    if (fancyName) {
      if (fancyName.includes(' ball run ')) {
        type = 'ballRun'
      }
      if (
        /^Only/.test(fancyName) ||
        fancyName.includes(' ball No ') //||
        //fancyName.includes(' over run ')
      ) {
        type = 'overBallNo'
      }
    }
    return type
  }

  onFancyType = (type: string) => {
    // Remove this method as nav tabs are no longer used
  }

  fancyMenu = (fancyType: string) => {
    // Remove this method as nav tabs are no longer used
    return []
  }

  fancyheader = (title: string) => {
    return (
      <div className='table-header'>
        <div className={`float-left ${isMobile ? ' text-white' : ''} country-name box-6`}>
          {isMobile ? title : ''}
        </div>
  <div className={`${isMobile ? 'box-2' : 'box-1'} float-left text-center`}>
          <b>No</b>
        </div>
  <div className={`${isMobile ? 'box-2' : 'box-1'} float-left text-center`}>
          <b>Yes</b>
        </div>
        {!isMobile && <div className='box-2 float-left' />}
      </div>
    )
  }

  // Enhanced categorization function
  getFancyCategory(fancy: LFancy): string {
    // Map API gtype values to display categories
    const gtypeMapping: { [key: string]: string } = {
      'fancy': 'blank',           // Traditional fancy markets
      'fancy1': 'fancy1',         // Fancy1 markets - HIDDEN
      'fancy2': 'blank',          // Fancy2 markets - treat as traditional fancy
      'meter': 'meter',           // Meter markets
      'khado': 'khado',           // Khado markets - HIDDEN
      'oddeven': 'oddeven',       // Odd/Even markets - HIDDEN
      'cricketcasino': 'cricketcasino', // Cricket casino markets - HIDDEN
      'session': 'blank'          // Session markets - treat as traditional fancy
    };

    // First check if it has a specific gtype and map it
    if (fancy.gtype && gtypeMapping[fancy.gtype]) {
      return gtypeMapping[fancy.gtype];
    }

    // If gtype is not recognized, check if it's a valid category directly
    if (fancy.gtype && ['blank', 'fancy1', 'meter', 'khado', 'oddeven', 'ballRun', 'overBallNo', 'cricketcasino'].includes(fancy.gtype)) {
      return fancy.gtype;
    }

    // Fallback to name-based categorization for unknown types
    return this.FancyBallTypes(fancy.fancyName);
  }
  render(): React.ReactNode {
    const { fancies, matchId, fancyUpdate } = this.state
    const clsgrid = isMobile ? 'col-12' : 'col-6'

    // Helper function to render a fancy section
    const renderFancySection = (fancyKey: string, fancyList: LFancy[]) => {
      if (!fancyList || fancyList.length === 0) return null;

      const displayName = FANCY_TYPE_NAMES[fancyKey] || fancyKey.charAt(0).toUpperCase() + fancyKey.slice(1);
      const ruleType = this.getFancyRuleType(fancyKey);
      const headerMarket: IMarket = {
        isActive: true,
        isDelete: false,
        marketId: `${this.props.matchId}-${fancyKey}`,
        marketName: `${displayName} Market`,
        gtype: 'fancy',
        matchId: parseInt(this.props.matchId),
        oddsType: OddsType.F,
        seriesId: '0',
        sportId: 4,
        __v: 0,
        runners: [],
      };
  const firstId = fancyList?.[0]?.marketId;
  const offplaylimit = Number((firstId && this.state.fancyUpdate[firstId]?.max) ?? 0);
      return (
        <div key={fancyKey} style={{ marginBottom: '1px' }}>
          <AccordianHeader
            market={headerMarket}
            // Override setRules so clicking the info icon opens the correct rule type label
            setRules={() => this.props.setRules({ open: true, type: ruleType })}
            offplaylimit={offplaylimit}
            oddsData={null}
            runnersName={{}}
            getMarketBook={() => { }}
            selectionsPrev={{}}
            isMobile={isMobile}
          >
            {this.fancyheader(isMobile ? '' : `${displayName} Market`)}
            <FancyList fancies={fancyList} fancyUpdate={fancyUpdate} />
          </AccordianHeader>
        </div>
      );
    };

    return (
      <>
        <div
          className='fancy-market row'
          style={{ marginLeft: isMobile ? '0px' : '', marginRight: isMobile ? '0px' : '' }}
        >
          {/* Left Column */}
          <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
            {/* Traditional Fancy/Session Markets */}
            {renderFancySection('blank', fancies.blank)}

            {/* Fancy1 Markets - HIDDEN */}
            {/* {renderFancySection('fancy1', fancies.fancy1)} */}

            {/* Ball Run Markets */}
            {renderFancySection('ballRun', fancies.ballRun)}
          </div>

          {/* Right Column */}
          <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
            {/* Over Ball Number Markets */}
            {renderFancySection('overBallNo', fancies.overBallNo)}

            {/* Meter Markets */}
            {renderFancySection('meter', fancies.meter)}

            {/* Khado Markets - HIDDEN */}
            {/* {renderFancySection('khado', fancies.khado)} */}

            {/* Odd/Even Markets - HIDDEN */}
            {/* {renderFancySection('oddeven', fancies.oddeven)} */}

            {/* Cricket Casino Markets - HIDDEN */}
            {/* {renderFancySection('cricketcasino', fancies.cricketcasino)} */}

            {/* Other custom fancy types */}
            {Object.keys(fancies).map((fancyKey) => {
              // Skip already rendered types and hidden types
              if (['blank', 'fancy1', 'ballRun', 'overBallNo', 'meter', 'khado', 'oddeven', 'cricketcasino'].includes(fancyKey)) {
                return null;
              }
              return renderFancySection(fancyKey, fancies[fancyKey]);
            })}
          </div>
        </div>
      </>
    )
  }

  // Helper function to get rule type for different fancy categories
  getFancyRuleType(fancyKey: string): string {
    const ruleTypeMap: { [key: string]: string } = {
      'blank': 'Fancy-Market-1',
      'fancy1': 'Fancy1-Market',
      'meter': 'Meter-Market',
      'khado': 'Khado-Market',
      'oddeven': 'OddEven-Market',
      'cricketcasino': 'Cricket-Casino-Market',
      'ballRun': 'Fancy-Market-1',
      'overBallNo': 'Fancy-Market-1'
    };

    return ruleTypeMap[fancyKey] || 'Fancy-Market-1';
  }
}

const mapStateToProps = (state: any) => ({
  fancyType: state.betReducer.fancyType,
})

const actionCreators = {
  selectFancyType,
  setRules,
}
export default connect(mapStateToProps, actionCreators)(Fancy)
