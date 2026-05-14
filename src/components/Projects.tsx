import { ExternalLink, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  { title: "ЭХО: нейроинтерфейс с AI для управления бионическим протезом", link: "https://pt.2035.university/project/eho_2025_10_01_19_40_49" },
  { title: "Ппарк", link: "https://pt.2035.university/project/ppark" },
  { title: "Автоматизированный комплекс аудита и верификации доверенного ПО", link: "https://pt.2035.university/project/avtomatizirovannyj-kompleks-audita-i-verifikacii-doverennogo-po" },
  { title: "Нейронная сеть для определения параметров синхронного двигателя", link: "https://pt.2035.university/project/sozdanie-servomasinki-s-primeneniem-otecestvennyh-komlektuusih" },
  { title: "РН «Гермес»", link: "https://pt.2035.university/project/rn-germes" },
  { title: "Ceres", link: "https://pt.2035.university/project/ceres" },
  { title: "AutoCoach by SVZ - Персональный ИИ-тренер для вождения", link: "https://pt.2035.university/project/svz" },
  { title: "БПЛА «Ворон»", link: "https://pt.2035.university/project/bpla-voron" },
  { title: "СВЯТОГОР: Российский беспилотный комплекс нового поколения", link: "https://pt.2035.university/project/svatogor-rossijskij-bespilotnyj-kompleks-novogo-pokolenia" },
  { title: "Батиметрический лидар", link: "https://pt.2035.university/project/lazernyj-snur" }
];

export const Projects = () => {
  return (
    <section className="section-padding bg-brand-sec">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4 tracking-tight uppercase">Лучшие проекты</h2>
          <p className="text-slate-500 max-w-xl text-sm leading-relaxed font-medium">Проекты акселератора «ВОЕНМЕХ. СТАРТ 4.0», получившие признание экспертов.</p>
        </motion.div>

        <div className="flex flex-row overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar">
          {projects.map((project, idx) => (
            <motion.a 
              key={idx} 
              href={project.link} 
              target="_blank" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.04, ease: "easeOut" }}
              className="bg-white p-6 rounded-sm border border-slate-200 hover:border-brand-red hover:shadow-lg transition-all flex flex-col justify-between group h-full w-[240px] sm:w-auto snap-center sm:snap-align-none shrink-0"
            >
              <div>
                <div className="w-10 h-10 bg-slate-50 rounded-sm mb-6 flex items-center justify-center text-slate-300 border border-slate-100 group-hover:bg-brand-red/5 group-hover:text-brand-red transition-all">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-display font-bold leading-tight h-16 line-clamp-3 mb-6 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-red transition-colors">
                Подробнее <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
