'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  CheckCircleIcon,
  PawIcon,
  WhatsAppIcon,
  InstagramIcon,
} from './icons/CustomIcons';

interface AboutProps {
  onOpenAppointment: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointment }) => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-reveal',
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

      gsap.fromTo(
        '.feature-card',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const differentials = [
    {
      num: '01',
      title: 'Equipe Qualificada',
      desc: 'Médicos veterinários capacitados e dedicados, com atualização constante em clínica médica, diagnósticos e cirurgias de cães e gatos.',
      badge: 'Corpo Clínico Dedicado',
    },
    {
      num: '02',
      title: 'Atendimento Humanizado',
      desc: 'Abordagem respeitosa e carinhosa com técnicas cat & dog friendly, sem estresse para que o pet se sinta acolhido e seguro.',
      badge: 'Zero Estresse Pet',
    },
    {
      num: '03',
      title: 'Estrutura Completa',
      desc: 'Consultórios climatizados, sala de procedimentos, equipamentos modernos e ambiente rigorosamente higienizado no Novo Aleixo.',
      badge: 'Unidade Novo Aleixo',
    },
    {
      num: '04',
      title: 'Cuidado em Todo Lugar',
      desc: 'Flexibilidade total: venha até a nossa clínica ou receba nosso atendimento veterinário a domicílio no conforto do seu lar em toda Manaus.',
      badge: 'Toda Manaus + Clínica',
    },
  ];

  const highlights = [
    {
      title: 'Clínica Presencial',
      desc: 'Estrutura aconchegante e equipada na Rua João Câmara, 680 - Novo Aleixo.',
    },
    {
      title: 'Domiciliar em Toda Manaus',
      desc: 'Levamos vacinas, consultas e exames até você sem tirar o pet de casa.',
    },
    {
      title: 'Atendimento Ágil',
      desc: 'Horários flexíveis e marcação rápida e descomplicada via WhatsApp.',
    },
    {
      title: 'Transparência Total',
      desc: 'Explicações claras para o tutor, ética médica e respeito ao seu orçamento.',
    },
  ];

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="py-16 md:py-24 bg-white text-neutral-900 relative overflow-hidden"
    >
      {/* Decorative subtle paws in background */}
      <div className="absolute top-10 right-10 text-lilac-light/20 pointer-events-none rotate-12">
        <PawIcon size={120} />
      </div>
      <div className="absolute bottom-10 left-8 text-teal/15 pointer-events-none -rotate-12">
        <PawIcon size={90} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="about-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac/10 text-lilac-dark border border-lilac/20 font-semibold text-xs tracking-wider uppercase mb-4">
            <span>Nossa Proposta de Valor</span>
          </div>

          <h2 className="about-reveal font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lilac-dark tracking-tight leading-tight">
            Amor, respeito e cuidado de verdade com seu melhor amigo
          </h2>

          <p className="about-reveal mt-4 text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-sans">
            A <strong>Dra. Pet Clínica Veterinária</strong> nasceu com a missão de transformar a experiência de saúde animal em Manaus. Tratamos cada cão e gato como um membro legítimo e precioso da sua família, seja em nossa unidade física ou no atendimento domiciliar.
          </p>
        </div>

        {/* 4 Differentials Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {differentials.map((item, index) => (
            <div
              key={index}
              className="feature-card bg-neutral-50/90 hover:bg-white p-5 sm:p-7 rounded-3xl border border-neutral-200/90 hover:border-lilac/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent border line on hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-lilac to-teal opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-lilac/10 text-lilac-dark border border-lilac/20">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-lilac-dark border border-lilac-light/50 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 group-hover:text-lilac-dark transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-lilac-dark">
                <CheckCircleIcon size={16} className="text-teal-dark shrink-0" />
                <span>Padrão Dra. Pet</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Bar */}
        <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-lilac/5 border border-lilac-light/30 mb-8 sm:mb-12">
          {highlights.map((hl, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 bg-white/80 rounded-xl border border-lilac-light/20 shadow-2xs flex flex-col justify-between">
              <h3 className="font-bold text-sm text-neutral-900 leading-snug">{hl.title}</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="about-reveal bg-gradient-to-br from-lilac-dark via-lilac to-lilac-dark text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-lilac-light/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            {/* Bloco esquerdo: Feedbacks */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/20 pb-5 sm:pb-6 lg:pb-0 lg:pr-8">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Cuidado que faz diferença
              </h3>
              <p className="text-sm sm:text-base text-teal font-bold mt-2 tracking-wide">
                Feedbacks positivos de tutores
              </p>
            </div>

            {/* Texto central */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white mb-2 leading-tight">
                O cuidado que conquista tutores
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Carinho, atenção e cuidado de verdade em cada atendimento. Recebemos diariamente mensagens de tutores que confiam na Dra. Pet para cuidar da saúde e do bem-estar dos seus cães e gatos.
              </p>
            </div>

            {/* Botões à direita */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch w-full">
              <a
                href="https://wa.me/5592994622040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-5 py-3 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm tracking-wide transition-all shadow-glow hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <WhatsAppIcon size={18} className="text-neutral-900 shrink-0" />
                <span>Agendar consulta</span>
              </a>

              <a
                href="https://www.instagram.com/drapet.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide transition-all border border-white/25 hover:border-white/40 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <InstagramIcon size={18} className="text-white shrink-0" />
                <span>Conheça nosso Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
