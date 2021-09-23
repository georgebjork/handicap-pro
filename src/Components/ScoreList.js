import React from 'react'

// import { Row } from 'react-bootstrap'
import Score from './Score';

function ScoreList() {
    const scores = [
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course1", 
            score: 80, 
            diff: 5,
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course1", 
            score: 80, 
            diff: 5,
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },

        {
            date: "1/1/2020", 
            course: "Druids Glen Golf Course2", 
            score: 81, 
            diff: 7, 
            rating: 75.6,
            slope: 143
        },
    
    ];
    // 
    const scoresList = scores.map(score => <Score score={score}/> )
    
    if(scoresList.length > 20){
        for(let i = scoresList.length; i > 10; i--){
            scoresList.pop();
        }
    }
    

    return (
        <>
            {scoresList}

        </>
    )
}

export default ScoreList
