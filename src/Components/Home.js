import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Handicap from './Handicap';
import HandicapHistory from './HandicapHistory';
import RecentScores from './RecentScores';




class Home extends Component {

    render() {
        

        return (
            <>

                <Container fluid>
                    <Container>
                        <Row>

                            <Col md={5} xs={12} className="mt-5">
                                <Row>
                                    <Col md={12}>
                                        <h3 class=" display-2 text-muted" align="left">George Bjork </h3>
                                        <h3 class="text-muted display-6" align="left">Handicap Index: <Handicap/> </h3>
                                        <Button href="/new-score" id="post-score" size="lg" align="left" className="btn btn-danger mt-1" >Post Score </Button>
                                    </Col>

                                    <Col md={12} xs={12} className="mt-4">
                                        <HandicapHistory/>
                                    </Col>
                                </Row>

                            </Col>


                            <Col md={7} xs={12} align="center" className="mt-5 mb-3">

                                <RecentScores />

                            </Col>

                        </Row>

                        <Row>

                            <Col md={12} xs={12}>
                                <Container id="friendsContainer" className="bg-secondary mt-5">
                                    <h3 id="friendsText" class="display-6 p-1 text-white" align="center"> Friends </h3>
                                </Container>

                                <h1>Something cool eventually</h1>
                            </Col>
                        </Row>

                    </Container>

                </Container>
            </>
        );
    }
}

export default Home;

