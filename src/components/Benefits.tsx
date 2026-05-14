import { motion } from 'motion/react';

const benefits = [
  { text: "Получить удостоверение ДПО РПД", highlighted: false },
  { text: "10 топ-проектов получат дипломы для подачи на повышенную стипендию", highlighted: true },
  { text: "Зачет по дисциплинам (Управление проектами и техпред, проектная деятельность и инновации)", highlighted: true },
  { text: "Возможность попасть с проектами в лабораторию вуза и получить дальнейшее развитие", highlighted: false },
  { text: "Возможность подать заявку на конкурс-грант (СтудСтарт, УМНИК и другие конкурсы)", highlighted: false },
  { text: "Практические тренинги и воркшопы", highlighted: false },
  { text: "Работа с индустриальным партнером, экспертами, трекерами и наставниками", highlighted: false },
  { text: "Возможность защитить диплом как стартап («Стартап как диплом»)", highlighted: false }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-brand-sec overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/3 lg:sticky lg:top-32"
          >
            <p className="text-brand-red font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Ценности программы</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 font-display font-black text-brand-navy uppercase">Преимущества участия</h2>
            <div className="h-1.5 w-16 bg-brand-red mb-8"></div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed hidden lg:block">
              Участие в акселератора дает не только знания, но и реальные бонусы для обучения и карьеры.
            </p>
          </motion.div>
          
          <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.04, ease: "easeOut" }}
                className={`p-6 md:p-8 rounded-sm border transition-all group flex flex-col justify-between min-h-[160px] md:min-h-[180px] shadow-sm
                  ${benefit.highlighted 
                    ? 'bg-white border-brand-red ring-1 ring-brand-red/10' 
                    : 'bg-white border-slate-200'
                  } hover:-translate-y-1 hover:shadow-md cursor-default`}
              >
                <div className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6 transition-colors flex items-center gap-2
                  ${benefit.highlighted ? 'text-brand-red' : 'text-slate-400 group-hover:text-brand-red'}
                `}>
                  <span className="opacity-50">#</span>
                  {String(idx + 1).padStart(2, '0')}
                  <span className="text-[8px] opacity-30 ml-auto uppercase tracking-widest">Преимущество</span>
                </div>
                <p className={`text-sm md:text-base leading-snug font-display font-bold ${benefit.highlighted ? 'text-brand-red' : 'text-brand-navy'}`}>
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
