import React from 'react'
import { Row, Col } from 'react-bootstrap'
import LockIcon from '../icons/LockIcon'
import CardsIcon from '../icons/CardsIcon'
import styles from './ProductSection.module.css'

export default function AllowedPaymentsSections() {
    return (
        <Row className={`text-c-black-2 fz-10 mt-3 ${styles.allowedMethodsContainer}`}>
            <Col xs="auto" className='position-relative'>
                <span>
                    Free shipping
                </span>
                <div className={styles.barVertical}></div>
            </Col>
            <Col className='position-relative text-center'>
                <LockIcon />
                <span className='ms-1'>
                    Secure 256-bit SSL encryption.
                </span>
                <div className={styles.barVertical}></div>
            </Col>
            <Col className='text-center'>
                <CardsIcon />
            </Col>
        </Row>
    )
}
