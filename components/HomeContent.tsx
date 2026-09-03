'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Hours } from '@/components/Hours';
import { Location } from '@/components/Location';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { AppointmentModal } from '@/components/AppointmentModal';

export interface HomeContentProps {
  initialSection?: string;
  initialModalOpen?: boolean;
}

export default function HomeContent({
  initialSection,
  initialModalOpen = false,
}: HomeContentProps) {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(initialModalOpen);
  const [selectedService, setSelectedService] = useState('Consulta Geral');

  useEffect(() => {
    if (initialSection) {
      const element = document.getElementById(initialSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialSection]);

  const handleOpenAppointment = (service: string = 'Consulta Geral') => {
    setSelectedService(service);
    setAppointmentModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-lilac flex flex-col selection:bg-teal selection:text-neutral-900">
      {/* Global Header */}
      <Header onOpenAppointment={() => handleOpenAppointment('Consulta Geral')} />

      {/* Hero Section */}
      <Hero onOpenAppointment={() => handleOpenAppointment('Consulta Geral')} />

      {/* About Section */}
      <About onOpenAppointment={() => handleOpenAppointment('Consulta Geral')} />

      {/* Services Section with Radix Tabs */}
      <Services onSelectServiceToBook={(srv) => handleOpenAppointment(srv)} />

      {/* Working Hours Section */}
      <Hours onOpenAppointment={() => handleOpenAppointment('Consulta Geral')} />

      {/* Location with Google Maps */}
      <Location />

      {/* Testimonials / Social Proof */}
      <Testimonials />

      {/* Frequently Asked Questions (Radix Accordion) */}
      <FAQ />

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment('Consulta Geral')} />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Quick Interactive WhatsApp Booking Modal (Radix Dialog) */}
      <AppointmentModal
        open={appointmentModalOpen}
        onOpenChange={setAppointmentModalOpen}
        defaultService={selectedService}
      />
    </main>
  );
}
