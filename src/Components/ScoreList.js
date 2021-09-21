import React from 'react'

// import { Row } from 'react-bootstrap'
import Score from './Score';

function ScoreList() {
    const scores = [
        {
            date: "1/1/2020", 
            course: "Druids Glen", 
            score: 80, 
            diff: 5
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen", 
            score: 81, 
            diff: 7
        }
    
    ];
    // 
    const scoresList = scores.map(score => <Score score={score}/> )
    return (
        <>
            {scoresList}

        </>
    )
}

export default ScoreList
