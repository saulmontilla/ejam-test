import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styles from './ProductSummary.module.css';

export default function ProductTitle() {
    return (
        <Row>
            <Col>
                <span className={styles.title}>
                    Clarifion Air Ionizer
                </span>
            </Col>
            <Col xs="auto">
                <span className={`text-c-gray ${styles.price}`}>
                    $180
                </span>
                <span className={`text-c-blue fw-c-bold ms-3 ${styles.subPrice}`}>
                    $84
                </span>
            </Col>
        </Row>
    )
}
