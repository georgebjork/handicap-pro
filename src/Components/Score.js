import React from 'react'

import { Col, Row } from 'react-bootstrap'

function Score({score}) {
    return (
        <>
            <Row>
                <Col xs={3} align="left" className="m-0">
                    {score.date}
                </Col>

                <Col xs={5} align="left" >
                { score.course}
                </Col>

                <Col xs={2} align="right" >
                    {score.score}
                </Col>

                <Col xs={2} align="right" >
                    {score.diff}
                </Col>
            </Row>
        </>
    )
}

export default Score
