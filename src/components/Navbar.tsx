import React, { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'es' | 'en';
  labels: any;
  esUrl: string;
  enUrl: string;
  currentPath: string;
  routeName: string;
  isTrekkingActive: boolean;
  isDestinationsActive: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  lang,
  labels,
  esUrl,
  enUrl,
  routeName,
  isTrekkingActive,
  isDestinationsActive,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDrop, setActiveMobileDrop] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveMobileDrop(null);
    }
  };

  const getBaseUrl = (path: string) => {
    if (path === 'about' && lang === 'es') return '/nosotros';
    return lang === 'es' ? `/${path}` : `/en/${path}`;
  };

  const isAboutActive = routeName.startsWith('about') || routeName.startsWith('nosotros');

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${
          isScrolled
            ? 'h-[70px] md:h-[80px] bg-brand-dark/95 backdrop-blur-md border-brand-red/50 shadow-xl'
            : 'h-[90px] md:h-[105px] bg-white border-brand-blue/20'
        }`}
      >
        <div className="h-full w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand/Logo */}
          <div className="flex-shrink-0 z-[1001]">
            <a href={lang === 'es' ? '/' : '/en'} className="block">
              <img
                src="/logo.png"
                alt="Franpisco Adventure"
                className={`transition-all duration-500 object-contain ${
                  isScrolled ? 'h-8 md:h-12' : 'h-10 md:h-16'
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation (Hidden on Mobile/Tablet) */}
          <nav className="hidden nav:flex items-center ml-auto mr-8 lg:mr-12 h-full">
            <ul className="flex items-center gap-5 lg:gap-7 h-full list-none m-0 p-0">
              {[
                { label: labels.home, href: lang === 'es' ? '/' : '/en', active: routeName === '' },
                { label: labels.about, href: getBaseUrl('about'), active: isAboutActive },
              ].map((link) => (
                <li key={link.label} className="h-full flex items-center">
                  <a
                    href={link.href}
                    className={`text-[0.7rem] lg:text-[0.78rem] font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                      link.active
                        ? isScrolled ? 'text-brand-red' : 'text-brand-blue'
                        : isScrolled ? 'text-brand-light hover:text-white' : 'text-brand-dark hover:text-brand-blue'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-brand-red' : 'bg-brand-blue'
                    }`}></span>
                  </a>
                </li>
              ))}

              {/* Trekking Dropdown */}
              <li className="relative group h-full flex items-center">
                <button
                  className={`flex items-center gap-1.5 text-[0.7rem] lg:text-[0.78rem] font-bold uppercase tracking-widest transition-all duration-300 py-2 ${
                    isTrekkingActive
                      ? isScrolled ? 'text-brand-red' : 'text-brand-blue'
                      : isScrolled ? 'text-brand-light hover:text-white' : 'text-brand-dark hover:text-brand-blue'
                  }`}
                >
                  {labels.trekking}
                  <svg className="transition-transform duration-300 group-hover:rotate-180" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className={`absolute top-[calc(100%-15px)] left-1/2 -translate-x-1/2 translate-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-400 min-w-[280px] p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[1100] border ${
                  isScrolled ? 'bg-brand-dark border-white/10' : 'bg-white border-slate-100'
                }`}>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { href: 'trekking/huayhuash', label: labels.huayhuash },
                      { href: 'trekking/blanca', label: labels.blanca },
                      { href: 'trekking/cusco', label: labels.cusco },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={getBaseUrl(item.href)}
                        className={`text-[0.75rem] px-5 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-between group/item ${
                          isScrolled 
                            ? 'text-white hover:bg-white/5 hover:text-brand-blue' 
                            : 'text-brand-dark hover:bg-slate-50 hover:text-brand-blue'
                        }`}
                      >
                        {item.label}
                        <svg className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="h-full flex items-center">
                <a
                  href={getBaseUrl('climbing')}
                  className={`text-[0.7rem] lg:text-[0.78rem] font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                    routeName.startsWith('climbing')
                      ? isScrolled ? 'text-brand-red' : 'text-brand-blue'
                      : isScrolled ? 'text-brand-light hover:text-white' : 'text-brand-dark hover:text-brand-blue'
                  }`}
                >
                  {labels.climbing}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-brand-red' : 'bg-brand-blue'
                  }`}></span>
                </a>
              </li>

              {/* Destinations Dropdown */}
              <li className="relative group h-full flex items-center">
                <button
                  className={`flex items-center gap-1.5 text-[0.7rem] lg:text-[0.78rem] font-bold uppercase tracking-widest transition-all duration-300 py-2 ${
                    isDestinationsActive
                      ? isScrolled ? 'text-brand-red' : 'text-brand-blue'
                      : isScrolled ? 'text-brand-light hover:text-white' : 'text-brand-dark hover:text-brand-blue'
                  }`}
                >
                  {labels.destinations}
                  <svg className="transition-transform duration-300 group-hover:rotate-180" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className={`absolute top-[calc(100%-15px)] left-1/2 -translate-x-1/2 translate-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-400 min-w-[280px] p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[1100] border ${
                  isScrolled ? 'bg-brand-dark border-white/10' : 'bg-white border-slate-100'
                }`}>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { href: 'peru', label: labels.peru },
                      { href: 'bolivia', label: labels.bolivia },
                      { href: 'ecuador', label: labels.ecuador },
                      { href: 'chile', label: labels.chile },
                      { href: 'argentina', label: labels.argentina },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={getBaseUrl(item.href)}
                        className={`text-[0.75rem] px-5 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-between group/item ${
                          isScrolled 
                            ? 'text-white hover:bg-white/5 hover:text-brand-blue' 
                            : 'text-brand-dark hover:bg-slate-50 hover:text-brand-blue'
                        }`}
                      >
                        {item.label}
                        <svg className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {[
                { label: labels.tours, href: getBaseUrl('tours'), active: routeName.startsWith('tours') },
                { label: labels.gallery, href: getBaseUrl('gallery'), active: routeName.startsWith('gallery') },
                { label: labels.contact, href: getBaseUrl('contact'), active: routeName.startsWith('contact') },
              ].map((link) => (
                <li key={link.label} className="h-full flex items-center">
                  <a
                    href={link.href}
                    className={`text-[0.7rem] lg:text-[0.78rem] font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                      link.active
                        ? isScrolled ? 'text-brand-red' : 'text-brand-blue'
                        : isScrolled ? 'text-brand-light hover:text-white' : 'text-brand-dark hover:text-brand-blue'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-brand-red' : 'bg-brand-blue'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions / Language & Burger */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Language Switcher - Desktop & Tablet */}
            <div className="hidden sm:flex items-center gap-3 font-black text-[0.7rem] lg:text-[0.75rem]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-blue opacity-80">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div className="flex items-center gap-2 lg:gap-2.5">
                <a href={esUrl} className={`transition-all duration-300 ${lang === 'es' ? 'text-brand-blue scale-110' : 'text-gray-400 hover:text-brand-red'}`}>ES</a>
                <span className={`w-[1px] h-3.5 ${isScrolled ? 'bg-white/20' : 'bg-gray-300'}`}></span>
                <a href={enUrl} className={`transition-all duration-300 ${lang === 'en' ? (isScrolled ? 'text-brand-red' : 'text-brand-blue scale-110') : 'text-gray-400 hover:text-brand-red'}`}>EN</a>
              </div>
            </div>
            
            {/* Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="nav:hidden flex flex-col gap-[6px] sm:gap-[7px] bg-none border-none cursor-pointer group p-2 -mr-2"
              aria-label="Menu"
            >
              <span className={`w-6 sm:w-8 h-[2.5px] sm:h-[3px] transition-all duration-300 group-hover:w-5 ${isScrolled ? 'bg-white' : 'bg-brand-dark'}`}></span>
              <span className={`w-6 sm:w-8 h-[2.5px] sm:h-[3px] transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-brand-dark'}`}></span>
              <span className={`w-6 sm:w-8 h-[2.5px] sm:h-[3px] transition-all duration-300 group-hover:w-5 ml-auto ${isScrolled ? 'bg-white' : 'bg-brand-dark'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Menu Overlay (Mobile) */}
      <div
        className={`fixed inset-0 z-[2000] bg-brand-dark/98 backdrop-blur-xl transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'
        }`}
      >
        <div className="h-full flex flex-col p-6 sm:p-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
            <button
              onClick={toggleMobileMenu}
              className="group flex items-center gap-3 text-white text-[0.65rem] sm:text-[0.7rem] font-black tracking-[0.3em] opacity-60 hover:opacity-100 transition-all"
            >
              CERRAR
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <span className="absolute w-full h-[2px] bg-white rotate-45 group-hover:rotate-[135deg] transition-transform duration-500"></span>
                <span className="absolute w-full h-[2px] bg-white -rotate-45 group-hover:rotate-[45deg] transition-transform duration-500"></span>
              </div>
            </button>
          </div>

          <nav className="flex flex-col gap-4 sm:gap-6 items-center w-full">
            <div className="flex flex-col items-center gap-1 group">
              <a href={lang === 'es' ? '/' : '/en'} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${routeName === '' ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.home}</a>
              {routeName === '' && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>

            <div className="flex flex-col items-center gap-1 group">
              <a href={getBaseUrl('about')} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${isAboutActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.about}</a>
              {isAboutActive && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>
            
            {/* Mobile Dropdown: Trekking */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setActiveMobileDrop(activeMobileDrop === 'trekking' ? null : 'trekking')}
                className={`flex items-center gap-2.5 text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${isTrekkingActive || activeMobileDrop === 'trekking' ? 'text-brand-blue' : 'text-white/50'}`}
              >
                {labels.trekking}
                <svg className={`transition-transform duration-300 ${activeMobileDrop === 'trekking' ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 flex flex-col items-center gap-3 ${activeMobileDrop === 'trekking' ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="w-4 h-[1px] bg-white/10 mb-1"></div>
                <a href={getBaseUrl('trekking/huayhuash')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.huayhuash}</a>
                <a href={getBaseUrl('trekking/blanca')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.blanca}</a>
                <a href={getBaseUrl('trekking/cusco')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.cusco}</a>
              </div>
            </div>

            {/* Mobile Dropdown: Destinations */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setActiveMobileDrop(activeMobileDrop === 'dest' ? null : 'dest')}
                className={`flex items-center gap-2.5 text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${isDestinationsActive || activeMobileDrop === 'dest' ? 'text-brand-blue' : 'text-white/50'}`}
              >
                {labels.destinations}
                <svg className={`transition-transform duration-300 ${activeMobileDrop === 'dest' ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 flex flex-col items-center gap-3 ${activeMobileDrop === 'dest' ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="w-4 h-[1px] bg-white/10 mb-1"></div>
                <a href={getBaseUrl('peru')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.peru}</a>
                <a href={getBaseUrl('bolivia')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.bolivia}</a>
                <a href={getBaseUrl('ecuador')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.ecuador}</a>
                <a href={getBaseUrl('chile')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.chile}</a>
                <a href={getBaseUrl('argentina')} className="text-[0.75rem] sm:text-base font-normal text-white/60 hover:text-white transition-colors">{labels.argentina}</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 group">
              <a href={getBaseUrl('climbing')} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${routeName.startsWith('climbing') ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.climbing}</a>
              {routeName.startsWith('climbing') && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>

            <div className="flex flex-col items-center gap-1 group">
              <a href={getBaseUrl('tours')} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${routeName.startsWith('tours') ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.tours}</a>
              {routeName.startsWith('tours') && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>

            <div className="flex flex-col items-center gap-1 group">
              <a href={getBaseUrl('gallery')} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${routeName.startsWith('gallery') ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.gallery}</a>
              {routeName.startsWith('gallery') && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>

            <div className="flex flex-col items-center gap-1 group">
              <a href={getBaseUrl('contact')} className={`text-[0.85rem] sm:text-[1.1rem] font-medium uppercase tracking-[0.3em] transition-all duration-300 ${routeName.startsWith('contact') ? 'text-white' : 'text-white/50 hover:text-white'}`}>{labels.contact}</a>
              {routeName.startsWith('contact') && <div className="w-6 h-[1.5px] bg-brand-red rounded-full shadow-[0_0_10px_rgba(216,2,2,0.5)]"></div>}
            </div>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-8 items-center text-center">
             <div className="flex gap-8">
               <a href="#" className="text-white/40 hover:text-brand-red transition-colors text-[0.7rem] font-bold tracking-[0.2em]">FACEBOOK</a>
               <a href="#" className="text-white/40 hover:text-brand-red transition-colors text-[0.7rem] font-bold tracking-[0.2em]">INSTAGRAM</a>
             </div>
             
             <div className="flex items-center gap-4 text-xs font-black">
                <a href={esUrl} className={`transition-all ${lang === 'es' ? 'text-brand-red scale-125' : 'text-white/40'}`}>ES</a>
                <span className="w-px h-3 bg-white/10"></span>
                <a href={enUrl} className={`transition-all ${lang === 'en' ? 'text-brand-red scale-125' : 'text-white/40'}`}>EN</a>
             </div>

             <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.4em] text-white/20 uppercase">Franpisco Adventure Elite Expeditions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
