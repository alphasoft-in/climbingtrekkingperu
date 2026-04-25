import React, { useState } from 'react';

interface ItineraryBookingProps {
  tourName: string;
  lang?: 'es' | 'en';
  whatsappNumber?: string;
  statusText?: string;
}

const ItineraryBooking: React.FC<ItineraryBookingProps> = ({ 
  tourName, 
  lang = 'es',
  whatsappNumber = "51962421830",
  statusText
}) => {
  const [formData, setFormData] = useState({
    date: '',
    name: ''
  });

  const translations = {
    es: {
      status: "DISPONIBILIDAD ABIERTA",
      titlePrefix: "Inicia tu",
      titleAccent: "Expedición",
      description: "Solicita el paquete técnico completo de la ruta y asegura tu cupo para la temporada.",
      labelDate: "FECHA APROXIMADA",
      labelName: "NOMBRES Y APELLIDOS",
      placeholderName: "Nombre completo",
      button: "RESERVAR CUPO",
      footer: "Respuesta inmediata vía WhatsApp",
      whatsappMsg: "Hola Franpisco Adventure! Me gustaría reservar un cupo para la expedición:"
    },
    en: {
      status: "OPEN AVAILABILITY",
      titlePrefix: "Start your",
      titleAccent: "Expedition",
      description: "Request the complete technical package of the route and secure your spot for the season.",
      labelDate: "APPROXIMATE DATE",
      labelName: "FULL NAME",
      placeholderName: "Your name",
      button: "BOOK YOUR SPOT",
      footer: "Immediate response via WhatsApp",
      whatsappMsg: "Hi Franpisco Adventure! I'd like to book a spot for the expedition:"
    }
  };

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `${t.whatsappMsg} ${tourName}. Mis datos son:\n\n- Nombre: ${formData.name}\n- Fecha: ${formData.date}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-900 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
      
      <div className="relative z-10">
        <span className="text-[10px] font-black tracking-[0.3em] text-brand-blue uppercase mb-3 block">
          {statusText || t.status}
        </span>
        <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tight leading-none">
          {t.titlePrefix} <span className="text-brand-blue">{t.titleAccent}</span>
        </h3>
        <p className="text-[11px] md:text-xs text-white/50 mb-10 leading-relaxed max-w-[280px]">
          {t.description}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{t.labelDate}</label>
            <div className="relative">
              <style>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                  filter: invert(1);
                  cursor: pointer;
                }
              `}</style>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm focus:border-brand-blue focus:bg-white/10 outline-none transition-all text-white appearance-none" 
                required 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{t.labelName}</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm focus:border-brand-blue focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20" 
              placeholder={t.placeholderName}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black text-[10px] py-5 px-6 uppercase tracking-[0.2em] transition-all mt-4 flex items-center justify-center gap-4 shadow-[0_10px_20px_rgba(0,144,204,0.3)] hover:shadow-[0_15px_30px_rgba(0,144,204,0.4)] active:scale-95"
          >
            {t.button}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="text-[9px] text-center text-white/20 uppercase tracking-widest mt-8">
          {t.footer}
        </p>
      </div>
    </div>
  );
};

export default ItineraryBooking;
