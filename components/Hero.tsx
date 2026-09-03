'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import catAndDogImage from '@/src/assets/images/catanddog.jpg';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  WhatsAppIcon,
  MapPinIcon,
  StarIcon,
  HeartPawIcon,
  PawIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  SyringeVaccineIcon,
  HomeCareIcon,
  SparklesIcon,
  PetDogIcon,
  PetCatIcon,
} from './icons/CustomIcons';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleWordsRef = useRef<HTMLSpanElement[]>([]);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const floatingItem1Ref = useRef<HTMLDivElement>(null);
  const floatingItem2Ref = useRef<HTMLDivElement>(null);

  // GSAP animation for hero entrance and floating badges
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(heroBadgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-word',
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtitle',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-cta-btn',
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          '-=0.3'
        )
        .from(
          heroCardRef.current,
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.9,
            ease: 'back.out(1.4)',
          },
          '-=0.6'
        )
        .from(
          [floatingItem1Ref.current, floatingItem2Ref.current],
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

      // Continuous gentle floating animation
      gsap.to(floatingItem1Ref.current, {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(floatingItem2Ref.current, {
        y: 8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    },
    { scope: containerRef }
  );

  const headlineWords = ['Cuidamos', 'de', 'quem', 'faz', 'parte', 'da', 'sua', 'família'];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-lilac via-[#9565CB] to-lilac-dark"
    >
      {/* Background Blobs & Floating Paws */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[35rem] h-[35rem] rounded-full bg-teal/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-lilac-light/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 text-white/[0.06] pointer-events-none rotate-12">
        <PawIcon size={72} />
      </div>
      <div className="absolute bottom-12 right-1/4 text-white/[0.07] pointer-events-none -rotate-45">
        <PawIcon size={54} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Trust badge */}
            <div
              ref={heroBadgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="text-xs font-semibold text-white/90">
                Excelência e Cuidado em Manaus
              </span>
            </div>

            {/* Main Headline with Word Stagger */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  className="hero-word inline-block mr-[0.22em] last:mr-0 drop-shadow-sm"
                >
                  {word === 'família' ? (
                    <span className="text-teal underline decoration-teal/40 decoration-wavy underline-offset-4 sm:underline-offset-8">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-sm xs:text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-5 font-sans">
              Dra. Pet Clínica Veterinária atendimento humanizado com amor, respeito e cuidado de verdade. Realizamos consultas, vacinas, exames e procedimentos em nossa clínica no Novo Aleixo ou no conforto do seu lar com atendimento a domicílio para toda Manaus.
            </p>

            {/* CTA Buttons & Actions */}
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/5592994622040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn w-full sm:w-auto min-h-[48px] px-5 sm:px-7 py-3.5 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm sm:text-base tracking-wide transition-all shadow-glow hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon size={20} className="text-neutral-900 shrink-0" />
                  <span>Agende no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="hero-cta-btn w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base tracking-wide transition-all border border-white/30 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <StethoscopeIcon size={19} className="text-teal shrink-0" />
                  <span>Formulário Rápido</span>
                </button>
              </div>

              {/* Location button aligned to the left */}
              <button
                type="button"
                onClick={() => scrollToSection('#localizacao')}
                className="hero-cta-btn min-h-[44px] px-1 py-1.5 text-white/90 hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-start gap-1.5 transition-colors cursor-pointer group"
              >
                <MapPinIcon size={16} className="text-teal group-hover:scale-110 transition-transform shrink-0" />
                <span className="underline-offset-4 group-hover:underline">Ver localização em Manaus</span>
              </button>
            </div>

            {/* Quick Service Badges positioned closer */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2.5 w-full">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <div className="w-6 h-6 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0">
                  <ShieldCheckIcon size={14} />
                </div>
                <span>Estrutura Completa</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/90">
                <div className="w-6 h-6 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0">
                  <HomeCareIcon size={14} />
                </div>
                <span>A Domicílio</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/90">
                <div className="w-6 h-6 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0">
                  <HeartPawIcon size={14} />
                </div>
                <span>Cuidado Real</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Photo Showcase */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div ref={heroCardRef} className="relative w-full max-w-2xl">
              {/* Full-bleed photo frame */}
              <div className="relative w-full aspect-[4/5] xs:aspect-[5/4] sm:aspect-[16/11] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/15 group">
                <Image
                  src={catAndDogImage}
                  alt="Filhote de cachorro e gatinho lado a lado, cuidados com carinho na Dra. Pet Clínica Veterinária em Manaus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lilac-dark/85 via-lilac-dark/10 to-transparent" />

                {/* Clinic identity chip */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2.5 bg-white/95 backdrop-blur-md pl-2 pr-3.5 py-2 rounded-full shadow-md">
                  <div className="w-8 h-8 rounded-full bg-lilac/15 text-lilac-dark flex items-center justify-center shrink-0">
                    <HeartPawIcon size={18} />
                  </div>
                  <div className="text-left leading-tight">
                    <p className="font-display font-extrabold text-xs text-lilac-dark">Dra. Pet Clínica</p>
                    <p className="text-[10px] text-neutral-600 font-medium">Manaus · Novo Aleixo</p>
                  </div>
                </div>

                {/* Atendimento ativo pill */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5 bg-teal/90 backdrop-blur-md text-neutral-900 px-3 py-1.5 rounded-full text-[11px] font-bold shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-ping" />
                  <span>Atendimento Ativo</span>
                </div>

                {/* Bottom overlay copy on the photo */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white drop-shadow-sm">
                    Cães e Gatos Felizes
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 max-w-xs mt-1 leading-relaxed">
                    Consultas sem pressa, carinho no diagnóstico e acompanhamento completo.
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-semibold text-lilac-dark shadow-xs">
                      Vacinas V8 / V10 / Antirrábica
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-teal text-[11px] font-semibold text-neutral-900 shadow-xs">
                      Check-up Preventivo
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-semibold text-neutral-700 shadow-xs">
                      Exames Rápidos
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp quick-contact bar, overlapping the photo's bottom edge */}
              <div className="relative -mt-6 mx-2 sm:mx-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 z-10">
                <a
                  href="https://wa.me/5592994622040?text=Ol%C3%A1%20Dra.%20Pet!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20agendar%20um%20hor%C3%A1rio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex-1 py-2 px-3.5 rounded-xl bg-teal/15 hover:bg-teal text-neutral-900 border border-teal/40 hover:border-teal font-semibold text-xs sm:text-[13px] transition-all flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon size={16} className="text-teal-dark group-hover:text-neutral-900 transition-colors shrink-0" />
                  <span>WhatsApp: (92) 9462-2040</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[10px] xs:text-[11px] text-neutral-500 px-2 shrink-0">
                  <span>Seg a Sex 08h–18h</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span>Sáb 08h–17h</span>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 (Rating) */}
            <div
              ref={floatingItem1Ref}
              className="absolute top-2 left-2 sm:-top-5 sm:-left-6 lg:-left-8 bg-white text-neutral-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-lilac-light/40 flex items-center gap-2 sm:gap-2.5 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                <StarIcon size={16} filled className="text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold text-xs text-neutral-900">
                  <span>5.0 de 5.0</span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-neutral-600">Avaliações verificadas</p>
              </div>
            </div>

            {/* Floating Badge 2 (Atendimento Domiciliar) */}
            <div
              ref={floatingItem2Ref}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 lg:-right-6 bg-lilac-dark text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 sm:gap-2.5 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal text-neutral-900 flex items-center justify-center shrink-0">
                <HomeCareIcon size={16} />
              </div>
              <div>
                <p className="font-bold text-xs text-white">Atendimento a Domicílio</p>
                <p className="text-[9px] sm:text-[10px] text-teal">Conforto do seu lar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};