import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.css'
import productStyles from './ProductSection/ProductSection.module.css'
import WhiteLockIcon from './icons/WhiteLockIcon'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container>
                <Row>
                    <Col xs="4" md="auto" className='position-relative'>
                        <span>
                            Copyright (c) 2023
                        </span>
                        <div className={productStyles.barVertical}></div>
                    </Col>
                    <Col xs="8" md="auto">
                        <span>
                            Clarifionsupport@clarifion.com
                        </span>
                    </Col>
                    <Col md="auto" className='ms-md-auto'>
                        <WhiteLockIcon />
                        <span className='ms-3'>
                            Secure 256-bit SSL encryption.
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
