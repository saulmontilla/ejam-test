import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PercentageIcon from '../icons/PercentageIcon'
import styles from './ProductSection.module.css'

export default function DiscountDetailsSection() {
    return (
        <Row className='mt-3'>
            <Col className={styles.discountContainer}>
                <PercentageIcon />
                <p className='ms-3 mb-0'>
                    Save
                    <span className='text-c-blue'>
                        &nbsp;53%&nbsp;
                    </span>
                    and get
                    <span className='text-c-blue'>
                        &nbsp;6 extra Clarifision&nbsp;
                    </span>
                    for only
                    <span className='text-c-blue'>
                        &nbsp;$14 Each
                    </span>
                    .
                </p>
            </Col>
        </Row>
    )
}
