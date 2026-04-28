import sharp from 'sharp';
import fs from 'fs';

async function inspectAndFix() {
  const sliderPath = './public/slider_1.avif';
  if (fs.existsSync(sliderPath)) {
    const metadata = await sharp(sliderPath).metadata();
    console.log(`Slider 1: ${metadata.width}x${metadata.height}`);
    
    if ((metadata.width || 0) > 2000) {
      console.log('Resize needed for Slider 1...');
      const buffer = fs.readFileSync(sliderPath);
      await sharp(buffer)
        .resize(1920) // Resize to standard Full HD width
        .avif({ quality: 40, effort: 6 })
        .toFile(sliderPath + '.tmp');
      fs.renameSync(sliderPath + '.tmp', sliderPath);
      console.log(`✅ slider_1.avif resized & optimized. Final size: ${fs.statSync(sliderPath).size} bytes`);
    }
  }
}

inspectAndFix().catch(console.error);
