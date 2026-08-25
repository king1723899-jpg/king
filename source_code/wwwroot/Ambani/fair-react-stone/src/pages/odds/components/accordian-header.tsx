import * as React from "react";
import { MouseEvent } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IMarket, { OddsType } from "../../../models/IMarket";
import MatchOddsAccord from "./match-odds-accord";
import CashoutButton from "../../../components/CashoutButton";
interface AccordianHeaderProps {
  market: IMarket;
  setRules?: (data: { open: boolean; type: string }) => void;
  offplaylimit?: number;
  oddsData?: any;
  runnersName: Record<string, string>;
  getMarketBook: any;
  selectionsPrev: any;
  isMobile: boolean;
  children?: React.ReactNode;
  // Optional explicit rule/info type to override default mapping
  infoType?: string;
  matchId?: string | number;
}

const AccordianHeader = ({
   market,
  setRules,
  offplaylimit,
  oddsData,
  runnersName,
  getMarketBook,
  selectionsPrev,
  isMobile,
  children,
  infoType,
  matchId,
}: AccordianHeaderProps) => {
  const handleInfoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setRules) {
      setRules({
        open: true,
        // Prefer provided infoType (e.g., Fancy-Market-1) else fallback to default oddsType mapping
        type: infoType || (market.oddsType === OddsType.BM ? "Bookmaker" : market.oddsType),
      });
    }
  };

  // Calculate class names for MatchOddsAccord based on mobile and market type


// changed this condition to the code which i have write it specifics the larger box for every market type if its on mobile
  //   const classforheadingfirst =
  //   isMobile && market.oddsType === OddsType.F ? "box-6" : "box-4";
  // const classforheading =
  //   isMobile && market.oddsType === OddsType.F ? "box-2" : "box-1";


  const classforheadingfirst =
    isMobile  ? "box-6" : "box-4";
  const classforheading =
    isMobile  ? "box-2" : "box-1";

  return (
    <div style={{ width: "100%",marginBottom:"1px" }}>
      <Accordion
      defaultExpanded
        sx={{
          "&.MuiAccordion-root": {
            overflow: "hidden",
            margin: 0,
            background:"transparent",
            borderRadius: "0px !important",
            width: "100%",
            boxShadow: "none",
            padding: "0px !important",
            "&:before": {
              display: "none",
            },
            // Remove bottom spacing
            "&.Mui-expanded": {
              margin: "0 !important",
              padding: "0 !important"
            },
          },
          // Remove AccordionDetails padding
          "& .MuiAccordionDetails-root": {
            padding: "0 !important",
          },
          // Remove AccordionSummary spacing when expanded
          "& .MuiAccordionSummary-root.Mui-expanded": {
            minHeight: "42px !important",
            margin: "0 !important",
            padding: "0 !important"
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            padding: 0,
            margin: 0,
            minHeight: "42px !important",
            height: "42px",
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
              padding: "0px !important",
              height: "100%",
              width: "100%",
            },
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: "0 !important",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              position: "relative",
              background:"transparent"
            }}
          >
           {/* Left Section - Red */}
            <div
              style={{
                backgroundColor: "#c10930",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
                height: "100%",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                position: "relative",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {market.marketName}

            </div>
            {/* <i className="bi bi-bookmarks"/> */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingRight: "1rem",
                height: "100%",
                position: "relative",
                zIndex: 0,
                gap: "1rem",
              }}
            >
              {/* Cashout Button - shows for non-fancy markets */}
              {market.oddsType !== OddsType.F && matchId && (
                <div 
                  style={{ position: "relative", zIndex: 101 }} 
                  onClick={(e) => e.stopPropagation()}
                >
                  <CashoutButton 
                    market={market} 
                    oddsData={oddsData} 
                    matchId={matchId} 
                  />
                </div>
              )}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                <path
                  d="M19 21L12 16L5 21V5C5 3.9 5.9 3 7 3H17C18.1 3 19 3.9 19 5V21Z"
                  fill="none"
                  stroke="#f77801ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>



            {/* Right Section - Yellow */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "0.3rem",
                height: "100%",
                position: "relative",
                zIndex: 0,
                gap: "1rem",
              }}
            >
              <span style={{  fontSize: "10px" }}>
                Min: 100 | Max: <span>{Number(offplaylimit) / 1000}k</span>
              </span>
              <a
                href="#Bookmaker-market"
                onClick={handleInfoClick}

              >
                {/* <span>
                  <i className="fa fa-info-circle" style={{ color: "#8b0000" }} />
                </span> */}
              </a>
            </div>
          </div>
        </AccordionSummary>
       <AccordionDetails sx={{ background: "white" }}>
  {children ? (
    children
  ) : (
    <MatchOddsAccord
      market={market}
      oddsData={oddsData}
      isMobile={isMobile}
      classforheadingfirst={classforheadingfirst}
      classforheading={classforheading}
      runnersName={runnersName}
      getMarketBook={getMarketBook}
      selectionsPrev={selectionsPrev}
    />
  )}
</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordianHeader;
