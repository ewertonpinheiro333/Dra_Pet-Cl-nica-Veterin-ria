'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  ClockIcon,
  CalendarIcon,
  WhatsAppIcon,
  PhoneIcon,
  CheckCircleIcon,
  PawIcon,
  SparklesIcon,
} from './icons/CustomIcons';

interface HoursProps {
  onOpenAppointment: () => void;
}

export const Hours: React.FC<HoursProps> = ({ onOpenAppointment }) => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [manausTimeStr, setManausTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const manausDate = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/Manaus' })
        );
        const day = manausDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
        const hours = manausDate.getHours();
        const minutes = manausDate.getMinutes();

        const timeString = manausDate.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Manaus',
        });
        setManausTimeStr(timeString);

        // Mon-Fri: 08:00 - 18:00
        if (day >= 1 && day <= 5) {
          if (hours >= 8 && hours < 18) {
            setIsOpenNow(true);
            return;
          }
        }
        // Sat: 08:00 - 17:00
        if (day === 6) {
          if (hours >= 8 && hours < 17) {
            setIsOpenNow(true);
            return;
          }
        }
        // Sun or off-hours
        setIsOpenNow(false);
      } catch (e) {
        // Fallback
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.from('.hours-reveal', {
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

  const scheduleDays = [
    {
      day: 'Segunda a Sexta-feira',
      hours: '08h às 18h',
      status: 'Atendimento normal',
      active: true,
    },
    {
      day: 'Sábado',
      hours: '08h às 17h',
      status: 'Atendimento normal',
      active: true,
    },
    {
      day: 'Domingo',
      hours: 'Fechado',
      status: 'Não funcionamos',
      active: false,
    },
  ];

  return (
    <section
      id="horarios"
      ref={containerRef}
      className="py-20 md:py-28 bg-white text-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context and Notice */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="hours-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac/10 text-lilac-dark border border-lilac/20 font-semibold text-xs tracking-wider uppercase mb-4">
              <ClockIcon size={14} className="text-lilac-dark" />
              <span>Disponibilidade</span>
            </div>

            <h2 className="hours-reveal font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lilac-dark tracking-tight leading-tight mb-4 sm:mb-6">
              Horários de atendimento e agendamento
            </h2>

            <p className="hours-reveal text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
              Para garantir uma experiência tranquila, sem filas e com o tempo que seu pet realmente necessita, realizamos nossos atendimentos com agendamento prévio.
            </p>

            {/* Prominent Warning Callout */}
            <div className="hours-reveal w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-lilac/15 to-teal/20 border-l-4 border-teal flex items-start gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal text-neutral-900 flex items-center justify-center shrink-0 shadow-sm">
                <CalendarIcon size={20} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-base text-lilac-dark">
                  Necessário agendar seu horário!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                  Chame no nosso WhatsApp agora mesmo para reservar o melhor dia e horário para o seu cão ou gato.
                </p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="hours-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5592994622040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-teal/40 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size={20} className="text-neutral-900 shrink-0" />
                <span>WhatsApp: (92) 99462-2040</span>
              </a>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto min-h-[48px] px-5 py-3.5 sm:py-4 rounded-2xl bg-lilac/15 hover:bg-lilac/25 text-lilac-dark font-bold text-sm sm:text-base tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer border border-lilac/30 whitespace-nowrap"
              >
                <CalendarIcon size={18} />
                <span>Solicitar Horário</span>
              </button>
            </div>
          </div>

          {/* Right Column: Schedule Table / Card */}
          <div className="lg:col-span-6">
            <div
              ref={cardRef}
              className="hours-reveal bg-neutral-50 rounded-3xl p-5 sm:p-7 md:p-8 border border-neutral-200 shadow-xl relative overflow-hidden"
            >
              {/* Header inside Card */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-lilac/15 text-lilac-dark flex items-center justify-center shrink-0">
                    <ClockIcon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-neutral-900">
                      Quadro de Horários
                    </h3>
                    <p className="text-xs text-neutral-600">
                      Horário Oficial de Manaus (AM)
                      {manausTimeStr && ` · Agora: ${manausTimeStr}`}
                    </p>
                  </div>
                </div>

                {/* Live Status Pill */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold self-start xs:self-auto shrink-0 ${
                    isOpenNow
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-neutral-200 text-neutral-700 border border-neutral-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'
                    }`}
                  />
                  <span>{isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-neutral-200/80 my-3 sm:my-4">
                {scheduleDays.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 sm:py-4 flex items-center justify-between hover:bg-white/80 px-1.5 sm:px-2 rounded-xl transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div
                        className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                          item.active ? 'bg-teal-dark' : 'bg-neutral-300'
                        }`}
                      />
                      <div className="min-w-0">
                        <span className="font-display font-bold text-xs sm:text-sm md:text-base text-neutral-900 block truncate">
                          {item.day}
                        </span>
                        <span
                          className={`text-[11px] sm:text-xs block truncate ${
                            item.active ? 'text-teal-dark font-medium' : 'text-neutral-600'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`font-display font-extrabold text-xs sm:text-sm md:text-base px-2.5 sm:px-3 py-1 rounded-xl whitespace-nowrap ${
                          item.active
                            ? 'bg-lilac/15 text-lilac-dark'
                            : 'bg-neutral-200/80 text-neutral-600'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon size={16} className="text-teal-dark" />
                  Atendimentos com horário marcado
                </span>
                <a
                  href="tel:+5592994622040"
                  className="font-bold text-lilac-dark hover:text-teal-dark transition-colors flex items-center gap-1"
                >
                  <PhoneIcon size={14} />
                  Ligar: (92) 9462-2040
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
