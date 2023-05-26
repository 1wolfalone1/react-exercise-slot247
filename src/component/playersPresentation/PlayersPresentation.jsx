import React, { useState } from "react";
import "./players.css";
export default function PlayersPresentation({ players }) {
   const [player, setPlayer] = useState([]);
   console.log(player);
   return (
      <div className="container">
         {players.map((player) => (
            <div className="column" key={player.id}>
               <div className="card">
                  <img src={`../../${player.img}`} alt="" />
                  <h3>{player.name}</h3>
                  <p className="title">{player.club}</p>
                  <p>
                     <button
                        onClick={() => {
                           setPlayer(player);
                        }}
                     >
                        <a
                           href="#popup"
                           id="openPopUp"
                           style={{ color: "green", width: "100%" }}
                        >
                           Detail
                        </a>
                     </button>
                  </p>
               </div>
            </div>
         ))}
         <div id="popup" className="overlay">
            <div className="popup">
               <img src={player.img} alt="" />
               <h2>{player.name}</h2>
               <a className="close" href="#">
                  &times;
               </a>
               <div className="content">{player.info}</div>
            </div>
         </div>
      </div>
   );
}
