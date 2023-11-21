'use client'

import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import CheckIcon from './icons/CheckIcon'
import styles from './Navbar.module.css'
import TruckIcon from './icons/TruckIcon'
import HeartIcon from './icons/HeartIcon'
import CheckReloadIcon from './icons/CheckReloadIcon'
import LeftArrowIcon from './icons/LeftArrowIcon'
import RightArrowIcon from './icons/RightArrowIcon'

export default function Navbar() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    const [currentElement, setCurrentElement] = useState(0)

    const elements = [
        <>
            <CheckIcon />
            <span className='ms-2'>
                30-DAY SATISFACTION GUARANTEE
            </span>
        </>,
        <>
            <TruckIcon />
            <span className='ms-2'>
                Free delivery on orders over $40.00
            </span>
        </>,
        <>
            <HeartIcon />
            <span className='ms-2'>
                50.000+ HAPPY CUSTOMERS
            </span>
        </>,
        <>
            <CheckReloadIcon />
            <span className='ms-2'>
                100% Money Back Guarantee
            </span>
        </>
    ]

    function getCurrentElement() {
        return elements[currentElement]
    }

    function prevElement() {
        if (currentElement === 0) {
            setCurrentElement(elements.length - 1)
        } else {
            setCurrentElement(currentElement - 1)
        }
    }

    function newElement() {
        if (currentElement === elements.length - 1) {
            setCurrentElement(0)
        } else {
            setCurrentElement(currentElement + 1)
        }
    }

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

    const isMobile = windowSize.width < 768

    return (
        <div className={styles.nav}>
            <Container>
                <Row className='fz-12 text-center'>
                    <Col 
                        xs="auto" 
                        className='d-flex align-items-center d-md-none'
                        onClick={prevElement}
                    >
                        <LeftArrowIcon />
                    </Col>

                    {isMobile
                        ? (
                            <Col>
                                {getCurrentElement()}
                            </Col>
                        )
                        : elements.map((element, index) => (
                            <Col key={index}>
                                {element}
                            </Col>
                        ))
                    }

                    <Col 
                        xs="auto" 
                        className='d-flex align-items-center d-md-none'
                        onClick={newElement}
                    >
                        <RightArrowIcon />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
