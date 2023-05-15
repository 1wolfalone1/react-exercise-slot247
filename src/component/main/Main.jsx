import React, { Component } from "react";
import { Players } from "../../assets/store/ListOfPlayers";
import PlayersPresentation from "../playersPresentation/PlayersPresentation";
export class Main extends Component {
   constructor() {
      super();
      this.state = {
         players: Players,
      };
   }
   render() {
      return <PlayersPresentation players={this.state.players} />;
   }
}
export default Main;
