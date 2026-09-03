'use client';

import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  StarIcon,
  CheckCircleIcon,
  HeartPawIcon,
  PawIcon,
  SparklesIcon,
  GoogleIcon,
} from './icons/CustomIcons';

interface GoogleReviewData {
  id: string;
  author: string;
  meta: string;
  avatarType: 'photo-isabelly' | 'letter-j' | 'photo-tais';
  rating: number;
  timeAgo: string;
  isNew?: boolean;
  text?: string;
  photoBadge?: string;
}

const REAL_GOOGLE_REVIEWS: GoogleReviewData[] = [
  {
    id: 'isabelly-falcao',
    author: 'Isabelly Falcão',
    meta: '1 foto',
    avatarType: 'photo-isabelly',
    rating: 5,
    timeAgo: '2 semanas atrás',
    isNew: true,
    photoBadge: '1 foto anexada',
    text: 'Atendimento incrível e muito acolhedor! Cuidaram com todo carinho da saúde do meu pet.',
  },
  {
    id: 'jean-paulo',
    author: 'jean paulo',
    meta: '3 avaliações',
    avatarType: 'letter-j',
    rating: 5,
    timeAgo: '11 meses atrás',
    isNew: false,
    text: 'Atendimento de Excelência',
  },
  {
    id: 'tais-maria',
    author: 'Tais Maria',
    meta: '3 avaliações',
    avatarType: 'photo-tais',
    rating: 5,
    timeAgo: '9 meses atrás',
    isNew: false,
    text: 'Excelente clínica Bonita aconchegante mão da doutora maravilhosa pra cirurgia fiquei muito contente meus animais foram muito bem tratados',
  },
];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        '.testimonials-reveal',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollTrackRef.current) {
      const scrollAmount = 380;
      scrollTrackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Duplicate the 3 real reviews multiple times to create a seamless infinite marquee loop
  const loopItems = [
    ...REAL_GOOGLE_REVIEWS,
    ...REAL_GOOGLE_REVIEWS,
    ...REAL_GOOGLE_REVIEWS,
    ...REAL_GOOGLE_REVIEWS,
  ];

  return (
    <section
      id="avaliacoes"
      ref={containerRef}
      className="py-20 md:py-28 bg-white text-neutral-900 relative overflow-hidden"
    >
      {/* Anchor for backward-compatible links */}
      <span id="depoimentos" className="sr-only" />

      {/* Decorative Paws */}
      <div className="absolute top-10 right-10 text-lilac-light/20 pointer-events-none rotate-12">
        <PawIcon size={110} />
      </div>
      <div className="absolute bottom-10 left-8 text-teal/15 pointer-events-none -rotate-12">
        <PawIcon size={90} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="testimonials-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac/10 text-lilac-dark border border-lilac/20 font-semibold text-xs tracking-wider uppercase mb-4">
            <GoogleIcon size={16} />
            <span>Avaliações Verificadas no Google</span>
          </div>

          <h2 className="testimonials-reveal font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lilac-dark tracking-tight leading-tight">
            O que os tutores dizem sobre a Dra. Pet
          </h2>

          <p className="testimonials-reveal mt-4 text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-sans">
            Confira as avaliações reais e espontâneas deixadas por tutores no perfil oficial da <strong>Dra. Pet Clínica Veterinária</strong> no Google Maps.
          </p>

          {/* Google Rating Overview Pill */}
          <div className="testimonials-reveal mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-neutral-50 px-4 sm:px-5 py-3 rounded-2xl border border-neutral-200/90 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <GoogleIcon size={24} />
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-900 block leading-tight">
                  Google Avaliações
                </span>
                <span className="text-[11px] text-neutral-500">Classificação 5 Estrelas</span>
              </div>
            </div>

            <div className="h-7 w-[1px] bg-neutral-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl sm:text-2xl text-neutral-900">5.0</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} filled className="text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-teal-dark bg-teal/15 px-2.5 py-0.5 rounded-md">
                100% de Satisfação
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Top Bar Navigation */}
        <div className="testimonials-reveal flex items-center justify-between mb-4 sm:mb-5 px-2">
          <span className="text-[11px] sm:text-xs font-semibold text-neutral-500 flex items-center gap-1.5 truncate max-w-[200px] xs:max-w-none">
            <SparklesIcon size={14} className="text-amber-500 shrink-0" />
            <span className="truncate">Passe o mouse ou toque para pausar</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Avaliação anterior"
              className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-neutral-100 hover:bg-lilac hover:text-white text-neutral-700 transition-colors flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Próxima avaliação"
              className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-neutral-100 hover:bg-lilac hover:text-white text-neutral-700 transition-colors flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Looping Marquee */}
      <div
        className="w-full relative py-2 overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Shadows for seamless edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollTrackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-4 sm:px-12 select-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div
            className={`flex gap-4 sm:gap-6 shrink-0 ${isPaused ? '' : 'animate-marquee'}`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[280px] xs:w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200/90 shadow-md hover:shadow-xl hover:border-lilac/50 transition-all duration-300 flex flex-col justify-between group/card relative"
              >
                <div>
                  {/* Google Review Header Layout */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar matching exact Google profile image in screenshots */}
                      {item.avatarType === 'photo-isabelly' && (
                        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100 flex items-center justify-center relative shadow-xs">
                          {/* Stylized photo representation */}
                          <div className="w-full h-full bg-gradient-to-br from-neutral-200 via-rose-100 to-amber-100 flex items-center justify-center">
                            <span className="text-neutral-700 font-bold text-sm">IF</span>
                          </div>
                        </div>
                      )}

                      {item.avatarType === 'letter-j' && (
                        <div className="w-11 h-11 rounded-full bg-[#558B2F] text-white font-sans font-medium text-xl flex items-center justify-center shrink-0 shadow-xs">
                          j
                        </div>
                      )}

                      {item.avatarType === 'photo-tais' && (
                        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100 flex items-center justify-center relative shadow-xs">
                          {/* Stylized photo representation */}
                          <div className="w-full h-full bg-gradient-to-br from-amber-200 via-yellow-300 to-emerald-300 flex items-center justify-center">
                            <span className="text-neutral-800 font-bold text-sm">TM</span>
                          </div>
                        </div>
                      )}

                      <div className="min-w-0">
                        <h3 className="font-sans font-medium text-[15px] text-[#202124] truncate">
                          {item.author}
                        </h3>
                        <p className="text-[12px] text-[#70757a] font-normal">
                          {item.meta}
                        </p>
                      </div>
                    </div>

                    {/* Google 3-dots Menu Button */}
                    <div className="flex items-center gap-1.5 shrink-0 text-neutral-400 pt-0.5">
                      <span className="text-neutral-400 text-base font-bold leading-none select-none cursor-pointer hover:text-neutral-600">
                        ⋮
                      </span>
                    </div>
                  </div>

                  {/* Stars Rating & Timestamp + Optional NOVA Badge */}
                  <div className="flex items-center gap-2 mb-3.5 flex-wrap">
                    <div className="flex items-center text-[#fbbc04]">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          size={16}
                          filled
                          className="text-[#fbbc04]"
                        />
                      ))}
                    </div>

                    <span className="text-[12px] text-[#70757a] font-normal">
                      {item.timeAgo}
                    </span>

                    {item.isNew && (
                      <span className="text-[10px] font-medium text-[#70757a] border border-[#dadce0] px-1.5 py-0.5 rounded bg-[#f8f9fa] tracking-wider uppercase">
                        NOVA
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  {item.text && (
                    <p className="text-[13.5px] text-[#3c4043] leading-relaxed font-sans">
                      {item.text}
                    </p>
                  )}
                </div>

                {/* Card Footer: Verified by Google Maps */}
                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5 text-[#137333] font-medium">
                    <CheckCircleIcon size={14} className="text-[#137333]" />
                    <span>Avaliação Verificada</span>
                  </span>

                  <div className="flex items-center gap-1 text-[#70757a]">
                    <GoogleIcon size={13} />
                    <span className="text-[11px]">Google Maps</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
        {/* Bottom Call to Action */}
        <div className="testimonials-reveal bg-neutral-50 rounded-2xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border border-neutral-200">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-lilac text-white flex items-center justify-center shadow-xs shrink-0">
              <HeartPawIcon size={22} />
            </div>
            <div>
              <p className="font-display font-bold text-sm sm:text-base text-neutral-900">
                Mais de 100 pets atendidos com excelência em Manaus
              </p>
              <p className="text-xs text-neutral-600">
                Conheça de perto o acolhimento da Dra. Pet Clínica Veterinária.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5592994622040?text=Ol%C3%A1!%20Vi%20as%20avalia%C3%A7%C3%B5es%20no%20Google%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-lilac-dark hover:bg-lilac text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center text-center whitespace-nowrap"
          >
            Agendar Consulta com a Dra. Pet
          </a>
        </div>
      </div>
    </section>
  );
};
