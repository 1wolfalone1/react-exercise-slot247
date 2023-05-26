import React, { Component } from "react";
import { data } from "../../assets/store/ListOfPlayers";
import PlayersPresentation from "../playersPresentation/PlayersPresentation";
export class Main extends Component {
   constructor() {
      super();
      this.state = {
         players: data,
      };
   }
   render() {
      return <PlayersPresentation players={this.state.players} />;
   }
}
export default Main;
