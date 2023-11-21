import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ReviewUser from './ReviewUser'
import ReviewText from './ReviewText'

export default function ReviewSection() {
    return (
        <Row className='mt-4 d-none d-md-flex'>
            <Col className='bg-white py-3'>
                <ReviewUser />
                <ReviewText />
            </Col>
        </Row>
    )
}
