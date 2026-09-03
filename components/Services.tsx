'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import {
  StethoscopeIcon,
  MicroscopeIcon,
  SyringeVaccineIcon,
  HomeCareIcon,
  XRayImageIcon,
  SurgeryScalpelIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  PawIcon,
  CalendarIcon,
  SparklesIcon,
  TravelCertificateIcon,
  PharmacyIcon,
  GroomingIcon,
  DogTaxiIcon,
} from './icons/CustomIcons';

interface ServicesProps {
  onSelectServiceToBook: (serviceName: string) => void;
}

const SERVICES_DATA = [
  {
    id: 'consultas',
    name: 'Consultas',
    tagline: 'Avaliação clínica minuciosa e preventiva',
    icon: StethoscopeIcon,
    badge: 'Rotina & Check-up',
    description:
      'Exame físico completo, avaliação nutricional, cuidados em todas as fases da vida (filhotes, adultos e idosos) e orientações personalizadas para o tutor.',
    highlights: [
      'Clínica médica geral de pequenos animais',
      'Atendimento preventivo e acompanhamento contínuo',
      'Diagnóstico de patologias agudas e crônicas',
      'Orientações comportamentais e nutricionais',
    ],
    whatsappMsg: 'Olá! Gostaria de agendar uma consulta para meu pet na Dra. Pet.',
  },
  {
    id: 'exames',
    name: 'Exames Laboratoriais',
    tagline: 'Diagnósticos rápidos, confiáveis e precisos',
    icon: MicroscopeIcon,
    badge: 'Precisão Médica',
    description:
      'Coleta e análise de exames essenciais para detecção precoce de doenças, monitoramento pré-operatório e controle de tratamentos.',
    highlights: [
      'Hemograma completo e perfil bioquímico',
      'Exames parasitológicos de fezes e urina (EAS)',
      'Citologias dermatológicas e raspados de pele',
      'Testes rápidos imunocromatográficos (FIV/FeLV, Erliquiose, Parvo/Cinomose)',
    ],
    whatsappMsg: 'Olá! Gostaria de informações e agendamento de exames laboratoriais.',
  },
  {
    id: 'vacinas',
    name: 'Vacinas',
    tagline: 'Imunização ética e protocolos atualizados',
    icon: SyringeVaccineIcon,
    badge: 'Proteção Essencial',
    description:
      'Protocolos vacinais seguros com vacinas importadas de altíssima eficácia para cães e gatos, mantendo seu amigo protegido contra vírus e bactérias letais.',
    highlights: [
      'Cães: Vacinas V8 / V10 polivalente + Antirrábica + Gripe Canina + Giárgia',
      'Gatos: Vacinas V4 / V5 quádrupla/quíntupla felina + Antirrábica',
      'Carteira de vacinação digital e física atualizada',
      'Acompanhamento de reforços anuais',
    ],
    whatsappMsg: 'Olá! Gostaria de agendar a vacinação do meu pet na Dra. Pet.',
  },
  {
    id: 'atestado',
    name: 'Atestado de Viagem',
    tagline: 'Documentação para viajar com seu pet tranquilamente',
    icon: TravelCertificateIcon,
    badge: 'Viagem Segura',
    description:
      'Emissão do atestado de saúde e do Certificado Veterinário exigido por companhias aéreas e rodoviárias, com orientação completa sobre a documentação necessária para cada destino.',
    highlights: [
      'Exame clínico completo antes da emissão',
      'Atestado de saúde e CVI (viagens nacionais e internacionais)',
      'Orientação sobre exigências de cada companhia aérea',
      'Verificação da carteira de vacinação atualizada',
    ],
    whatsappMsg: 'Olá! Gostaria de solicitar um atestado de viagem para meu pet.',
  },
  {
    id: 'domicilio',
    name: 'Atendimentos a Domicílio',
    tagline: 'O cuidado da Dra. Pet no conforto da sua casa',
    icon: HomeCareIcon,
    badge: 'Sem Estresse',
    description:
      'Ideal para pets que sofrem com transporte, gatos estressados, animais idosos ou tutores com rotinas corridas em Manaus.',
    highlights: [
      'Consulta no ambiente familiar onde o pet se sente seguro',
      'Aplicação de vacinas e coletas de exames em casa',
      'Avaliação de ambiente e manejo sanitário',
      'Agendamento flexível para todos os bairros de Manaus',
    ],
    whatsappMsg: 'Olá! Gostaria de agendar um atendimento veterinário a domicílio.',
  },
  {
    id: 'imagem',
    name: 'Exames de Imagem',
    tagline: 'Visualização interna detalhada com laudos',
    icon: XRayImageIcon,
    badge: 'Tecnologia',
    description:
      'Ultrassonografia abdominal e exames radiográficos para investigação rápida de dores, gestações, traumas ou alterações em órgãos internos.',
    highlights: [
      'Ultrassonografia abdominal e pélvica',
      'Acompanhamento gestacional com contagem fetal',
      'Investigação de corpo estranho e dores abdominais',
      'Laudos emitidos por especialistas parceiros',
    ],
    whatsappMsg: 'Olá! Gostaria de agendar um exame de imagem (Ultrassom/Raio-X) para meu pet.',
  },
  {
    id: 'farmacia',
    name: 'Farmácia e Acessórios',
    tagline: 'Tudo que seu pet precisa em um só lugar',
    icon: PharmacyIcon,
    badge: 'Praticidade',
    description:
      'Medicamentos veterinários, antipulgas, suplementos, rações e acessórios selecionados, sempre com orientação profissional para o cuidado diário do seu pet.',
    highlights: [
      'Medicamentos e vermífugos sob orientação veterinária',
      'Antipulgas e carrapaticidas de diversas marcas',
      'Rações e suplementos nutricionais',
      'Acessórios como coleiras, potes e casinhas',
    ],
    whatsappMsg: 'Olá! Gostaria de saber sobre os produtos disponíveis na farmácia da Dra. Pet.',
  },
  {
    id: 'banhotosa',
    name: 'Banho e Tosa',
    tagline: 'Seu pet limpo, cheiroso e feliz',
    icon: GroomingIcon,
    badge: 'Higiene & Cuidado',
    description:
      'Banho com produtos hipoalergênicos, tosa higiênica ou na tesoura, corte de unhas e limpeza de ouvidos, sempre com manejo cuidadoso e atenção ao bem-estar animal.',
    highlights: [
      'Banho com produtos dermatologicamente indicados',
      'Tosa higiênica, na máquina ou na tesoura',
      'Corte de unhas e limpeza de ouvidos',
      'Manejo calmo para pets ansiosos ou idosos',
    ],
    whatsappMsg: 'Olá! Gostaria de agendar banho e tosa para meu pet.',
  },
  {
    id: 'cirurgias',
    name: 'Cirurgias',
    tagline: 'Procedimentos seguros com anestesia monitorada',
    icon: SurgeryScalpelIcon,
    badge: 'Segurança Máxima',
    description:
      'Cirurgias eletivas (castrações preventivas) e procedimentos de tecidos moles com rigoroso protocolo anestésico, antissepsia e suporte pós-operatório.',
    highlights: [
      'Castração preventiva em cães e gatos (macho e fêmea)',
      'Cirurgias de tecidos moles e pequenos procedimentos',
      'Monitoramento multiparâmetro durante toda a anestesia',
      'Acompanhamento pós-operatório até a cicatrização completa',
    ],
    whatsappMsg: 'Olá! Gostaria de saber mais sobre procedimentos cirúrgicos e castração na Dra. Pet.',
  },
  {
    id: 'taxidog',
    name: 'Táxi Dog',
    tagline: 'Transporte seguro para consultas e passeios',
    icon: DogTaxiIcon,
    badge: 'Comodidade',
    description:
      'Serviço de transporte para levar e buscar seu pet em consultas, exames, banho e tosa ou passeios, com veículo adaptado e motorista treinado para o manuseio de animais.',
    highlights: [
      'Transporte porta a porta para consultas e exames',
      'Veículo climatizado e adaptado para pets',
      'Ideal para tutores sem tempo ou sem veículo',
      'Agendamento flexível dentro de Manaus',
    ],
    whatsappMsg: 'Olá! Gostaria de solicitar o serviço de Táxi Dog para meu pet.',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.services-header-anim',
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
        '.service-card-item',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="servicos"
      ref={containerRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#8C5EC4] to-lilac text-white relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-lilac-dark/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-10 text-white/[0.05] pointer-events-none rotate-45">
        <PawIcon size={80} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="services-header-anim inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 font-semibold text-xs tracking-wider uppercase mb-4">
           
            <span>Nossos Cuidados</span>
          </div>

          <h2 className="services-header-anim font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Serviços completos para a saúde e bem-estar do seu pet
          </h2>

          <p className="services-header-anim mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans">
            Oferecemos uma gama completa de especialidades com foco em atendimento humanizado, segurança e tecnologia médica veterinária em Manaus.
          </p>
        </div>

        {/* All Services Grid displayed directly: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card-item bg-white text-neutral-900 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl border border-lilac-light/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-lilac/15 text-lilac-dark group-hover:bg-teal group-hover:text-neutral-900 transition-colors duration-300 flex items-center justify-center shrink-0">
                      <Icon size={28} />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-lilac/10 text-lilac-dark text-xs font-bold tracking-wide">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-lilac-dark group-hover:text-neutral-900 transition-colors mb-1">
                    {service.name}
                  </h3>

                  <p className="text-xs font-semibold text-teal-dark mb-3 sm:mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-neutral-600 block">
                      O que inclui:
                    </span>
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircleIcon size={15} className="text-teal-dark shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-neutral-100 flex items-center gap-2.5 sm:gap-3">
                  <a
                    href={`https://wa.me/5592994622040?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex-1 py-3 px-3 sm:px-4 rounded-xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon size={18} className="text-neutral-900 shrink-0" />
                    <span className="whitespace-nowrap">Agendar no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectServiceToBook(service.name)}
                    aria-label={`Agendar ${service.name}`}
                    className="min-w-[44px] min-h-[44px] p-3 rounded-xl bg-neutral-100 hover:bg-lilac/15 text-lilac-dark transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  >
                    <CalendarIcon size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support note footer */}
        <div className="services-header-anim mt-12 text-center">
          <p className="text-sm text-white/80 bg-white/10 backdrop-blur-sm inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15">
            <PawIcon size={16} className="text-teal" />
            <span>
              Entre outros serviços especializados para a saúde e bem-estar do seu pet em Manaus.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};