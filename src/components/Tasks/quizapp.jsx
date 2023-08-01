import React, { useState } from "react";


function QuizApp() {

    const answer = [
        {
            a: 'He lost his laptop',
            status: false
        },
        {
            a: 'He lost his semicolons and could not find it anywhere',
            status: true
        },
        {
            a: 'He got tired',
            status: false
        },
    ]
    
    return (
        <div className="quiz-app">
            <div className="question">
                <h2>Why did JS developer quit his job?</h2>
            </div>
            {
                answer.map((quiz, i) => {
                    return (
                        <div className="answer" key={i}>
                            <button onClick={() => { quiz.status ? console.log(`Correct Answer`) : console.log('Uncorrect Answer') }}>
                                <h3>{quiz.a}</h3>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuizApp;