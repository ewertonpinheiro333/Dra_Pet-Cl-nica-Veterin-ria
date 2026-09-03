'use client';

import React, { useRef, useState, useEffect } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { WhatsAppIcon, CloseIcon, SparklesIcon, HeartPawIcon } from './icons/CustomIcons';

export const WhatsAppFloatingButton: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  // GSAP continuous gentle pulse animation
  useGSAP(
    () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.08,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 1.5,
          ease: 'back.out(1.5)',
        });
      }
    },
    { scope: buttonRef }
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none">
      {/* Interactive Speech Hint Bubble */}
      {showNotificationBadge && (
        <div
          ref={badgeRef}
          className="bg-white text-neutral-900 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-2xl border border-lilac-light/40 flex items-center gap-2.5 sm:gap-3 text-xs animate-bounce duration-1000 max-w-[calc(100vw-32px)] sm:max-w-xs"
        >
          <div className="w-7 h-7 rounded-full bg-teal/20 text-teal-dark flex items-center justify-center shrink-0">
            <HeartPawIcon size={16} />
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-xs text-lilac-dark leading-tight truncate">
              Precisa de ajuda ou agendamento?
            </p>
            <p className="text-[11px] text-neutral-600 truncate">
              Fale agora com a Dra. Pet no WhatsApp!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowNotificationBadge(false)}
            aria-label="Fechar aviso"
            className="text-neutral-400 hover:text-neutral-600 p-1 shrink-0"
          >
            <CloseIcon size={14} />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button with Radix Tooltip */}
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <a
              ref={buttonRef}
              id="floating-whatsapp-btn"
              href="https://wa.me/5592994622040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp da Dra. Pet"
              className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-teal/50 focus:outline-none focus:ring-4 focus:ring-teal/50 cursor-pointer border-2 border-white active:scale-95"
            >
              <WhatsAppIcon size={32} className="text-white" />
              {/* Ping Ring for extra visual alert */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-dark" />
              </span>
            </a>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content
              side="left"
              align="center"
              sideOffset={12}
              className="bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl z-50 animate-in fade-in"
            >
              <span>Agendar no WhatsApp · (92) 9462-2040</span>
              <Tooltip.Arrow className="fill-neutral-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};
