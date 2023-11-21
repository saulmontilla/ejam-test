import FiveStarsIcon from '@/components/icons/FiveStarsIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function ReviewUser() {
    return (
        <Row>
            <Col xs="auto">
                <img src="/images/avatar.png" alt="avatar" />
            </Col>
            <Col>
                <FiveStarsIcon />
                <Row>
                    <Col>
                        <span className='fz-14 text-c-black fw-c-bold'>
                            Ken T.
                        </span>

                        <span className='mx-2'>
                            <VerifiedIcon />
                        </span>

                        <span className='text-c-green'>
                            Verified Customer
                        </span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
