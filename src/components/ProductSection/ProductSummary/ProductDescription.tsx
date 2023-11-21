import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface ProductDescriptionProps {
    className?: string;
}

export default function ProductDescription(props: ProductDescriptionProps) {
    return (
        <Row className='mt-2'>
            <Col>
                <p className={`text-c-black-2 ${props.className ? props.className : ''}`}>
                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                </p>
            </Col>
        </Row>
    );
}
