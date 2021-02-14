import React from 'react';

type Props = {
    turn:{
        readonly question: string,
        readonly answer: string
    }[]
}

const History = ({turn} :Props) => {
    return(
        <div className= 'history'>
            <h4>Q/A History</h4>
            {turn.map((turn,i) =>
            <div key = {i}>
                <p>Q: {turn.question}</p>
                <p>A: {turn.answer}</p>
                </div>
                )}
        </div>
    )
            };
export default History;
