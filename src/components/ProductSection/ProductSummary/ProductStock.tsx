import RadioIcon from '@/components/icons/RadioIcon';
import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function ProductStock() {
    return (
        <Row className='mt-2'>
            <Col>
                <RadioIcon />
                <span className='ms-3 text-black-3'>
                    12 left in Stock
                </span>

            </Col>
        </Row>
    )
}
