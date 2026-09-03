'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseIcon,
  WhatsAppIcon,
  PawIcon,
  CalendarIcon,
  ClockIcon,
  UserHeartIcon,
  CheckCircleIcon,
} from './icons/CustomIcons';

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const SERVICES_LIST = [
  'Consulta Geral',
  'Vacinação',
  'Exames Laboratoriais',
  'Atendimento a Domicílio',
  'Exames de Imagem (Ultrassom/Raio-X)',
  'Procedimento Cirúrgico',
  'Outro / Dúvida',
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  onOpenChange,
  defaultService = 'Consulta Geral',
}) => {
  const [tutorName, setTutorName] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'Cachorro' | 'Gato'>('Cachorro');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã (08h às 12h)');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      `🐾 *Agendamento Dra. Pet Clínica Veterinária*`,
      ``,
      `👤 *Tutor(a):* ${tutorName.trim() || 'Não informado'}`,
      `${petType === 'Gato' ? '🐱' : '🐶'} *Pet:* ${petName.trim() || 'Não informado'} (${petType})`,
      `🩺 *Serviço:* ${selectedService}`,
      `⏰ *Período de preferência:* ${preferredPeriod}`,
    ];

    if (notes.trim()) {
      textLines.push(`📝 *Observações:* ${notes.trim()}`);
    }

    textLines.push(``, `_Enviado pelo site dra-pet-manaus.com.br_`);

    const encodedMessage = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `https://wa.me/5592994622040?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] sm:w-[92vw] max-w-lg max-h-[90vh] overflow-y-auto bg-white text-neutral-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl z-50 focus:outline-none border border-lilac-light/40">
          <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-lilac-light/30">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-lilac/15 text-lilac flex items-center justify-center shrink-0">
                <CalendarIcon size={22} className="text-lilac-dark" />
              </div>
              <div>
                <Dialog.Title className="text-lg sm:text-xl font-bold font-display text-lilac-dark leading-tight">
                  Agendar Atendimento
                </Dialog.Title>
                <Dialog.Description className="text-xs text-neutral-600">
                  Preencha e confirme direto pelo WhatsApp oficial
                </Dialog.Description>
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                id="close-appointment-modal"
                aria-label="Fechar modal"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <CloseIcon size={18} />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4">
            {/* Nome do Tutor */}
            <div>
              <label htmlFor="tutorName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                Seu Nome (Tutor) *
              </label>
              <input
                id="tutorName"
                type="text"
                required
                placeholder="Ex: Maria Souza"
                value={tutorName}
                onChange={(e) => setTutorName(e.target.value)}
                className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-teal focus:ring-2 focus:ring-teal/30 outline-none text-base sm:text-sm text-neutral-900 transition-all placeholder:text-neutral-400"
              />
            </div>

            {/* Dados do Pet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="petName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Nome do Pet *
                </label>
                <input
                  id="petName"
                  type="text"
                  required
                  placeholder="Ex: Thor, Mel"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-teal focus:ring-2 focus:ring-teal/30 outline-none text-base sm:text-sm text-neutral-900 transition-all placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Espécie
                </label>
                <div className="flex rounded-xl bg-neutral-100 p-1 border border-neutral-200 min-h-[44px]">
                  {(['Cachorro', 'Gato'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPetType(type)}
                      className={`flex-1 min-h-[36px] py-1 text-xs font-medium rounded-lg transition-all flex items-center justify-center cursor-pointer ${
                        petType === type
                          ? 'bg-lilac-dark text-white shadow-sm font-bold'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Serviço */}
            <div>
              <label htmlFor="serviceSelect" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                Serviço Desejado *
              </label>
              <select
                id="serviceSelect"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-teal focus:ring-2 focus:ring-teal/30 outline-none text-base sm:text-sm text-neutral-900 transition-all bg-white"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            {/* Período */}
            <div>
              <label htmlFor="periodSelect" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                Melhor Período
              </label>
              <select
                id="periodSelect"
                value={preferredPeriod}
                onChange={(e) => setPreferredPeriod(e.target.value)}
                className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-teal focus:ring-2 focus:ring-teal/30 outline-none text-base sm:text-sm text-neutral-900 transition-all bg-white"
              >
                <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                <option value="Sábado (08h às 17h)">Sábado (08h às 17h)</option>
                <option value="Urgência / O mais breve possível">Urgência / O mais breve possível</option>
              </select>
            </div>

            {/* Observações */}
            <div>
              <label htmlFor="notes" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                Sintomas ou Observações (Opcional)
              </label>
              <textarea
                id="notes"
                rows={2}
                placeholder="Ex: Vacina anual, check-up de rotina, sem apetite há 1 dia..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-teal focus:ring-2 focus:ring-teal/30 outline-none text-base sm:text-sm text-neutral-900 transition-all placeholder:text-neutral-400 resize-none"
              />
            </div>

            <div className="p-3 bg-lilac/10 rounded-xl border border-lilac/20 flex items-start gap-2 text-xs text-lilac-dark">
              <CheckCircleIcon size={16} className="text-teal-dark shrink-0 mt-0.5" />
              <span>
                Ao clicar no botão abaixo, você será redirecionado para o WhatsApp oficial da clínica <strong>(92) 9462-2040</strong> com a mensagem pronta.
              </span>
            </div>

            <button
              type="submit"
              id="confirm-whatsapp-booking-btn"
              className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl bg-teal hover:bg-teal-dark text-neutral-900 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-teal/40 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <WhatsAppIcon size={20} className="text-neutral-900 shrink-0" />
              <span>Enviar Agendamento no WhatsApp</span>
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
