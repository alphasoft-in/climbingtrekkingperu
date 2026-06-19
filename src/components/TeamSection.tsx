import React from 'react';

interface TeamMember {
  name: string;
  badge: string;
  rank: string;
  avatar: string;
}

interface TeamSectionProps {
  data: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
}

const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
  return (
    <section className="bg-[#0b0d10] pt-16 md:pt-24 pb-20 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-red/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-[0.25em] uppercase mb-6">
            {data.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-8 md:w-12 bg-white/20"></span>
            <p className="text-brand-blue text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
              {data.subtitle}
            </p>
            <span className="h-[1px] w-8 md:w-12 bg-white/20"></span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {data.members.map((member, idx) => (
            <div key={idx} className="group relative bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 p-8 md:p-10 flex flex-col items-center text-center transition-all duration-700 hover:border-brand-blue/40 rounded-xl overflow-hidden shadow-2xl">
              
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

              {/* Badge */}
              <div className="relative z-10 mb-10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black tracking-[0.2em] text-white/50 uppercase group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all duration-500">
                  {member.badge}
                </span>
              </div>

              {/* Avatar with Tech Glow */}
              <div className="relative w-36 h-36 mb-10 z-10">
                <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-2xl group-hover:bg-brand-blue/40 transition-all duration-700"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-brand-blue/60 transition-all duration-700 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                  </div>
                </div>
                {/* Tech Ring Decorative */}
                <div className="absolute -inset-2 border border-brand-blue/0 group-hover:border-brand-blue/20 rounded-full transition-all duration-1000 group-hover:rotate-180"></div>
              </div>

              {/* Info */}
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mb-2 leading-tight group-hover:text-brand-blue transition-colors duration-500">
                  {member.name}
                </h3>

                <div className="w-8 h-[2px] bg-brand-red mx-auto mb-6 group-hover:w-16 transition-all duration-500"></div>

                <div className="space-y-1">
                  <span className="block text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase group-hover:text-white/80 transition-colors duration-500">
                    {member.rank}
                  </span>
                </div>
              </div>

              {/* Technical Corners */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-brand-blue/40 transition-all duration-700 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/0 group-hover:border-brand-red/40 transition-all duration-700 rounded-bl-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
