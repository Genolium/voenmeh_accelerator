import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'О проекте', href: '#about' },
    { title: 'Преимущества', href: '#benefits' },
    { title: 'Таймлайн', href: '#timeline' },
    { title: 'Эксперты', href: '#experts' },
    { title: 'Партнеры', href: '#partners' },
    { title: 'Индустрии', href: '#investors' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-white/5 text-white shadow-lg backdrop-blur-md bg-brand-navy/95">
      {/* Top small bar */}
      <div className="hidden lg:flex bg-brand-light-navy/30 px-6 py-2 border-b border-white/5 justify-between items-center text-[10px] uppercase tracking-[0.2em] font-mono opacity-80">
        <div className="flex gap-6">
          <span>БГТУ «ВОЕНМЕХ»</span>
          <span>АКСЕЛЕРАТОР 4.0</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:voevodina_de@voenmeh.ru" className="hover:text-brand-red transition-colors">voevodina_de@voenmeh.ru</a>
          <a href="tel:+79819530905" className="hover:text-brand-red transition-colors">+7 (981) 953-09-05</a>
        </div>
      </div>

      <div className="container-wide h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col border-l-2 border-brand-red pl-3">
            <span className="font-display font-black text-xl md:text-2xl leading-none tracking-tight">ВОЕНМЕХ</span>
            <span className="text-[10px] font-mono font-semibold opacity-70 mt-1 flex tracking-[0.2em] relative -top-1 text-brand-red">СТАРТ 4.0</span>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-4 xl:gap-8 lg:text-[9px] xl:text-[11px] font-mono font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-red hover:-translate-y-0.5 transition-all">
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://leader-id.ru/events/570744" 
            target="_blank" 
            className="hidden sm:block bg-brand-red lg:px-3 xl:px-5 py-2.5 rounded-sm lg:text-[9px] xl:text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-md whitespace-nowrap"
          >
            [ Подать заявку ]
          </a>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-white/10 px-6 py-10 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:text-brand-red transition-colors"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="https://leader-id.ru/events/570744" 
            className="bg-brand-red text-center py-4 rounded-md font-bold uppercase tracking-widest text-sm"
          >
            Подать заявку
          </a>
          <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
            <a href="https://vk.com/rocket_accelerator" target="_blank" className="text-white/60 hover:text-white transition-colors">VK</a>
            <a href="https://t.me/s/start_voenmeh" target="_blank" className="text-white/60 hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      )}
    </nav>
  );
};
