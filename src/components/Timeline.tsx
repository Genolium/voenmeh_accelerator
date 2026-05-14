import { motion } from 'motion/react';

const events = [
  {
    step: "01",
    date: "Начало работы",
    title: "15 сентября",
    desc: "Старт программы. Генерация идей и формирование команд для работы."
  },
  {
    step: "02",
    date: "Реализация",
    title: "15 сентября – 26 октября",
    desc: "Этап 1: генерация идей проектов, образовательные мероприятия, встречи с наставниками и трекерами."
  },
  {
    step: "03",
    date: "Развитие проектов",
    title: "27 октября – 15 декабря",
    desc: "Этап 2: развитие проектов, работа над MVP (Minimum Viable Product), маркетинг, финансы, встречи с экспертами."
  },
  {
    step: "04",
    date: "Демо-день",
    title: "15 декабря",
    desc: "Защита лучших проектов перед экспертами и инвесторами."
  }
];

export const Timeline = () => {
  return (
    <section className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-display font-black text-brand-navy">ЭТАПЫ АКСЕЛЕРАТОРА</h2>
          <div className="h-2 w-24 bg-brand-red"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {events.map((event, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-sm hover:border-brand-red hover:shadow-xl transition-all h-full relative group overflow-hidden"
            >
              <div className="text-6xl md:text-8xl font-display font-black text-slate-50 absolute -right-2 -bottom-4 md:-right-4 md:-bottom-6 transition-colors duration-500 group-hover:text-brand-red/5">
                {event.step}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-[2px] bg-brand-red"></div>
                  <span className="text-brand-red font-mono font-bold text-[10px] uppercase tracking-widest">{event.date}</span>
                </div>
                <h3 className="text-lg mb-4 font-display font-bold leading-tight uppercase text-brand-navy group-hover:text-brand-red transition-colors">{event.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
