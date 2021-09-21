import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import ScoreList from './ScoreList';

class RecentScores extends Component {
    render() {



        return (
            <div>
                <Container align="fixed-top" className="bg-secondary" fluid> Recent Scores </Container>

                {/* this will display the scores. Will probably need to be converted to a component  */}
                <Container className="m-0" fluid>

                    {/* //This will be the title */}
                    <Row>
                        <Col xs={3} align="left" className="m-0">Date</Col>
                        <Col xs={5} align="left">Course</Col>
                        <Col xs={2} align="right">Score</Col>
                        <Col xs={2} align="right">Diff</Col>
                    </Row>

                    {/* this will output a list of the 10 most recent scores */}
                    <ScoreList />

                </Container>

            </div>
        )
    }
}

export default RecentScores;

