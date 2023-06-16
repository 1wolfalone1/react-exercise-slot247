import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatshotIcon from '@mui/icons-material/Whatshot';
export default function AboutUs() {
   return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
         <Box>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <GroupsIcon/>
                  <Typography>THE TEAM</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Here you can see the player card, which consists of over 50 soccer football players from all over the world
                  </Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <FmdGoodIcon/>

                  <Typography>Nation</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
               >
                  <WhatshotIcon/>

                  <Typography>Daily news</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </Typography>
               </AccordionDetails>
            </Accordion>
         </Box>
      </Box>
   );
}
