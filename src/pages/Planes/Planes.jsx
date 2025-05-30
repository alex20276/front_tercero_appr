"use client";
import React from 'react';
import './Planes.css';
import PropTypes from 'prop-types';
import Header from '../../components/planescomponents/Header';
import HeroBanner from '../../components/planescomponents/HeroBanner';
import PlanesSection from '../../components/planescomponents/PlanesSection';
import Beneficios from '../../components/planescomponents/Beneficios';
import Testimonios from '../../components/planescomponents/Testimonios';
import ContactoRapido from '../../components/planescomponents/ContactoRapido';
import Footer from '../../components/planescomponents/Footer';
import { Box } from '@mui/material';

export const Planes = () => {
  return (
    <>
      
      <Header />
      <section id="inicio">
        <HeroBanner />
      </section>

      <section id="planes">
        <PlanesSection />
      </section>

      <section id="beneficios">
        <Beneficios />
      </section>

      <section id="testimonios">
        <Testimonios />
      </section>

      <section id="contacto">
        <ContactoRapido />
      </section>
      <Footer />
    </>
  )
}

Planes.propTypes = {};
