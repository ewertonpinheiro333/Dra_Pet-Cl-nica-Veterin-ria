'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  MapPinIcon,
  ExternalLinkIcon,
  PhoneIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  PawIcon,
  ClockIcon,
} from './icons/CustomIcons';

export const Location: React.FC<LocationProps> = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.location-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const googleMapsSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=-3.0578229,-59.9625299';
  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=-3.0578229,-59.9625299';
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=-3.0578229,-59.9625299&hl=pt-BR&z=16&output=embed';

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="py-20 md:py-28 bg-gradient-to-b from-lilac to-lilac-dark text-white relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lilac-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="location-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 font-semibold text-xs tracking-wider uppercase mb-4">
            <MapPinIcon size={14} className="text-teal" />
            <span>Fácil Acesso</span>
          </div>

          <h2 className="location-reveal font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Estamos pertinho de você!
          </h2>

          <p className="location-reveal mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans">
            Localizada no bairro Novo Aleixo em Manaus, nossa clínica oferece fácil acesso, ambiente climatizado e todo o conforto para você e seu pet.
          </p>
        </div>

        {/* Location Grid Card & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Address Details Card */}
          <div className="location-reveal lg:col-span-5 bg-white text-neutral-900 rounded-3xl p-5 sm:p-7 md:p-9 shadow-2xl border border-lilac-light/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-lilac/15 text-lilac-dark flex items-center justify-center p-2.5 sm:p-3 shrink-0">
                  <MapPinIcon size={28} className="text-lilac-dark" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-lilac-dark">
                    Dra. Pet Manaus
                  </h3>
                  <p className="text-xs font-semibold text-teal-dark">
                    Clínica Veterinária no Novo Aleixo
                  </p>
                </div>
              </div>

              {/* Address Highlight */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                  Endereço Oficial
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                  Rua João Câmara, 680
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Bairro Novo Aleixo · Manaus - AM
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">
                  Coordenadas: -3.0578229, -59.9625299
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 sm:space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircleIcon size={18} className="text-teal-dark shrink-0 mt-0.5" />
                  <span>Ambiente seguro e higienizado para consultas e exames</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircleIcon size={18} className="text-teal-dark shrink-0 mt-0.5" />
                  <span>Fácil estacionamento e desembarque seguro de pets</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircleIcon size={18} className="text-teal-dark shrink-0 mt-0.5" />
                  <span>Também atendemos a domicílio em diversas regiões de Manaus</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-neutral-100">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-5 sm:px-6 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <ExternalLinkIcon size={18} className="shrink-0" />
                <span>Como Chegar (Traçar Rota no GPS)</span>
              </a>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold text-center transition-colors flex items-center justify-center"
                >
                  Abrir no Google Maps
                </a>

                <a
                  href="https://wa.me/5592994622040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] py-2.5 px-3 rounded-xl bg-lilac/15 hover:bg-lilac/25 text-lilac-dark text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon size={16} className="text-lilac-dark shrink-0" />
                  <span>Tirar Dúvida</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="location-reveal lg:col-span-7 bg-white rounded-3xl p-2.5 sm:p-3 shadow-2xl border border-lilac-light/40 overflow-hidden flex flex-col">
            <div className="relative w-full h-[320px] xs:h-[380px] sm:h-[440px] lg:h-full min-h-[320px] xs:min-h-[380px] rounded-2xl overflow-hidden bg-neutral-100">
              <iframe
                title="Mapa de Localização da Dra. Pet Clínica Veterinária"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              />

              {/* Floating Pin Overlay in Map Container */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-neutral-900 px-3.5 py-2 rounded-xl shadow-lg border border-neutral-200 flex items-center gap-2">
                <MapPinIcon size={18} className="text-lilac-dark" />
                <span className="text-xs font-bold font-display">
                  Dra. Pet · Novo Aleixo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface LocationProps {}
