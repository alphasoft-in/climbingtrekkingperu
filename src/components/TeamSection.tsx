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
    <section className="bg-[#0b0d10] pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-[0.25em] uppercase mb-4">
            {data.title}
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            {data.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {data.members.map((member, idx) => (
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
