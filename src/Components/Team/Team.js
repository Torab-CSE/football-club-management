import React from 'react';
import './Team.css';

const Team = (props) => {
    const player=props.player;
    const total=player.reduce((total,player)=>total+player.price,0)
    console.log(total)

    return (
        <div class="team-container row">
            <div class="team-head col-sm-12">
                <h1>FC Dhaka</h1>
                <h4>Manager: Pep Guardiola</h4>
                <h5>Formation: 4-3-3</h5>
            </div>
            <div class="row team">
                <div class="col-lg-6 team-select">
                    <h4>Selected Player</h4>
                    <hr></hr>
                    <h6>Number of Player:{player.length}</h6>
                    <ol>
                        { player.map(player=><li>{player.name}</li>)  }
                    </ol>      
                </div>
                <div class="col-lg-6 team-cost ">
                    <h4>Cost</h4>
                    <hr></hr>
                    <h5>Total Budget: {total}</h5>
                </div>
                
            </div>
            
        </div>
    );
};

export default Team;