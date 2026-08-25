import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ReusableAccordian = ({ items, children }) => {
  // console.log(children);
  if (items.length > 0) {
    return (
      <div className="p-2 pb-0 pt-0 ">
        {items.map((item, index) => (
          <Accordion
            key={index}
            defaultExpanded={item.defaultExpanded}
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: "none",
              border: "none",
              mb: 1, // equal margin between all accordions including last
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#C10930",
                padding: "0",
                minHeight: "48px",
                "&:hover": {
                  backgroundColor: "#6D081D",
                },
              }}
            >
              <Typography className="px-3 text-white" fontWeight="bold">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.content.map((con, i) => (
                <div key={i} className="border-b border-t p-1">
                  <Typography>{con}</Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }
  return <div>{children}</div>;
};

export default ReusableAccordian;
