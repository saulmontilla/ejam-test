'use client'

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductTitle from './ProductTitle';
import FiveStarsIcon from '@/components/icons/FiveStarsIcon';
import ProductStock from './ProductStock';
import ProductDescription from './ProductDescription';
import styles from './ProductSummary.module.css';

export default function ProductSummary() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowSize.width < 768;

    if (isMobile) {
        return (
            <>
                <Row>
                    <Col xs='auto'>
                        <img src="/images/image_12.png" alt="product" className={styles.image} />
                    </Col>
                    <Col>
                        <ProductTitle />
                        <FiveStarsIcon />
                        <ProductStock />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductDescription className='text-center' />
                    </Col>
                </Row>
            </>
        )
    } else {
        return (
            <Row>
                <Col xs='auto'>
                    <img src="/images/image_12.png" alt="product" className={styles.image} />
                </Col>
                <Col>
                    <ProductTitle />
                    <FiveStarsIcon />
                    <ProductStock />
                    <ProductDescription />
                </Col>
            </Row>
        )
    }
}
