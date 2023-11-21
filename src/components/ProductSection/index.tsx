import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductImage from './ProductImage';
import ProductOffer from './ProductOffer';
import ProductSummary from './ProductSummary';
import ProductFeatures from './ProductFeatures';
import styles from './ProductSection.module.css';
import DiscountDetailsSection from './DiscountDetailsSection';
import PurchaseButton from './PurchaseButton';
import AllowedPaymentsSections from './AllowedPaymentsSections';
import ReviewSection from './ReviewSection';
import WarrantySection from './WarrantySection';

export default function ProductSection() {
    return (
        <Row className={`mt-md-5 ${styles.container}`}>
            <Col className={styles.col}>
                <ProductOffer className='d-md-none'/>
                <ProductImage />
                <ReviewSection  />
            </Col>
            <Col className={styles.col}>
                <ProductOffer className='d-none d-md-flex'/>
                <ProductSummary />
                <ProductFeatures />
                <DiscountDetailsSection />
                <PurchaseButton />
                <AllowedPaymentsSections />
                <WarrantySection />
            </Col>
        </Row>
    )
}
