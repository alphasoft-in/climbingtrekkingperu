import React from 'react';
import PageHero from './PageHero';

interface ContactHubProps {
  lang: 'es' | 'en';
}

const ContactHub: React.FC<ContactHubProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <div className="bg-white">
      {/* 1. Compact Hero */}
      <PageHero 
        titleTop={isEs ? 'HABLEMOS' : "LET'S TALK"}
        titleMain={isEs ? 'CONTACTO' : 'CONTACT'}
        backgroundImage="/expedicion.jpg"
        techData={[
          { label: "HQ", value: "HUARAZ" },
          { label: "AVAILABILITY", value: "24/7" }
        ]}
      />

      {/* 2. Professional Clean Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Left: Refined Info */}
            <div className="space-y-12">
              <div>
                <span className="text-brand-blue text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
                  {isEs ? 'INFORMACIÓN' : 'INFORMATION'}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
                  {isEs ? 'Estamos aquí para ayudarle' : 'We are here to help you'}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {isEs 
                    ? 'Nuestra oficina central en Huaraz está abierta para recibir a montañistas de todo el mundo. Contáctenos para organizar su próxima aventura en los Andes.'
                    : 'Our headquarters in Huaraz is open to welcome mountaineers from around the world. Contact us to organize your next adventure in the Andes.'
                  }
                </p>
              </div>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{isEs ? 'UBICACIÓN' : 'LOCATION'}</h4>
                    <p className="text-sm font-bold text-slate-800 leading-tight">
                      Jr. Trinitarias S/N, Pasaje Sarita Colonia 191 <br/> 2do Piso, Huaraz - Ancash.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{isEs ? 'EMAIL' : 'EMAIL'}</h4>
                    <a href="mailto:info@franpiscoadventure.com" className="text-sm font-bold text-brand-blue hover:underline">
                      info@franpiscoadventure.com
                    </a>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 2c-5.506 0-9.989 4.478-9.99 9.984a9.965 9.965 0 001.333 4.993L2 22l5.133-1.347A9.946 9.946 0 0012.031 22c5.506 0 9.989-4.478 9.99-9.984a9.964 9.964 0 00-9.99-10.016zm4.923 14.152c-.214.603-1.248 1.162-1.724 1.233-.465.07-1.06.094-1.708-.115-.438-.141-1.019-.342-1.713-.644-2.992-1.298-4.927-4.315-5.077-4.517-.15-.203-1.085-1.442-1.085-2.753 0-1.31.684-1.955.93-2.223.246-.268.535-.335.712-.335.178 0 .355.003.508.01.165.007.387-.062.607.469.214.517.734 1.79.797 1.92.063.13.105.281.02.45-.084.17-.127.276-.252.421-.125.145-.262.324-.374.433-.125.122-.256.255-.11.503.146.248.65 1.072 1.396 1.734.96.852 1.768 1.116 2.023 1.243.254.127.403.106.553-.066.15-.171.644-.75.815-1.006.17-.256.342-.214.577-.127.235.087 1.488.702 1.745.83.256.128.427.192.49.3.063.108.063.626-.15 1.229z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{isEs ? 'WHATSAPP' : 'WHATSAPP'}</h4>
                    <a href="https://wa.me/51962421830" className="text-sm font-bold text-slate-800">
                      +51 962 421 830
                    </a>
                  </div>
                </div>
              </div>

              {/* Minimalist Map */}
              <div className="h-64 rounded-xl overflow-hidden border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3739.9948362943383!2d-77.53226062497484!3d-9.536548890546435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzInMTEuNiJTIDc3wrAzMSc0Ni45Ilc!5e1!3m2!1ses!2spe!4v1776890394707!5m2!1ses!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right: Clean Compact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{isEs ? 'Envíenos un mensaje' : 'Send us a message'}</h3>
                <p className="text-xs text-slate-500">{isEs ? 'Responderemos en menos de 24 horas.' : 'We will respond in less than 24 hours.'}</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{isEs ? 'NOMBRE' : 'NAME'}</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{isEs ? 'EMAIL' : 'EMAIL'}</label>
                    <input 
                      type="email" 
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{isEs ? 'ASUNTO' : 'SUBJECT'}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all"
                    placeholder={isEs ? '¿En qué podemos ayudarle?' : 'How can we help you?'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{isEs ? 'MENSAJE' : 'MESSAGE'}</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-4 text-sm focus:border-brand-blue outline-none transition-all resize-none"
                    placeholder={isEs ? 'Escriba aquí los detalles de su consulta...' : 'Type your query details here...'}
                  ></textarea>
                </div>

                <button className="w-full bg-brand-dark hover:bg-brand-blue text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-slate-200">
                  {isEs ? 'ENVIAR MENSAJE' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHub;
