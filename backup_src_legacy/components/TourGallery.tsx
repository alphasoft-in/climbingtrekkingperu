import React, { useState } from 'react';

interface TourGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  lang?: 'es' | 'en';
  tourName?: string;
}

const TourGallery: React.FC<TourGalleryProps> = ({ 
  images, 
  title = "GALERÍA DE EXPEDICIÓN", 
  subtitle = "REGISTRO VISUAL",
  lang = 'es',
  tourName
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header: Elite Technical Style */}
        <div className="mb-16 border-l-4 border-brand-blue pl-8">
          <span className="inline-block text-brand-light text-[9px] font-black tracking-[0.5em] uppercase mb-3">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase leading-none">
            {title.split(' ')[0]} <span className="text-brand-blue">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Technical Grid: 8 Images Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images?.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] group overflow-hidden bg-slate-100 rounded-sm shadow-sm cursor-pointer transition-all duration-500 hover:shadow-2xl"
            >
              <img 
                src={img} 
                alt={`${tourName || 'Gallery'} ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-brand-red transition-all z-[100000] p-4"
            onClick={closeLightbox}
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Nav Controls */}
          <button 
            className="absolute left-4 md:left-12 text-white/20 hover:text-brand-blue transition-all z-[100000] p-4 hidden md:block"
            onClick={prevImage}
          >
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 md:right-12 text-white/20 hover:text-brand-blue transition-all z-[100000] p-4 hidden md:block"
            onClick={nextImage}
          >
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8">
            <img 
              src={images[selectedImage]} 
              className="max-h-[75vh] w-auto object-contain shadow-2xl border border-white/5 animate-in zoom-in-95 duration-500"
              alt="Fullscreen"
            />
            
            {/* Modal Info */}
            <div className="w-full border-t border-white/10 pt-8 flex justify-between items-end">
              <div>
                <span className="text-brand-blue text-[9px] font-black tracking-[0.4em] uppercase mb-2 block">EXPEDICIÓN</span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                  {tourName || (lang === 'es' ? 'Andes Peruanos' : 'Peruvian Andes')}
                </h3>
              </div>
              <div className="text-white/30 text-[10px] font-black tracking-widest font-mono">
                {(selectedImage + 1).toString().padStart(2, '0')} / {images.length.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TourGallery;
