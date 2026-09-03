import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// Clínica Logo: Coração com Pata integrada
export const HeartPawIcon: React.FC<IconProps> = ({
  size = 28,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Coração */}
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    {/* Almofada central */}
    <circle cx="12" cy="12.5" r="1.8" fill="currentColor" stroke="none" />
    {/* Dedinhos da pata */}
    <circle cx="9.2" cy="9.2" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="11.2" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="13.2" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="15.2" cy="9.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

// Pata de pet decorativa e de ícone
export const PawIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    {/* Almofada principal */}
    <path d="M12 10.5c-2.3 0-4.2 1.6-4.2 3.6 0 1.5 1.1 2.8 2.5 3.3.5.2 1.1.3 1.7.3.6 0 1.2-.1 1.7-.3 1.4-.5 2.5-1.8 2.5-3.3 0-2-1.9-3.6-4.2-3.6z" />
    {/* 4 dedos da pata */}
    <ellipse cx="6.5" cy="9.5" rx="1.5" ry="2.2" transform="rotate(-20 6.5 9.5)" />
    <ellipse cx="10" cy="6.2" rx="1.5" ry="2.2" transform="rotate(-6 10 6.2)" />
    <ellipse cx="14" cy="6.2" rx="1.5" ry="2.2" transform="rotate(6 14 6.2)" />
    <ellipse cx="17.5" cy="9.5" rx="1.5" ry="2.2" transform="rotate(20 17.5 9.5)" />
  </svg>
);

// Estetoscópio
export const StethoscopeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
    <path d="M4.5 3H3" />
    <path d="M6 3H4.5" />
    <path d="M12 3h1.5" />
    <path d="M15 3h-1.5" />
    <path d="M9 12.5v3.5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-2" />
    <circle cx="18" cy="12" r="2.5" />
  </svg>
);

// Calendário
export const CalendarIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

// Relógio
export const ClockIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// WhatsApp
export const WhatsAppIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
  </svg>
);

// Pin de Localização
export const MapPinIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
  </svg>
);

// Seringa de Vacina
export const SyringeVaccineIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 2l4 4" />
    <path d="M17 7l3-3" />
    <path d="M19 9L8.7 19.3c-.4.4-1 .4-1.4 0l-2.6-2.6c-.4-.4-.4-1 0-1.4L15 5" />
    <path d="M9 11l4 4" />
    <path d="M5 19l-3 3" />
    <path d="M14 4l6 6" />
  </svg>
);

// Atendimento a Domicílio (Casa com Pata)
export const HomeCareIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="10" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="14" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

// Exames de Imagem (Raio-X / Ultrassom)
export const XRayImageIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
    <path d="M21 15l-5-5L5 21" />
    <path d="M14 14l3.5-3.5L21 14" />
    <line x1="8" y1="12" x2="16" y2="12" strokeDasharray="2 2" />
  </svg>
);

// Cirurgias (Bisturi / Procedimentos Cirúrgicos)
export const SurgeryScalpelIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21l8-8" />
    <path d="M15 5l4 4-8 8-4-4z" fill="currentColor" fillOpacity="0.2" />
    <path d="M14 6l4 4" />
    <path d="M19 3l2 2-2 2-2-2z" />
    <line x1="12" y1="9" x2="12" y2="15" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

// Microscópio / Exames Laboratoriais
export const MicroscopeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

// Escudo com Check (Estrutura Completa / Segurança)
export const ShieldCheckIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

// Usuário com Coração (Atendimento Humanizado / Equipe)
export const UserHeartIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path
      d="M17.5 3.5a2.1 2.1 0 0 0-3 0l-.5.5-.5-.5a2.1 2.1 0 0 0-3 3l3.5 3.5 3.5-3.5a2.1 2.1 0 0 0 0-3z"
      fill="currentColor"
      stroke="none"
      transform="scale(0.6) translate(14, -2)"
    />
  </svg>
);

