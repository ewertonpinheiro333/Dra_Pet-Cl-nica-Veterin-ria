import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'Agendamento de Consultas',
  description:
    'Agende consultas presenciais ou atendimento veterinário a domicílio para seu pet em Manaus com a Dra. Pet Clínica Veterinária. Rápido e prático.',
  alternates: {
    canonical: 'https://dra-pet-manaus.com.br/agendamento',
  },
  openGraph: {
    title: 'Agendamento de Consultas | Dra. Pet Clínica Veterinária Manaus',
    description:
      'Agende consultas presenciais ou atendimento a domicílio em Manaus com a Dra. Pet Clínica Veterinária.',
    url: 'https://dra-pet-manaus.com.br/agendamento',
  },
};

export default function AgendamentoPage() {
  return <HomePage initialModalOpen={true} />;
}
