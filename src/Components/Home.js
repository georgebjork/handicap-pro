import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RecentScores from './RecentScores';




class Home extends Component {

    render() {
        let handicap = 0.0;

        return (
            <>

                <Container fluid>
                    <Container>
                        <Row>
                            
                            <Col md={5} xs={12}  className="mt-4">
                                <h3 class=" display-2 text-muted" align="left">George Bjork </h3> 
                                <h3 class="text-muted display-6" align="left">Handicap Index: {handicap}</h3>

                                <Button id="post-score"size="lg" align="left" className="btn btn-danger mt-1" >Post Score </Button>
                            </Col>
    

                            <Col md={7} xs={12} align="center" className="mt-5 mb-3">

                                <RecentScores />
                        
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col md={5} xs={12}>
                                <Container id="friendsContainer" className="bg-secondary mt-5">
                                    <h3 id="friendsText" class="display-6 p-1 text-white" align="center"> Friends </h3> 
                                </Container>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h1>coming soon</h1>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </>
        );
    }
}

export default Home;