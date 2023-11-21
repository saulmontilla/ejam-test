import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CheckIcon2 from './icons/CheckIcon2';
import styles from './StepsSection.module.css';
import ThreeIcon from './icons/ThreeIcon';
import FourIcon from './icons/FourIcon';

export default function StepsSection() {
    return (
        <Row className='mt-5 fz-20'>
            <Col>
                <div className={styles.iconContainer}>
                    <CheckIcon2 />
                </div>
                <span className={`ms-md-3 ${styles.step}`}>
                    <span className='d-none d-md-inline-block'>
                        Step 1 :&nbsp;
                    </span>
                    Cart Review
                </span>
            </Col>
            <Col>
                <div className={styles.iconContainer}>
                    <CheckIcon2 />
                </div>
                <span className={`ms-md-3 ${styles.step}`}>
                    <span className='d-none d-md-inline-block'>
                        Step 2 :&nbsp;
                    </span>
                    Checkout
                </span>
            </Col>
            <Col>
                <div className={styles.iconContainer}>
                    <ThreeIcon />
                </div>
                <span className={`ms-md-3 fw-c-bold ${styles.step}`}>
                    <span className='d-none d-md-inline-block'>
                        Step 3 :&nbsp;
                    </span>
                    Special Offer
                </span>
            </Col>
            <Col>
                <div className={styles.iconContainer}>
                    <FourIcon />
                </div>
                <span className={`ms-md-3 ${styles.step}`}>
                    <span className='d-none d-md-inline-block'>
                        Step 4 :&nbsp;
                    </span>
                    Confirmation
                </span>
            </Col>
        </Row>
    )
}
