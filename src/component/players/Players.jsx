import React, { Component } from "react";
import { ListPlayers } from "../../assets/store/ListOfPlayers.js";
import "./players.css";

export default class Players extends Component {
   render() {
      return (
         <div className="container">
            {ListPlayers.map((player) => (
               <div className="column" >
                  <div className="card">
                     <img src={require(`../../${player.img}`)} alt="" />
                     <h3>{player.name}</h3>
                     <p className="title">{player.club}</p>
                     <p>
                        <button>Detail</button>
                     </p>
                  </div>
               </div>
            ))}
         </div>
      );
   }
}
