'use client';

import React, { useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  ChevronDownIcon,
  WhatsAppIcon,
  PawIcon,
  CheckCircleIcon,
  CreditCardIcon,
  PixIcon,
} from './icons/CustomIcons';

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'É necessário agendar antes de levar meu pet à clínica?',
    answer:
      'Sim! Para que possamos dedicar todo o tempo, atenção e carinho que seu pet merece sem esperas desnecessárias, todos os nossos atendimentos clínicos, exames, vacinas e procedimentos são realizados com agendamento prévio. Você pode agendar de forma rápida pelo nosso WhatsApp (92) 9462-2040.',
  },
  {
    id: 'faq-2',
    question: 'A Dra. Pet atende aos domingos?',
    answer:
      'Aos domingos não funcionamos. Nossos horários de atendimento são de Segunda a Sexta-feira, das 08h às 18h, e aos Sábados, das 08h às 17h. Caso precise agendar para a semana seguinte, você pode deixar uma mensagem em nosso WhatsApp a qualquer momento.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o atendimento veterinário a domicílio em Manaus?',
    answer:
      'Nosso atendimento domiciliar leva a consulta médica, aplicação de vacinas e coleta de determinados exames laboratoriais até a comodidade do seu lar em Manaus. É uma opção excelente para pets que se estressam em caixas de transporte ou no trânsito, animais idosos ou tutores com dificuldade de locomoção. O agendamento é combinado via WhatsApp com data e turno de preferência.',
  },
  {
    id: 'faq-4',
    question: 'Quais as formas de pagamento aceitas pela clínica?',
    answer:
      'Aceitamos Pix, cartões de crédito (com possibilidade de parcelamento dependendo do procedimento), cartões de débito e dinheiro em espécie.',
  },
  {
    id: 'faq-5',
    question: 'Quais as vacinas essenciais para cães e gatos?',
    answer:
      'Para cães: a vacina polivalente (V8 ou V10) contra cinomose, parvovirose e leptospirose, além da vacina Antirrábica (obrigatória por lei), vacina contra Gripe Canina e Giárgia. Para gatos: a vacina polivalente felina (V4 ou V5) e a vacina Antirrábica. Nossa equipe avalia a idade e o estilo de vida do pet para montar o calendário vacinal ideal.',
  },
  {
    id: 'faq-6',
    question: 'Como devo preparar meu cão ou gato para exames de sangue ou cirurgia?',
    answer:
      'Para a maioria dos exames de sangue bioquímicos, é recomendado jejum alimentar de 8 a 12 horas (água pode ser mantida até poucas horas antes). Para procedimentos cirúrgicos (como castração), o jejum alimentar e hídrico detalhado será previamente orientado pela médica veterinária após a avaliação pré-operatória.',
  },
];

export const FAQ: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.faq-reveal', {
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

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#8F61C8] via-lilac to-lilac-dark text-white relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lilac-dark/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="faq-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 font-semibold text-xs tracking-wider uppercase mb-4">
            <PawIcon size={14} className="text-teal" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="faq-reveal font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="faq-reveal mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans">
            Reunimos as respostas para as dúvidas mais comuns dos tutores sobre agendamentos, serviços e cuidados com os pets.
          </p>
        </div>

        {/* Radix Accordion */}
        <div ref={accordionRef} className="faq-reveal space-y-3 sm:space-y-3.5">
          <Accordion.Root type="single" collapsible defaultValue="faq-1" className="space-y-3 sm:space-y-3.5">
            {FAQ_ITEMS.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="bg-white text-neutral-900 rounded-2xl shadow-md border border-lilac-light/30 overflow-hidden transition-all duration-200"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-display font-bold text-sm xs:text-base sm:text-lg text-lilac-dark hover:text-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal group cursor-pointer">
                    <span className="pr-3 sm:pr-4">{item.question}</span>
                    <div className="w-8 h-8 rounded-full bg-lilac/10 group-hover:bg-teal text-lilac-dark group-hover:text-neutral-900 flex items-center justify-center shrink-0 transition-all duration-200 group-data-[state=open]:rotate-180">
                      <ChevronDownIcon size={18} />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="accordion-content overflow-hidden text-xs sm:text-sm text-neutral-700 leading-relaxed px-4 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-neutral-100">
                  <p>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Still have questions banner */}
        <div className="faq-reveal mt-10 sm:mt-12 bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Nossa equipe está pronta para te atender com toda a atenção pelo WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/5592994622040?text=Ol%C3%A1%20Dra.%20Pet!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm tracking-wide transition-all shadow-glow hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 shrink-0 cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon size={18} className="text-neutral-900 shrink-0" />
            <span>Falar com a Dra. Pet</span>
          </a>
        </div>
      </div>
    </section>
  );
};
