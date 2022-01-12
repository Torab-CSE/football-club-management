import { Button } from 'react-bootstrap/Button';
import React from 'react';
import './Player.css';

const Player = (props) => {
    const player=props.player;
    const{name,age,image,club,position,price}=player;
    const eventHandle=props.eventHandle;

    
    return (
        <div className='row player-container'>
            <div className="col-sm-4 player-image ">
                <img src={image} alt=""/>
            </div>
            <div className='col-sm-8 player-details'>
                <h3>{name}</h3>
                <h5>Age:{age}</h5>
                <h5>Position:{position}</h5>
                <h5>Previous Club :{club}</h5>
                <h4>Price:{price}</h4>
                <button class="btn btn-success" onClick={()=>eventHandle(player)}
                >Confirm Player</button>
            </div>
        </div>
    );
};

export default Player;