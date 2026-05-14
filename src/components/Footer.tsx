export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 overflow-hidden border-t-2 border-brand-red">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12 md:gap-12 mb-20">
          <div>
            <div className="mb-8">
              <h4 className="text-white text-2xl mb-2 font-display font-black tracking-widest">ВОЕНМЕХ</h4>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-red font-bold">БГТУ ИМ. Д.Ф. УСТИНОВА</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Лучший технический вуз страны по подготовке кадров оборонной промышленности. 
              Инновации, вдохновленные космосом.
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com/rocket_accelerator" target="_blank" className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all cursor-pointer">
                <span className="text-xs font-mono font-bold">VK</span>
              </a>
              <a href="https://t.me/s/start_voenmeh" target="_blank" className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all cursor-pointer">
                <span className="text-xs font-mono font-bold">TG</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8 text-white/30 border-b border-white/10 pb-2">Навигация</h5>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li><a href="#about" className="hover:text-brand-red transition-colors">О программе</a></li>
              <li><a href="#benefits" className="hover:text-brand-red transition-colors">Преимущества</a></li>
              <li><a href="#experts" className="hover:text-brand-red transition-colors">Эксперты</a></li>
              <li><a href="#projects" className="hover:text-brand-red transition-colors">Витрина проектов</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8 text-white/30 border-b border-white/10 pb-2">Полезное</h5>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li><a href="https://leader-id.ru/events/570744" target="_blank" className="hover:text-brand-red transition-colors">Leader-ID</a></li>
              <li><a href="https://voenmeh.ru/university/documents" target="_blank" className="hover:text-brand-red transition-colors">Политика приватности</a></li>
              <li><a href="https://voenmeh.ru/university/safety/antiterrorism" target="_blank" className="hover:text-brand-red transition-colors">Антитеррор</a></li>
              <li><a href="https://voenmeh.ru/?special=on" target="_blank" className="hover:text-brand-red transition-colors">Версия для слабовидящих</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8 text-white/30 border-b border-white/10 pb-2">Контакты</h5>
            <address className="not-italic space-y-6 text-sm text-white/50">
              <div>
                <p className="text-brand-red text-[10px] font-mono uppercase font-bold mb-1 tracking-widest">Главный корпус</p>
                <p className="font-mono text-xs">190005, Санкт-Петербург<br/>ул. 1-я Красноармейская, д.1</p>
              </div>
              <div>
                <p className="text-brand-red text-[10px] font-mono uppercase font-bold mb-1 tracking-widest">Электронная почта</p>
                <a href="mailto:voevodina_de@voenmeh.ru" className="font-mono text-xs hover:text-brand-red transition-colors">voevodina_de@voenmeh.ru</a>
              </div>
              <div>
                <p className="text-brand-red text-[10px] font-mono uppercase font-bold mb-1 tracking-widest">Телефон</p>
                <a href="tel:+79819530905" className="font-mono text-xs hover:text-brand-red transition-colors">+7 (981) 953-09-05</a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">
          <p>© 2024 — 2026 БГТУ «ВОЕНМЕХ» ИМ Д.Ф.УСТИНОВА</p>
          <div className="flex gap-6">
             <a href="https://voenmeh.ru/university/documents" target="_blank" className="hover:text-white/50">Согласие на ОПД</a>
             <a href="https://vk.com/cct_voenmeh" target="_blank" className="hover:text-white/50">Разработка: ЦЦТ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
