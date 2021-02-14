import React, { useEffect, useState } from 'react';
import History from './History';

type Turn = {
    question: string,
    answer: string
}

const Game = () => {
    const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];

      const [turns, setTurns] = useState<Turn[]>([]);
      const [currentAns, setAns] = useState('');

      useEffect(() => {
          document.title = `Number of questions asked: ${turns.length}`
        }, [turns]);

    const submitQuestion = (event:any) => {
        event.preventDefault();
        if (event.currentTarget[0].value.length>1 && event.currentTarget[0].value.includes('?')){
            const ans = possibleAnswers[Math.floor(Math.random() * 20)];
            setTurns([{
                question: event.currentTarget[0].value,
                answer: ans
            }, ...turns]);
            setAns(ans);
            event.currentTarget.reset();        
        } else{
            alert("A valid question must include at least one letter and a question mark.")
        }
    }

    return (
        <div className = 'magicBall'>
            <h1>Magic 8 Ball</h1>
            <h2>{`Number of questions asked: ${turns.length}`}</h2>
            <div className = "question">
                <div>
                    <form className = "question" onSubmit = {submitQuestion}>
                        <input type = 'text' placeholder = "Ask me a question..." />
                        <button type = "submit">Ask!</button>
                    </form>
                    <img src = "https://www.backgroundsy.com/file/large/pool-eight-ball.jpg" />
                    <h2 className = 'answer'>{currentAns}</h2>
                </div>
                <History turn = {turns} />
            </div>
        </div>
    );

        
      
}
export default Game;    
