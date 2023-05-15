import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/Navigation";
import Players from "./component/players/Players";
import Footer from "./component/footer/Footer";

function App() {
   return (
      <div className="App">
         <Navigation />
         <Players />
         <Footer/>
      </div>
   );
}

export default App;
