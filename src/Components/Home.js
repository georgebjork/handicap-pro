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
                            <Col className="bg-primary"></Col>

                            <Col md={6} xs={12} align="center" className="mt-3">


                                <h3 class="text-muted mt-5">Handicap Index:</h3>
                                <h1 class="display-1 text-muted">{handicap}</h1>

                                <Button className="btn btn-secondary">Handicap History </Button>
                            </Col>
                            
                            <Col md={4} xs={12} align="center" className="mt-3">
                                <RecentScores />
                            </Col>

                            <Col className="bg-primary"></Col>
                        </Row>
                    </Container>

                </Container>
            </>
        );
    }
}

export default Home;