// Clínica / Hospital Veterinário
export const BuildingClinicIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M12 7v4" />
    <path d="M10 9h4" />
    <line x1="8" y1="14" x2="10" y2="14" />
    <line x1="14" y1="14" x2="16" y2="14" />
  </svg>
);

// Estrela de Avaliação
export const StarIcon: React.FC<IconProps & { filled?: boolean }> = ({
  size = 20,
  className = '',
  filled = true,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Chevron para Accordion
export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Check Circle
export const CheckCircleIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Telefone
export const PhoneIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Instagram
export const InstagramIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Facebook
export const FacebookIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Menu Hambúrguer
export const MenuIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Fechar / X
export const CloseIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Link Externo
export const ExternalLinkIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Sparkle / Brilho
export const SparklesIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Gatinho
export const PetCatIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 5c-4 0-7 2.5-7 7 0 3.5 2 6 7 6s7-2.5 7-6c0-4.5-3-7-7-7z" />
    <path d="M5 8L3 3l5 3" />
    <path d="M19 8l2-5-5 3" />
    <circle cx="9.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="14.5" cy="12.5" r="1" fill="currentColor" />
    <path d="M12 14.5v1" />
    <path d="M10.5 16c.5.5 1 .5 1.5.5s1 0 1.5-.5" />
  </svg>
);

// Cachorrinho
export const PetDogIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 4.212-3.3 6.8 1.05 3.34 4.8 5.2 6.8 5.2" />
    <path d="M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 4.212 3.3 6.8-1.05 3.34-4.8 5.2-6.8 5.2" />
    <rect x="6" y="8" width="12" height="11" rx="5" />
    <circle cx="9.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="14.5" cy="12.5" r="1" fill="currentColor" />
    <ellipse cx="12" cy="15" rx="1.5" ry="1" fill="currentColor" />
  </svg>
);

// Aspas de Depoimento
export const QuoteIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Formas de Pagamento / Cartão
export const CreditCardIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" />
  </svg>
);

// Ícone Pix
export const PixIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M15.485 5.515a4.5 4.5 0 0 0-6.364 0L3.5 11.136a4.5 4.5 0 0 0 0 6.364l1.621 1.621a4.5 4.5 0 0 0 6.364 0L17.106 13.5a4.5 4.5 0 0 0 0-6.364l-1.621-1.621zm-1.414 1.414l1.621 1.621a2.5 2.5 0 0 1 0 3.536L10.07 17.707a2.5 2.5 0 0 1-3.535 0l-1.621-1.621a2.5 2.5 0 0 1 0-3.536l5.621-5.621a2.5 2.5 0 0 1 3.536 0z" />
    <path d="M8.515 5.515a4.5 4.5 0 0 1 6.364 0L20.5 11.136a4.5 4.5 0 0 1 0 6.364l-1.621 1.621a4.5 4.5 0 0 1-6.364 0L6.894 13.5a4.5 4.5 0 0 1 0-6.364l1.621-1.621z" opacity="0.4" />
  </svg>
);

// Ícone Oficial Google
export const GoogleIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// Ícone Atestado de Viagem (Certificado / Avião + Documento)
export const TravelCertificateIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M17.8 14.8l-1.4-1.4a1 1 0 0 0-1.4 0l-.8.8-2.6-1.2-1.2 1.2 2 1.6-.8.8-1.2-.4-.8.8 1.6 1.2 1.2 1.6.8-.8-.4-1.2.8-.8 1.6 2 1.2-1.2-1.2-2.6.8-.8a1 1 0 0 0 0-1.4z" />
  </svg>
);

// Ícone Farmácia e Medicamentos
export const PharmacyIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
    <path d="M14 5l5 5" />
  </svg>
);

// Ícone Banho e Tosa
export const GroomingIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M12 17v4" />
    <path d="M9 11h6" />
  </svg>
);

// Ícone Táxi Dog
export const DogTaxiIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
    <path d="M8 8.5a1.5 1.5 0 0 1 3 0v.5H8v-.5z" />
  </svg>
);


