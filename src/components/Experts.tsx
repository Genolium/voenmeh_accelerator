import { motion } from "motion/react";
import { User } from "lucide-react";

const experts = [
  { name: "Чернигов Леонид Юрьевич", role: "Эксперт программы" },
  { name: "Мокеев Алексей Дмитриевич", role: "Эксперт программы" },
  { name: "Мусин Альберт Рустамович", role: "Эксперт программы" },
  { name: "Старковский Даниил Вячеславович", role: "Эксперт программы" },
  { name: "Говорин Александр Владимирович", role: "Куратор" },
  { name: "Олехвер Алексей Иванович", role: "Куратор" },
  { name: "Левихин Артем Алексеевич", role: "Куратор" }
];

export const Experts = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4 tracking-tight uppercase">Эксперты и Кураторы</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
            В программе участвуют опытные эксперты, трекеры и наставники ведущих университетов, 
            отраслевых компаний, венчурных фондов. Среди них — руководители образовательных программ, 
            опытные наставники стартапов и действующие предприниматели.
          </p>
        </motion.div>

        <div className="flex flex-row overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
          {experts.map((expert, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-brand-sec/40 p-6 md:p-8 rounded-sm flex flex-col justify-center items-start border-l-2 border-brand-red h-full w-[220px] sm:w-auto snap-center sm:snap-align-none shrink-0 group hover:bg-brand-sec/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white mb-6 flex items-center justify-center text-slate-300 border border-slate-100 group-hover:text-brand-red transition-colors">
                <User className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold mb-3 leading-tight">{expert.name}</h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-brand-red/10 text-brand-red py-1 px-2 rounded-sm font-bold">{expert.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
