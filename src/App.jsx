import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/Navigation";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/player-detail/Detail";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import getDesignTokens from "./component/theme/themeMui";
import { useTheme } from "@emotion/react";

function App() {
   const [mode, setMode] = useState("light");
   const colorMode = React.useMemo(
      () => ({
         // The dark mode switch would invoke this method
         toggleColorMode: () => {
            setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
         },
      }),
      []
   );
   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
   return (
      <ThemeProvider theme={theme}>
         <Box colorMode={colorMode}>
            <Navigation colorMode={colorMode} />
            <Box
               sx={{
                  minHeight: "100vh",
                  backgroundColor: theme.palette.background.default,
               }}
            >
               <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/detail/:id" element={<Detail />}></Route>
                  {/* <Route path="/contact" element={<Contact />}></Route> */}
               </Routes>
            </Box>
            <Footer />
         </Box>
      </ThemeProvider>
   );
}

export default App;
