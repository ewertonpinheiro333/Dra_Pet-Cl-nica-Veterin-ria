import type { Metadata, Viewport } from 'next';
import { Nunito, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800', '900'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#9B6FCE',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dra-pet-manaus.com.br'),
  title: {
    default: 'Dra. Pet Clínica Veterinária | Manaus - AM',
    template: '%s | Dra. Pet Clínica Veterinária',
  },
  description:
    'Clínica veterinária em Manaus: consulta domiciliar, vacinas, banho e tosa, ultrassonografia, exames e cirurgias com amor e cuidado para cães e gatos.',
  keywords: [
    'veterinário Manaus',
    'consulta veterinária domiciliar',
    'clínica veterinária Manaus',
    'banho e tosa Manaus',
    'ultrassonografia pet Manaus',
    'vacinas cães e gatos Manaus',
    'veterinário a domicílio Manaus',
    'dra pet Manaus',
    'veterinária novo aleixo',
  ],
  authors: [{ name: 'Dra. Pet Clínica Veterinária' }],
  creator: 'Dra. Pet Clínica Veterinária',
  publisher: 'Dra. Pet Clínica Veterinária',
  alternates: {
    canonical: 'https://dra-pet-manaus.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dra. Pet Clínica Veterinária | Manaus - AM',
    description:
      'Clínica veterinária em Manaus: consulta domiciliar, vacinas, banho e tosa, ultrassonografia, exames e cirurgias com amor e cuidado para cães e gatos.',
    url: 'https://dra-pet-manaus.com.br',
    siteName: 'Dra. Pet Clínica Veterinária',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/assets/images/drapetlogo.png',
        width: 800,
        height: 800,
        alt: 'Dra. Pet Clínica Veterinária em Manaus',
      },
      {
        url: '/assets/hero-pets.jpg',
        width: 1200,
        height: 800,
        alt: 'Consulta veterinária e cuidado com pets em Manaus - Dra. Pet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Pet Clínica Veterinária | Manaus - AM',
    description:
      'Clínica veterinária em Manaus: consulta domiciliar, vacinas, banho e tosa, ultrassonografia, exames e cirurgias com amor e cuidado para cães e gatos.',
    images: ['/assets/hero-pets.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-[#9B6FCE] text-white selection:bg-[#2DD4BF] selection:text-[#1F1B24]">
        {children}
      </body>
    </html>
  );
}

