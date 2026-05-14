import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FormSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="section-padding bg-brand-sec">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100"
        >
          <div className="bg-brand-navy p-8 md:p-12 lg:w-1/3 text-white relative border-r-2 border-brand-red">
            <h2 className="text-white text-3xl mb-6 font-display font-bold uppercase">Компаниям и инвесторам</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              Вкладка по сбору запроса от индустрии на проработку их задач. 
              Оставьте запрос, и наши эксперты помогут найти оптимальное технологическое решение.
            </p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-brand-red shrink-0">
                  <span className="font-mono font-bold">@</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-mono tracking-widest opacity-50 font-bold mb-1">Email</p>
                  <a href="mailto:voevodina_de@voenmeh.ru" className="text-sm font-mono truncate block hover:text-brand-red transition-colors">voevodina_de@voenmeh.ru</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-brand-red font-bold shrink-0">
                  <span className="font-mono">ph</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest opacity-50 font-bold mb-1">Телефон</p>
                  <a href="tel:+79819530905" className="text-sm font-mono block hover:text-brand-red transition-colors">+7 (981) 953-09-05</a>
                </div>
              </div>
            </div>

            <img 
               src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=2070&auto=format&fit=crop" 
               className="absolute top-0 right-0 w-full h-full object-cover opacity-10 mix-blend-overlay hidden lg:block"
               alt="Background"
            />
          </div>

          <div className="p-8 md:p-12 lg:w-2/3">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-2xl mb-2 text-brand-navy">Заявка отправлена!</h3>
                <p className="text-slate-500 max-w-sm">Ваш запрос принят на проработку. Куратор свяжется с вами в ближайшее время.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-red font-bold uppercase text-xs tracking-widest border-b-2 border-brand-red pb-1"
                >
                  Отправить еще
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Представитель</label>
                  <input required name="name" className="w-full bg-brand-sec border border-slate-200 p-4 rounded text-sm focus:outline-none focus:border-brand-red transition-colors font-sans" placeholder="ФИО" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Компания</label>
                  <input required name="company" className="w-full bg-brand-sec border border-slate-200 p-4 rounded text-sm focus:outline-none focus:border-brand-red transition-colors font-sans" placeholder="Название организации" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Контакты для связи</label>
                  <input required name="contacts" className="w-full bg-brand-sec border border-slate-200 p-4 rounded text-sm focus:outline-none focus:border-brand-red transition-colors font-sans" placeholder="Email или Телефон" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Описание задачи</label>
                  <textarea required name="task" rows={4} className="w-full bg-brand-sec border border-slate-200 p-4 rounded text-sm focus:outline-none focus:border-brand-red transition-colors resize-none font-sans" placeholder="Кратко опишите ваш запрос..."></textarea>
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-brand-red text-white py-4 md:py-5 rounded-sm font-mono font-bold uppercase tracking-widest hover:bg-brand-navy transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-xs md:text-sm shadow-lg leading-none"
                  >
                    {status === 'loading' ? 'ОТПРАВКА...' : '[ ОТПРАВИТЬ ЗАЯВКУ ]'}
                    <Send className="w-4 h-4" />
                  </button>
                  {status === 'error' && <p className="text-red-500 text-xs mt-3 text-center">Ошибка при отправке. Пожалуйста, проверьте данные.</p>}
                  <p className="text-[9px] text-slate-400 mt-5 text-center uppercase tracking-widest font-medium opacity-60">
                    Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
