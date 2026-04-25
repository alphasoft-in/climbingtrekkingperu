import React from 'react';

interface TeamMember {
  name: string;
  badge: string;
  rank: string;
  avatar: string;
}

interface TeamSectionProps {
  lang: 'es' | 'en';
}

const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const content = {
    title: isEs ? "EQUIPO DE COMANDO" : "COMMAND TEAM",
    subtitle: isEs ? "MANDO TÉCNICO Y OPERATIVO" : "TECHNICAL AND OPERATIONAL COMMAND",
    members: [
      {
        name: "Francisco Mayhuay Colonia",
        badge: isEs ? "LIDERAZGO ESTRATÉGICO" : "STRATEGIC LEAD",
        rank: isEs ? "Gerente General & Fundador" : "General Manager & Founder",
        avatar: "/perfiles/francisco.jpeg"
      },
      {
        name: "Milagros Moreno Correa",
        badge: isEs ? "CONTROL DE MISIÓN" : "MISSION CONTROL",
        rank: isEs ? "Jefa de Logística de Campo" : "Head of Field Logistics",
        avatar: "/perfiles/milagros.jpeg"
      },
      {
        name: "Nilo Aramburu Tafur",
        badge: isEs ? "CUMBRE ÉLITE" : "ELITE SUMMIT",
        rank: isEs ? "Guía de Montaña IVBV – UIAGM" : "Mountain Guide IVBV – UIAGM",
        avatar: "/perfiles/nilo.jpeg"
      },
      {
        name: "Hosterling Guillermo Julca",
        badge: isEs ? "PRIMERA LÍNEA" : "FRONT LINE",
        rank: isEs ? "Aspirante a Guía de Montaña" : "Aspirant Mountain Guide",
        avatar: "/perfiles/hosterling.jpeg"
      }
    ]
  };

  return (
    <section className="bg-[#0b0d10] pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-[0.25em] uppercase mb-4">
            {content.title}
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            {content.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {content.members.map((member, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-brand-blue/30">

              {/* Badge */}
              <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-10 group-hover:text-brand-blue transition-colors duration-500">
                {member.badge}
              </span>

              {/* Avatar with Glow Effect */}
              <div className="relative w-32 h-32 mb-10">
                <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-xl group-hover:bg-brand-blue/40 transition-all duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-blue/50 transition-all duration-500">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                </div>
              </div>

              {/* Info */}
              <h4 className="text-white text-lg md:text-xl font-black tracking-wide mb-4 leading-tight">
                {member.name}
              </h4>

              <div className="w-6 h-[2px] bg-brand-red/50 mb-4 group-hover:w-10 group-hover:bg-brand-red transition-all duration-500"></div>

              <span className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase group-hover:text-white/60 transition-colors duration-500">
                {member.rank}
              </span>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-brand-blue/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
