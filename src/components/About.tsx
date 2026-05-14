import { Users, Lightbulb, TrendingUp, ArrowRight, FileText, UserPlus, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "1 Команда",
    description: "Найди единомышленников или войди в команду для реализации технологических идей будущего."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "2 Идея",
    description: "Преврати свою инженерную или бизнес-идею в успешный инновационный проект с помощью экспертов."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "3 Инвестиции",
    description: "Получи всестороннюю поддержку для роста своего стартапа и доступ к венчурным фондам."
  }
];

export const About = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6 tracking-tight">О ПРОЕКТЕ СТАРТ 4.0</h2>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-10">
            Акселерационная программа для студентов, аспирантов, молодых исследователей, 
            которые хотят реализовать свой проект в сфере технологий будущего и получить поддержку его развития.
          </p>
          <div className="h-1 w-16 bg-brand-red mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 lg:mb-32">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="voenmeh-card p-8 md:p-10 flex flex-col items-start relative overflow-hidden group min-h-[300px]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-8xl -mt-6 -mr-4 text-brand-navy group-hover:text-brand-red group-hover:opacity-20 transition-all">
                {idx + 1}
              </div>
              <div className="mb-8 p-3 rounded bg-white text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm border border-slate-100 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl mb-4 font-display font-bold tracking-tight uppercase relative z-10">{step.title.replace(/^\d+ /, '')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border border-slate-200 p-8 rounded-sm hover:border-brand-red transition-all group hover:-translate-y-1 bg-white"
          >
             <div className="w-12 h-12 bg-slate-50 text-brand-red flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors border border-slate-100">
               <FileText className="w-6 h-6" />
             </div>
             <h4 className="font-display font-bold text-xl mb-4 text-brand-navy uppercase">Подай заявку</h4>
             <p className="text-sm text-slate-500 mb-6">Просто регистрируйся по ссылке для участия в проекте.</p>
             <a href="https://leader-id.ru/events/570744" target="_blank" className="text-brand-red font-mono font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Leader-ID <ArrowRight className="w-4 h-4" />
             </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-slate-200 p-8 rounded-sm hover:border-brand-red transition-all group hover:-translate-y-1 bg-white"
          >
             <div className="w-12 h-12 bg-slate-50 text-brand-red flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors border border-slate-100">
               <UserPlus className="w-6 h-6" />
             </div>
             <h4 className="font-display font-bold text-xl mb-4 text-brand-navy uppercase">Регистрируйся</h4>
             <p className="text-sm text-slate-500 mb-6">Для участия в первом мероприятии переходи на Leader-id.ru</p>
             <a href="https://leader-id.ru/" target="_blank" className="text-brand-red font-mono font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Leader-id <ArrowRight className="w-4 h-4" />
             </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-2 border-brand-navy p-8 rounded-sm bg-brand-navy text-white hover:shadow-xl transition-all group hover:-translate-y-1"
          >
             <div className="w-12 h-12 bg-white/10 text-white flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red transition-colors">
               <HelpCircle className="w-6 h-6" />
             </div>
             <h4 className="font-display font-bold text-xl mb-4 text-white uppercase">Задать вопрос</h4>
             <p className="text-sm text-white/60 mb-6">Ищете ответы? Обращайтесь к нам без колебаний — наши кураторы помогут.</p>
             <a href="#investors" className="text-brand-red font-mono font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Связаться <ArrowRight className="w-4 h-4" />
             </a>
          </motion.div>
        </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-brand-navy p-8 md:p-16 rounded-sm text-white relative overflow-hidden border-l-4 border-brand-red"
          >
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h3 className="text-white text-3xl md:text-4xl mb-8 font-display font-bold">Условия участия</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-white text-lg mb-2 font-display font-bold">Кто может участвовать</h4>
                    <p className="text-white/60 text-sm">Студенты всех курсов и направлений, аспиранты, молодые ученые, преподаватели университета.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-white text-lg mb-2 font-display font-bold">Критерии</h4>
                    <p className="text-white/60 text-sm">Наличие идеи для поиска единомышленников или желание присоединиться к существующей команде.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-8 lg:mt-24">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-white text-lg mb-2 font-display font-bold">Формат</h4>
                    <p className="text-white/60 text-sm">Работа над проектом в команде, практическое обучение, индивидуальный трекинг, экспертные мастер-классы.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center shrink-0 font-bold text-sm">4</div>
                  <div>
                    <h4 className="text-white text-lg mb-2 font-display font-bold">Сроки</h4>
                    <p className="text-white/60 text-sm font-mono">Срок подачи заявок до 15 сентября.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
