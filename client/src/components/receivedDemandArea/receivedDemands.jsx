import React, { Component } from 'react';

class DemandsArea extends Component {
state = {}

    
    render() { 
        return ( <div className="demands">  
           <div className="desc">
           <h2>Received Demands: </h2>
          <h4>Demand N°`${}`</h4>
            <div>Title:</div>
            <div>Description:</div>
            <div>needed before:</div>
            </div>
            <div>
            <button type='submit'> Accepte </button>
            <button type='submit'> Decline </button>
            <button type='submit'> Postpone </button>
            </div>
        </div> );
    }
}


 
export default DemandsArea ;