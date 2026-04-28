import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function fixImages() {
  console.log('🛠️ Iniciando corrección de imágenes problemáticas...');

  // 1. Slider 1: Re-comprimir con menor calidad
  const sliderPath = './public/slider_1.avif';
  if (fs.existsSync(sliderPath)) {
    console.log('📉 Optimizando slider_1.avif...');
    const buffer = fs.readFileSync(sliderPath);
    await sharp(buffer)
      .avif({ quality: 45, effort: 6 }) // Bajamos calidad de 65 a 45 para reducir peso drásticamente
      .toFile(sliderPath + '.tmp');
    fs.renameSync(sliderPath + '.tmp', sliderPath);
    console.log(`✅ slider_1.avif optimizado. Nuevo tamaño: ${fs.statSync(sliderPath).size} bytes`);
  }

  // 2. Logo: Redimensionar y re-comprimir
  const logoPath = './public/logo.avif';
  if (fs.existsSync(logoPath)) {
    console.log('📏 Redimensionando logo.avif...');
    const buffer = fs.readFileSync(logoPath);
    await sharp(buffer)
      .resize(260) // Ancho doble para pantallas retina (original era 477)
      .avif({ quality: 60 })
      .toFile(logoPath + '.tmp');
    fs.renameSync(logoPath + '.tmp', logoPath);
    console.log(`✅ logo.avif redimensionado. Nuevo tamaño: ${fs.statSync(logoPath).size} bytes`);
  }

  // 3. Perfil Francisco: Re-comprimir
  const profilePath = './public/perfiles/francisco.avif';
  if (fs.existsSync(profilePath)) {
    console.log('📉 Optimizando francisco.avif...');
    const buffer = fs.readFileSync(profilePath);
    await sharp(buffer)
      .avif({ quality: 50 })
      .toFile(profilePath + '.tmp');
    fs.renameSync(profilePath + '.tmp', profilePath);
    console.log(`✅ francisco.avif optimizado. Nuevo tamaño: ${fs.statSync(profilePath).size} bytes`);
  }

  console.log('🎉 Correcciones completadas.');
}

fixImages().catch(console.error);
