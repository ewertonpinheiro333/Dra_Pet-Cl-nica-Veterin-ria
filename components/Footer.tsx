'use client';

import React from 'react';
import drapetLogo from '@/src/assets/images/drapetlogo.png';
import Image from 'next/image';
import {
  WhatsAppIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  PawIcon,
  CheckCircleIcon,
} from './icons/CustomIcons';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-lilac-dark text-white border-t border-white/15 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-white/15">
          {/* Brand & Slogan */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xl p-1 mb-4"
            >
             <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-0 overflow-hidden group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Image
                src={drapetLogo}
                alt="Logotipo da Dra. Pet Clínica Veterinária em Manaus"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white leading-none">
                  Dra. Pet
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-teal font-sans">
                  Clínica Veterinária
                </span>
              </div>
            </a>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm mb-6 font-sans">
              Cuidamos de quem faz parte da sua família com amor, respeito e cuidado de verdade. Atendimento humanizado em Manaus (AM).
            </p>

            {/* Social Media Links with min 44x44px touch targets */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://wa.me/5592994622040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dra. Pet"
                className="w-11 h-11 rounded-xl bg-white/15 hover:bg-teal hover:text-neutral-900 text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                <WhatsAppIcon size={20} />
              </a>

              <a
                href="https://www.instagram.com/drapet.am/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dra. Pet"
                className="w-11 h-11 rounded-xl bg-white/15 hover:bg-teal hover:text-neutral-900 text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                <InstagramIcon size={20} />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=-3.0578229,-59.9625299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="w-11 h-11 rounded-xl bg-white/15 hover:bg-teal hover:text-neutral-900 text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                <MapPinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-extrabold text-base text-white uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm text-white/80">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Sobre a Clínica', href: '#sobre' },
                { name: 'Serviços Médicos', href: '#servicos' },
                { name: 'Horários de Atendimento', href: '#horarios' },
                { name: 'Localização e Rota', href: '#localizacao' },
                { name: 'Avaliações de Clientes', href: '#avaliacoes' },
                { name: 'Dúvidas Frequentes', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-teal transition-colors flex items-center gap-1.5 py-1.5 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-teal"
                  >
                    <PawIcon size={12} className="text-teal/70 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-extrabold text-base text-white uppercase tracking-wider mb-4">
              Contato & Local
            </h3>
            <div className="space-y-3.5 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-teal shrink-0 mt-0.5" />
                <span>
                  Rua João Câmara, 680 — Novo Aleixo, Manaus - AM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-teal shrink-0" />
                <a
                  href="tel:+5592994622040"
                  className="hover:text-teal transition-colors font-semibold py-1"
                >
                  (92) 9462-2040
                </a>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon size={18} className="text-teal shrink-0" />
                <a
                  href="https://wa.me/5592994622040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors font-semibold py-1"
                >
                  WhatsApp Oficial: (92) 9462-2040
                </a>
              </div>
            </div>
          </div>

          {/* Hours and Direct Action */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="font-display font-extrabold text-base text-white uppercase tracking-wider mb-4">
              Horários de Atendimento
            </h3>
            <div className="space-y-2 text-xs text-white/80 mb-5">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Segunda a Sexta:</span>
                <span className="font-bold text-white">08h às 18h</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Sábado:</span>
                <span className="font-bold text-white">08h às 17h</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Domingo:</span>
                <span className="text-white/60">Fechado</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenAppointment}
              className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Solicitar Agendamento</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits and Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>© {currentYear} Dra. Pet Clínica Veterinária. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            <span>Manaus - Amazonas</span>
            <span>•</span>
            <span className="text-teal font-medium">Cuidamos de quem faz parte da sua família</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
