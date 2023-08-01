import React, { useState } from "react";


function ChildQoutegenerator({ randomQuote, quote, RandromNu }) {
    // console.log(RandromNu);
    return <div>

        <button onClick={() => randomQuote()}>Random Quote</button>
        {
            <h4>{quote[RandromNu]}</h4>
        }
    </div>
}
function QuoteGenerator() {
    const [RandromNu, setRandromNu] = useState()
    const quote = [
        `Be yourself; everyone else is already taken`,
        `Two things are infinite: the universe and human stupidity (and I'm not sure about the universe)`,
        `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
        `You only live once, but if you do it right, once is enough.`
    ]

    function randomQuote() {
        let randomNum = Math.floor(Math.random() * quote.length);
        // console.log(`hi from random quote ${randomNum}`)
        setRandromNu(randomNum)
    }

    return (
        <div>
            <ChildQoutegenerator randomQuote={randomQuote} quote={quote} RandromNu={RandromNu} />
        </div>

    )
}

export default QuoteGenerator;