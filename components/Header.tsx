'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import drapetLogo from '@/src/assets/images/drapetlogo.png';
import * as Dialog from '@radix-ui/react-dialog';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  WhatsAppIcon,
  MenuIcon,
  CloseIcon,
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  PawIcon,
} from './icons/CustomIcons';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // GSAP subtle sticky appearance or load animation
  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: headerRef }
  );

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Horários', href: '#horarios' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with Quick Status */}
      <div className="bg-lilac-dark text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <ClockIcon size={14} className="text-teal" />
              <span>Segunda a Sexta: 08h–18h · Sábado: 08h–17h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPinIcon size={14} className="text-teal" />
              <span>Rua João Câmara, 680 - Novo Aleixo, Manaus - AM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5592994622040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal hover:text-white transition-colors font-semibold text-[11px]"
            >
              <WhatsAppIcon size={13} />
              <span>(92) 99462-2040</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-lilac/95 backdrop-blur-md border-b border-white/15 transition-all shadow-md"
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xl p-1 min-w-0"
          >
            <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center p-0 overflow-hidden group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Image
                src={drapetLogo}
                alt="Logotipo da Dra. Pet Clínica Veterinária em Manaus"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-extrabold text-lg xs:text-xl sm:text-2xl tracking-tight text-white leading-tight truncate">
                Dra. Pet
              </span>
              <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-teal font-sans leading-none truncate">
                Clínica Veterinária
              </span>
            </div>
          </a>

          {/* Desktop Nav Items (visible on lg and up: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium text-white/90 hover:text-teal rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (visible on lg and up: 1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <button
              type="button"
              id="header-appointment-btn"
              onClick={onOpenAppointment}
              className="min-h-[44px] px-3 xl:px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer whitespace-nowrap"
            >
              <CalendarIcon size={16} className="text-teal" />
              <span>Agendar</span>
            </button>

            <a
              id="header-whatsapp-cta"
              href="https://wa.me/5592994622040"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-3.5 xl:px-4 py-2.5 rounded-xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-xs xl:text-sm tracking-wide transition-all shadow-md hover:shadow-teal/30 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon size={18} className="text-neutral-900" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile and Tablet Navigation Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Quick WhatsApp button for mobile/tablet with min 44x44px touch target */}
            <a
              href="https://wa.me/5592994622040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar via WhatsApp da Clínica"
              className="min-w-[44px] min-h-[44px] px-3 rounded-xl bg-teal hover:bg-teal-dark text-neutral-900 flex items-center justify-center gap-1.5 shadow-sm font-bold text-xs transition-colors"
            >
              <WhatsAppIcon size={20} />
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </a>

            {/* Quick Modal Trigger on Tablet */}
            <button
              type="button"
              onClick={onOpenAppointment}
              aria-label="Abrir formulário de agendamento"
              className="hidden sm:flex md:flex min-w-[44px] min-h-[44px] px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold items-center gap-1.5 border border-white/20"
            >
              <CalendarIcon size={16} className="text-teal" />
              <span>Agendar</span>
            </button>

            {/* Hamburger Menu Trigger (Radix Dialog) */}
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  id="mobile-menu-trigger"
                  aria-label="Abrir Menu de Navegação"
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-teal cursor-pointer"
                >
                  <MenuIcon size={24} />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 animate-in fade-in" />
                <Dialog.Content
                  ref={mobileMenuRef}
                  className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm max-h-screen overflow-y-auto bg-gradient-to-b from-lilac-dark to-lilac text-white p-5 sm:p-6 shadow-2xl z-50 flex flex-col justify-between border-l border-white/20 focus:outline-none animate-in slide-in-from-right duration-300"
                >
                  <div>
                    {/* Header in Menu */}
                    <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/15">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl shadow-soft flex items-center justify-center p-0.5 overflow-hidden">
                          <Image
                            src={drapetLogo}
                            alt="Logotipo da Dra. Pet Clínica Veterinária"
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-display font-bold text-lg text-white leading-tight">
                            Dra. Pet
                          </span>
                          <span className="text-[10px] text-teal uppercase font-semibold">
                            Manaus - AM
                          </span>
                        </div>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          id="mobile-menu-close"
                          aria-label="Fechar Menu"
                          className="min-w-[44px] min-h-[44px] rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
                        >
                          <CloseIcon size={18} />
                        </button>
                      </Dialog.Close>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className="min-h-[44px] px-4 py-3 text-base font-semibold text-white/95 hover:text-teal hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between group"
                        >
                          <span>{link.name}</span>
                          <PawIcon
                            size={16}
                            className="text-white/30 group-hover:text-teal transition-colors"
                          />
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Footer CTAs */}
                  <div className="pt-6 border-t border-white/15 space-y-3 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenAppointment();
                      }}
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 border border-white/25 cursor-pointer"
                    >
                      <CalendarIcon size={18} className="text-teal" />
                      <span>Formulário de Agendamento</span>
                    </button>

                    <a
                      href="https://wa.me/5592994622040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon size={20} className="text-neutral-900" />
                      <span>Agendar no WhatsApp</span>
                    </a>

                    <div className="text-center text-xs text-white/70 pt-2">
                      (92) 9462-2040 · Rua João Câmara, 680
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
    </>
  );
};
