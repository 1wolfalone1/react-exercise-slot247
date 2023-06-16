import React, { Component, useContext, useState } from "react";
import "./Navigation.css";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
export default function Navigation({ colorMode }) {
   const navigate = useNavigate();
   const theme = useTheme();
   const [value, setValue] = useState();
   const handleChange = (e, value) => {
      setValue(value);
   };
   console.log(theme);
   return (
      <>
         <Grid2
            className="navBar"
            container
            sx={{
               backgroundColor: theme.palette.background.nav,
               position: "fixed",
               width: "100%",
               zIndex: '1000',
               height: '60px'
            }}
         >
            <Grid2 xs={3}>
               <Typography sx={{ fontSize: "2.4rem" }} color="brands.main">
                  Player Cards
               </Typography>
            </Grid2>
            <Grid2
               xs={9}
               sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
               }}
            >
               <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                     <Brightness7Icon />
                  ) : (
                     <Brightness4Icon />
                  )}
               </IconButton>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
               >
                  <Tab
                     onClick={() => navigate("/")}
                     label={
                        <Box sx={{ display: "flex" }}>
                           <HomeIcon /> <Typography>Home</Typography>
                        </Box>
                     }
                     value={1}
                  />
                  <Tab
                    onClick={() => navigate("/about")}
                     label={
                        <Box sx={{ display: "flex" }}>
                           <InfoOutlinedIcon /> <Typography> About</Typography>
                        </Box>
                     }
                     value={2}

                  />
                  <Tab
                  onClick={() => navigate("/news")}
                     label={
                        <Box sx={{ display: "flex" }}>
                           <ArticleOutlinedIcon /> <Typography> New</Typography>
                        </Box>
                     }
                     value={3}

                  />

                  <Tab
                       onClick={() => navigate("/contact")}
                     label={
                        <Box sx={{ display: "flex" }}>
                           <ContactsOutlinedIcon />{" "}
                           <Typography>Contact</Typography>
                        </Box>
                     }
                     value={4}

                  />
               </Tabs>
            </Grid2>
         </Grid2>
         <Box sx={{ height: "60px", width: "100%" }}></Box>
      </>
   );
}
