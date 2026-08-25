import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ReusableAccordian = ({ items, children }) => {
  if (items.length > 0) {
    return (
      <div className="reusable-accordion-container">
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
              mb: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#8b0000",
                padding: "1px",
              }}
            >
              <Typography className="reusable-accordion-title">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.content.map((con, i) => (
                <div key={i} className="reusable-accordion-content">
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
