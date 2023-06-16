import logo from "./logo.svg";
import "./App.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AddUserForm from "./component/AddUserForm";
import ListUser from "./container/ListUser";
import Header from "./component/Header";
import { Box, Stack } from "@mui/material";

function App() {
   return (
      <>
         <Box
            sx={{
               backgroundColor: "#dadada",
               minHeight: '100vh'
            }}
         >
            <Header />
            <Grid2
               container
               spacing={4}
               sx={{
                  padding: 5,
               }}
            >
               <Grid2 xs={4}>
                  <AddUserForm />
               </Grid2>
               <Grid2 xs={8} >
                  <ListUser />
               </Grid2>
            </Grid2>
         </Box>
      </>
   );
}

export default App;
