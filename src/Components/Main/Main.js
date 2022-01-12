import React, {  useEffect, useState } from 'react';
import Players from '../Players/Player';
import Team from '../Team/Team';
import playersData from '../../Data/playersData.json';


const Main = () => {
    useEffect(()=>{
        setPlayers(playersData)
    },[])
    const[players, setPlayers]=useState([])
    //console.log(players)
    const [player,setPlayer]=useState([])
   
    const eventHandle=(selectPlayer)=>{
        //console.log("click me",player)
        const selectedPlayer=[...player,selectPlayer]
        setPlayer(selectedPlayer);
    }
    console.log(player)
    
   
    return (
        <div className="row">
           <div className="col-8 players-container">
               {
                   players.map(player=><Players player={player} key={player.id}
                                         eventHandle={eventHandle}></Players>)
               }
           </div>
           <div className="col-4 selected-player">
                <Team player={player}></Team>
           </div>
        </div>
    );
};

export default Main;