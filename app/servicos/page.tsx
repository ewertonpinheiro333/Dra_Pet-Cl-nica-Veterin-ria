import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'Serviços Veterinários',
  description:
    'Conheça todos os serviços da Dra. Pet em Manaus: consultas clínicas e domiciliares, vacinas, exames laboratoriais, ultrassonografia, cirurgias e banho e tosa.',
  alternates: {
    canonical: 'https://dra-pet-manaus.com.br/servicos',
  },
  openGraph: {
    title: 'Serviços Veterinários | Dra. Pet Clínica Veterinária Manaus',
    description:
      'Consultas domiciliares, vacinas, ultrassonografia, exames e cirurgias em Manaus com carinho e atendimento humanizado.',
    url: 'https://dra-pet-manaus.com.br/servicos',
  },
};

export default function ServicosPage() {
  return <HomePage initialSection="servicos" />;
}
