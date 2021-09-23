import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import ScoreList from './ScoreList';

class RecentScores extends Component {
    render() {



        return (
            <div>
                <Container id="recentScoreHeaderContainer" align="fixed-top" className="bg-secondary text-white" fluid> <h1 id="recentScoreHeaderContainer" class="display-6 p-1">Recent Scores</h1> </Container>

                {/* this will display the scores. Will probably need to be converted to a component  */}
                <Container className="m-0" fluid>

                    {/* //This will be the title */}
                    <Row>
                        <Col md={2} xs={2} align="left" className="m-0">Date</Col>
                        <Col md={6} xs={2} align="left">Course</Col>
                        <Col md={1} xs={2} align="left">Score</Col>
                        <Col md={1} xs={2} align="left">Diff</Col>
                        <Col md={1} xs={4} align="left"> Slope/Rating </Col>
                    </Row>

                    {/* this will output a list of the 10 most recent scores */}
                    <ScoreList />

                </Container>

            </div>
        )
    }
}

export default RecentScores;

