import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import styles from './PurchaseButton.module.css';
import RightArrowIcon2 from '../icons/RightArrowIcon2';

export default function PurchaseButton() {
    return (
        <Row className='mt-4'>
            <Col>
                <div className="d-grid">
                    <Button variant='c-green' className={`text-white text-uppercase ${styles.button}`}>
                        Yes - Claim my discount
                        <span className='ms-3'>
                            <RightArrowIcon2 />
                        </span>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}
