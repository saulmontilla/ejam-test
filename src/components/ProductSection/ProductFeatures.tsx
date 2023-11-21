import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlueCheckIcon from '../icons/BlueCheckIcon';

export default function ProductFeatures() {
    return (
        <>
            <Row>
                <Col className='d-flex'>
                    <BlueCheckIcon />
                    <p className='ms-2'>
                        Negative Ion Technology may
                        <span className='fw-c-bold'>
                            &nbsp;help with allergens
                        </span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex'>
                    <BlueCheckIcon />
                    <p className='ms-2'>
                        Negative Ion Technology may help with allergens
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex'>
                    <BlueCheckIcon />
                    <p className='ms-2'>
                        Negative Ion Technology may help with allergens
                    </p>
                </Col>
            </Row>
        </>
    );
}
