import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './TitleSection.module.css';

export default function TitleSection() {
    return (
        <Row className={styles.titleContainer}>
            <Col className='text-center'>
                <h1 className={styles.title}>
                    Wait ! your order in progress.
                </h1>
                <span className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </span>
            </Col>
        </Row>
    )
}
