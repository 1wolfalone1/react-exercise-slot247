import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/Navigation";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/player-detail/Detail";

function App() {
   return (
      <div className="App">
         <div>
            <Navigation />
            <Routes>
               <Route path="/" element={<Main />}/>
               <Route path="/detail/:id" element={<Detail />}></Route>
               {/* <Route path="/contact" element={<Contact />}></Route> */}
            </Routes>
            <Footer />
         </div>
      </div>
   );
}

export default App;
