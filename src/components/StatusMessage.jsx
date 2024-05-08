import React from 'react'
import '../../src/styles.scss';

const StatusMessage = ({winner,entry,squares}) => {
    const noMovesLeft = squares.every((squareValue)=>squareValue!==null);
    const activePlaver =entry?'x':'0';
    const renderStatusMessage =()=>{
        if(winner){
            return (
                <>
                    Winner is {' '}
                    <span className={winner==='x'?'text-green':'text-orange'} >{winner}</span>
                </>
            )
        }
        if(!winner && noMovesLeft){
            return <>
                <span className='text-orange'>0</span> {' '}
                <span className='text-green' >x</span>
            </>
        }
        if(!winner && !noMovesLeft){
            return <>Active player is <span className={entry?'text-green':'text-orange'} >{activePlaver}</span></>
        }
    }
  return (
    <h2 className='status-message' >{renderStatusMessage()}</h2>
  )
}

export default StatusMessage