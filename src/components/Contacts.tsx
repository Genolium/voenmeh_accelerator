import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Contacts = () => {
  return (
    <section id="contacts" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <p className="text-brand-red font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Остались вопросы?</p>
            <h2 className="text-3xl md:text-5xl leading-tight mb-6 font-display font-black text-brand-navy">Контакты</h2>
            <div className="h-1.5 w-16 bg-brand-red mb-8"></div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Ищете ответы? Обращайтесь к нам без колебаний! Ждем ваших звонков и сообщений по нижеперечисленным контактным данным для проведения консультации.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand-red shrink-0 border border-slate-100">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-slate-400 mb-1">Ответственный</p>
                  <p className="text-brand-navy font-bold text-lg font-display">Воеводина Дарья Евгеньевна</p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand-red shrink-0 border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-slate-400 mb-1">Контактный телефон</p>
                  <a href="tel:+79819530905" className="text-brand-navy font-bold text-lg font-mono hover:text-brand-red transition-colors block">
                    +7 (981) 953-09-05
                  </a>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand-red shrink-0 border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-slate-400 mb-1">Электронная почта</p>
                  <a href="mailto:voevodina_de@voenmeh.ru" className="text-brand-navy font-bold text-lg font-mono hover:text-brand-red transition-colors block">
                    voevodina_de@voenmeh.ru
                  </a>
                  <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-widest">постоянная почта акселератора</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://leader-id.ru/events/570744" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-red text-white py-4 md:py-5 px-8 md:px-12 rounded-sm font-mono font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-navy transition-all shadow-xl inline-flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              [ Подать заявку ]
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 rounded-sm overflow-hidden relative min-h-[300px] md:min-h-[400px] border border-slate-100 shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
              alt="Контакты" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
