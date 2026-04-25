import React from 'react';

interface FooterProps {
  lang: 'es' | 'en';
  labels: {
    brandName: string;
    brandDesc: string;
    navTitle: string;
    navHome: string;
    navTours: string;
    navAbout: string;
    navContact: string;
    legalTitle: string;
    legalEthics: string;
    legalTerms: string;
    legalPrivacy: string;
    legalEsnna: string;
    legalCert: string;
    contactTitle: string;
    contactHq: string;
    copy: string;
  };
}

const Footer: React.FC<FooterProps> = ({ lang, labels }) => {
  const isEs = lang === 'es';
  const baseUrl = isEs ? '' : '/en';

  return (
    <footer className="bg-[#05070a] text-slate-400 pt-20 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <div className="flex items-center">
              <img src="/logo.png" alt="Franpisco Adventure" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed font-medium text-slate-500 max-w-xs">
              {labels.brandDesc}
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com/franpiscoadventure`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-10 relative inline-block">
              {labels.navTitle}
              <span className="absolute -bottom-3 left-0 w-6 h-[2px] bg-brand-blue"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: labels.navHome, href: `${baseUrl}/` },
                { label: labels.navTours, href: `${baseUrl}/tours` },
                { label: labels.navAbout, href: isEs ? '/nosotros' : '/en/about' },
                { label: labels.navContact, href: `${baseUrl}/contact` }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-10 relative inline-block">
              {labels.legalTitle}
              <span className="absolute -bottom-3 left-0 w-6 h-[2px] bg-brand-blue"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: labels.legalEthics, href: isEs ? '/nosotros#ethics' : '/en/about#ethics' },
                { label: labels.legalTerms, href: `${baseUrl}/terms` },
                { label: labels.legalPrivacy, href: `${baseUrl}/privacy` },
                { label: labels.legalEsnna, href: '#' },
                { label: labels.legalCert, href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-10 relative inline-block">
              {labels.contactTitle}
              <span className="absolute -bottom-3 left-0 w-6 h-[2px] bg-brand-blue"></span>
            </h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-sm bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p className="text-xs font-medium leading-relaxed text-slate-300">
                  <span className="block text-brand-blue text-[8px] font-black tracking-widest uppercase mb-1">{isEs ? 'DIRECCIÓN' : 'OFFICE ADDRESS'}</span>
                  {labels.contactHq.replace('📍 ', '')}
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-sm bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  <span className="block text-brand-blue text-[8px] font-black tracking-widest uppercase mb-1">{isEs ? 'COMUNICACIÓN' : 'COMMUNICATION'}</span>
                  <a href="mailto:info@franpiscoadventure.com" className="text-slate-300 hover:text-white transition-colors">info@franpiscoadventure.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-sm bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 2c-5.506 0-9.989 4.478-9.99 9.984a9.965 9.965 0 001.333 4.993L2 22l5.133-1.347A9.946 9.946 0 0012.031 22c5.506 0 9.989-4.478 9.99-9.984a9.964 9.964 0 00-9.99-10.016zm4.923 14.152c-.214.603-1.248 1.162-1.724 1.233-.465.07-1.06.094-1.708-.115-.438-.141-1.019-.342-1.713-.644-2.992-1.298-4.927-4.315-5.077-4.517-.15-.203-1.085-1.442-1.085-2.753 0-1.31.684-1.955.93-2.223.246-.268.535-.335.712-.335.178 0 .355.003.508.01.165.007.387-.062.607.469.214.517.734 1.79.797 1.92.063.13.105.281.02.45-.084.17-.127.276-.252.421-.125.145-.262.324-.374.433-.125.122-.256.255-.11.503.146.248.65 1.072 1.396 1.734.96.852 1.768 1.116 2.023 1.243.254.127.403.106.553-.066.15-.171.644-.75.815-1.006.17-.256.342-.214.577-.127.235.087 1.488.702 1.745.83.256.128.427.192.49.3.063.108.063.626-.15 1.229z"/>
                  </svg>
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  <span className="block text-brand-blue text-[8px] font-black tracking-widest uppercase mb-1">{isEs ? 'CENTRAL OPERATIVA 24/7' : '24/7 COMMAND CENTER'}</span>
                  <a href="https://wa.me/51987654321" className="text-green-500 font-bold hover:text-green-400 transition-colors">+51 987 654 321</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/[0.03] bg-black/50 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.1em] text-slate-600 uppercase">
            {labels.copy}
          </p>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px]"></div>
    </footer>
  );
};

export default Footer;
