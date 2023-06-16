import { deepOrange } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
   palette: {
      mode,
      ...(mode === "light"
         ? {
              brands: {
                 main: "#152100",
                 contrastText: "#b3b3b3",
              },
              tab: {
               main: "#828282",
               contrastText: "#080017",
              },
              // palette values for light mode
              divider: {
                 main: "#000000",
              },
              text: {
                 primary: "#000000",
                 secondary: "#000000",
                 brands: "#051500",
              },
              background: {
                 default: "#eefdfa",
                 paper: "#2a2a2a",
                 nav: "#b0dabb",
              },
           }
         : {
              // palette values for dark mode
              divider: "#ff9b9b",
              tab: {
               main: "#828282",
               contrastText: "#080017",
              },
              background: {
                 default: "#252b2a",
                 paper: "#2a2a2a",
                 nav: "#191919",
              },
              text: {
                 primary: "#ffffff",
                 secondary: "#cbffba",
                 brands: "#cbffba",
              },
              brands: {
                 main: "#cbffba",
              },
           }),
   },
});

export default getDesignTokens;
