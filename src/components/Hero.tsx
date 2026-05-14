import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#0a0510]">
      {/* Background with pseudo-overlay like the screenshot */}
      <div className="absolute inset-0 z-0 text-white">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          alt="Space Technology" 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0510] via-brand-navy/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
      </div>

      <div className="container-wide relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-brand-red"></div>
              <span className="text-brand-red font-mono font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                БГТУ «ВОЕНМЕХ» Акселератор 4.0
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase">
              Инженерия <br />
              <span className="text-brand-red">Будущего</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 md:mb-16 max-w-2xl font-light">
              Создавай инновационные технологические проекты вместе с лучшими экспертами 
              и наставниками индустрии. Твой путь от идеи до реального стартапа начинается здесь.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 md:mb-24">
              <a href="https://leader-id.ru/events/570744" target="_blank" className="bg-brand-red text-white py-5 px-8 md:px-12 rounded-sm font-mono font-bold uppercase tracking-widest text-[11px] md:text-xs hover:bg-white hover:text-brand-navy transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto group">
                [ Подать заявку ]
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border border-white/20 text-white/80 py-5 px-8 md:px-12 rounded-sm font-mono font-bold uppercase tracking-widest text-[11px] md:text-xs hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                Узнать больше
                <span className="text-lg ml-1">→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 sm:gap-12 md:gap-20 border-t border-white/10 pt-12">
              <div>
                <span className="block text-3xl md:text-5xl font-display font-black text-white mb-2 uppercase">15 СЕНТЯБРЯ</span>
                <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-brand-red font-bold">Срок подачи заявок</span>
              </div>
              <div>
                <span className="block text-3xl md:text-5xl font-display font-black text-white mb-2 uppercase">10+</span>
                <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-brand-red font-bold">Лучших стартапов</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
