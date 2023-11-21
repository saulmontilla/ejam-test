import React from 'react'
import { Row, Col, RowProps } from 'react-bootstrap'
import styles from './ProductOffer.module.css'

export default function ProductOffer(props: RowProps) {
    return (
        <Row {...props}>
            <Col>
                <p className={`text-c-black ${styles.title}`}>
                    <span className='text-c-blue'>
                        ONE TIME ONLY&nbsp;
                    </span>
                    special price for 6 extra Clarifion for only
                    <span className='text-c-blue'>
                        &nbsp;$14 each&nbsp;
                    </span>
                    ($84.00 total!)
                </p>
            </Col>
        </Row>
    )
}
