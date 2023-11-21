import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ClarifonIcon from './icons/ClarifonIcon'
import McafeeIcon from './icons/McafeeIcon'
import NortonIcon from './icons/NortonIcon'
import styles from './BrandsSection.module.css'

export default function BrandsSection() {
    return (
        <Row>
            <Col xs="4" md="8" className={styles.logoContainer}>
                <ClarifonIcon />
            </Col>
            <Col xs="7" lg="4" className='ms-auto ms-md-0'>
                <Row>
                    <Col xs="auto" className={`${styles.antivirusesContainer} ms-auto`}>
                        <McafeeIcon />
                    </Col>
                    <Col xs="auto" className={styles.antivirusesContainer}>
                        <NortonIcon />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
