import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useNavigate } from "react-router-dom";
const style = (theme) => {
   return {
      container: {
         backgroundColor: theme.palette.background.paper,
         boxShadow: '3px 4px 10px rgba(101, 101, 101, 0.387)'
      },
      image: {},
      content: {
         padding: "1rem",
         display: "flex",
         justifyContent: "space-between",
         alignItems: "start",
      },
   };
};
export default function PlayerCard({ player }) {
   const navigate = useNavigate();
   const theme = useTheme();
   const s = style(theme);
   return (
      <Box sx={s.container}>
         <Box sx={s.image}>
            <img src={player.img} alt="" style={{ width: "100%" }} />
         </Box>
         <Box sx={s.content}>
            <Box>
               <Typography sx={s.name} variant="h3" color={"text.brands"}>
                  {player.name}
               </Typography>
               <Typography sx={s.club} variant="h4" color={"text.secondary"}>
                  {player.club}
               </Typography>
            </Box>
            <IconButton onClick={() => navigate("/detail/" + player.id)}>
               <MoreVertOutlinedIcon />
            </IconButton>
         </Box>
      </Box>
   );
}
