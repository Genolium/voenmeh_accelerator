import { useState } from "react";
import { motion } from "motion/react";

export const Partners = () => {
  const partners = [
    { name: "Ростех", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rostec_Logo.svg" },
    { name: "Роскосмос", logo: "https://upload.wikimedia.org/wikipedia/ru/d/de/Roscosmos_Logo_ru.svg" },
    { name: "Фонд НТИ", logo: "https://nti.ru/wp-content/themes/as_theme/assets/images/logo.svg" },
    { name: "Алмаз-Антей", logo: "https://upload.wikimedia.org/wikipedia/ru/3/30/Almaz-antey.jpg" },
    { name: "Радар ММС", logo: "https://radar-mms.com/markup/img/logo.png" }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden" id="partners">
      <div className="container-wide">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[9px] md:text-[10px] uppercase font-mono font-bold text-slate-300 tracking-[0.4em] mb-16 md:mb-20"
          >
            Индустриальные партнеры и заказчики
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 transition-all">
          {partners.map((partner, idx) => (
            <PartnerLogo key={idx} partner={partner} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PartnerLogoProps {
  partner: any;
  delay: number;
}

const PartnerLogo = ({ partner, delay }: PartnerLogoProps) => {
  const [error, setError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-8 md:h-10 flex items-center justify-center cursor-default hover:scale-110 transition-all lg:grayscale lg:opacity-60 lg:hover:grayscale-0 lg:hover:opacity-100 group"
    >
      {!error ? (
        <img 
          src={partner.logo} 
          alt={partner.name} 
          className="h-full w-auto max-w-[120px] object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-display font-black text-xl md:text-2xl text-slate-400 group-hover:text-brand-navy transition-all uppercase italic tracking-tighter">
          {partner.name}
        </span>
      )}
    </motion.div>
  );
};
