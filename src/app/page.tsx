import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from '@/components/Navbar';
import BrandsSection from '@/components/BrandsSection';
import TitleSection from '@/components/TitleSection';
import StepsSection from '@/components/StepsSection';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <NavbarMenu />
      <Container className='mt-4 pb-5'>
        <BrandsSection />
        <TitleSection />
        <StepsSection />
        <ProductSection />
      </Container>
      <Footer />
    </>
  )
}
