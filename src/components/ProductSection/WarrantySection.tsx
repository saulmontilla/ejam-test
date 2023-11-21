import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './WarrantySection.module.css'

export default function WarrantySection() {
    return (
        <>
            <Row className='my-4'>
                <Col>
                    <span className='text-c-red text-uppercase d-block text-center fz-18'>
                        <u>
                            No thanks, I don’t want this.
                        </u>
                    </span>
                </Col>
            </Row>

            <Row>
                <Col xs="2">
                    <img src="/images/image_6.png" alt="warranty" className='img-fluid' />
                </Col>
                <Col>
                    <p className={styles.text}>
                        If you are not completely thrilled with your Clarifion -
                        We have a
                        <span className='fw-c-bold'>
                            &nbsp;30-day money back guarantee.&nbsp;
                        </span>
                        Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                    </p>
                </Col>
            </Row>
        </>
    )
}
