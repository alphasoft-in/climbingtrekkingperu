import React, { useState, useEffect, useCallback } from 'react';
import PageHero from './PageHero';
import { AnimatePresence, motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

interface GalleryHubProps {
  lang: 'es' | 'en';
  categories: { id: string; label: string }[];
  items: GalleryItem[];
}

const GalleryHub: React.FC<GalleryHubProps> = ({ lang, categories, items }) => {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isEs = lang === 'es';

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  const selectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const closeLightbox = () => setSelectedIndex(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <div className="bg-white">
      {/* 1. Technical Hero */}
      <PageHero 
        titleTop={isEs ? 'REGISTRO VISUAL' : 'VISUAL ARCHIVE'}
        titleMain={isEs ? 'GALERÍA DE EXPEDICIONES' : 'EXPEDITION GALLERY'}
        backgroundImage="/slider_1.png"
        height="h-[50vh]"
        techData={[
          { label: "ASSETS", value: `${items.length} IMAGES` },
          { label: "REGION", value: "THE ANDES" },
          { label: "FORMAT", value: "ULTRA HD" }
        ]}
      />

      {/* 2. Professional Filter Bar - Floating "Island" style */}
      <section className="relative z-30 -mt-10 md:-mt-12 mb-8 md:mb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100/50 backdrop-blur-xl">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFilter(cat.id);
                    setSelectedIndex(null);
                  }}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                    filter === cat.id 
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105' 
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Refined Masonry Grid */}
      <section className="py-6 md:py-8 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedIndex(index)}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-xl bg-slate-100"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-75"
                  loading="lazy"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <span className="text-brand-blue text-[9px] font-black tracking-[0.3em] uppercase mb-2 block">
                    {item.location}
                  </span>
                  <h3 className="text-white text-lg font-bold tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-white/60 text-[8px] font-black tracking-widest uppercase">
                    <span className="w-4 h-[1px] bg-white/30"></span>
                    {isEs ? 'VER DETALLES' : 'VIEW DETAILS'}
                  </div>
                </div>

                {/* Corner ID */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-[8px] font-black font-mono">IMG_{item.id.toString().padStart(3, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Elite Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button - Enhanced Visibility */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white transition-all duration-300 z-[110] bg-brand-red hover:bg-brand-red/80 p-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(216,2,2,0.4)]"
              onClick={closeLightbox}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white hover:scale-110 transition-all duration-300 z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/5"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white hover:scale-110 transition-all duration-300 z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/5"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <motion.div 
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-[70vh] flex flex-col items-center justify-center gap-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,114,206,0.2)]"
                />
                
                {/* Image Details Overlay */}
                <div className="absolute -bottom-20 left-0 w-full flex justify-between items-end border-t border-white/10 pt-8 px-4 md:px-0">
                  <div className="space-y-2">
                    <span className="text-brand-blue text-[10px] font-black tracking-[0.4em] uppercase block">
                      {selectedImage.location}
                    </span>
                    <h2 className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase">
                      {selectedImage.title}
                    </h2>
                  </div>
                  <div className="hidden md:flex gap-8">
                    <div className="text-right">
                      <label className="block text-[8px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase">ARCHIVE ID</label>
                      <span className="text-xs font-bold text-white/60 font-mono">#{selectedImage.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div className="text-right">
                      <label className="block text-[8px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase">RESOLUTION</label>
                      <span className="text-xs font-bold text-white/60 font-mono">4K TECHNICAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-black tracking-[0.5em] uppercase">
              {selectedIndex! + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryHub;
