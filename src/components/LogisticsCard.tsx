import React from 'react';

interface LogisticsCardProps {
  title: string;
  items: string[];
  refCode?: string;
  variant?: 'primary' | 'secondary';
}

const LogisticsCard: React.FC<LogisticsCardProps> = ({ 
  title, 
  items, 
  refCode = "SRV-INC", 
  variant = 'primary' 
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`p-6 md:p-8 border ${isPrimary ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-50 border-slate-200'} transition-all hover:shadow-xl group`}>
      <div className="mb-6 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[9px] font-black tracking-[0.3em] text-brand-blue uppercase">
            REF: {refCode}
          </span>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <h3 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight leading-none">
          {title}
        </h3>
      </div>

      <ul className="flex flex-col gap-4">
        {items?.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start group/item">
            <div className={`mt-1.5 flex-shrink-0 transition-transform group-hover/item:scale-110 ${isPrimary ? 'text-brand-blue' : 'text-slate-400'}`}>
              {isPrimary ? (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" className="drop-shadow-sm">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )}
            </div>
            <span className="text-xs md:text-sm text-slate-600 leading-relaxed group-hover/item:text-slate-900 transition-colors font-medium">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogisticsCard;
