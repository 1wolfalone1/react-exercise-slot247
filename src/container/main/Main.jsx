import React, { Component, useEffect, useState } from "react";
import Players from "../players/Players";
import { BASE_URL } from "../../constant";
export default function Main(props) {
   const [players, setPlayers] = useState([]);
   useEffect(() => {
      getPlayers();
   }, []);
   const getPlayers = async () => {
      const response = await fetch(BASE_URL + '/a');
      const players = await response.json();
      setPlayers(players);
   }
   return <Players players={players} />;
}
