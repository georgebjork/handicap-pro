import React from 'react'

import { Col, Row } from 'react-bootstrap'

function Score({score}) {
    return (
        <>
            <Row>
                <Col md={2} xs={2} align="left" className="m-0 text-truncate">
                    {score.date}
                </Col>

                <Col md={6} xs={2} align="left" className="text-truncate" >
                { score.course}
                </Col>

                <Col md={1} xs={2} align="left" className="text-truncate">
                    {score.score}
                </Col>

                <Col md={1} xs={2} align="left" className="text-truncate">
                    {score.diff}
                </Col>

                <Col md={2} xs={4} align="left" className="text-truncate">
                    {score.rating} / {score.slope}
                </Col>
            </Row>
        </>
    )
}

export default Score
