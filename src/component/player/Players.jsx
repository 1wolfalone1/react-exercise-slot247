import "./player.css";

import React, { Component } from "react";
import "./player.css";
export default class Players extends Component {
   render() {
      return (
         <div className="container">
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/cr.jpg")} alt="" />
                  <h3>Cristino Ronaldo</h3>
                  <p>Manchester United</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/kante.jpg")} alt="" />
                  <h3>Kante</h3>
                  <p>Chelsea</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/messi.jpg")} alt="" />
                  <h3>Messi</h3>
                  <p>PSG</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/neymar.jpg")} alt="" />
                  <h3>Neymar</h3>
                  <p>PSG</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/kane.jpg")} alt="" />
                  <h3>Kane</h3>
                  <p>Tottemham</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
            <div className="column">
               <div className="card">
                  <img src={require("../../assets/images/haaland.jpg")} alt="" />
                  <h3>Haaland</h3>
                  <p>Maschester City</p>
                  <p>
                     <button>Detail</button>
                  </p>
               </div>
            </div>
         </div>
      );
   }
}
