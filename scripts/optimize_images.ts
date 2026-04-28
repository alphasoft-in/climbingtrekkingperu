import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const SRC_DIR = './src';

// Extensiones a procesar
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function walkDir(dir: string, callback: (filePath: string) => Promise<void>) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await walkDir(fullPath, callback);
    } else {
      await callback(fullPath);
    }
  }
}

async function optimizeImages() {
  console.log('🚀 Iniciando optimización masiva a AVIF...');
  let convertedCount = 0;

  await walkDir(PUBLIC_DIR, async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (EXTENSIONS.includes(ext)) {
      const output = filePath.replace(ext, '.avif');
      
      // Solo convertir si el AVIF no existe o el original es más nuevo
      if (!fs.existsSync(output) || fs.statSync(filePath).mtime > fs.statSync(output).mtime) {
        try {
          await sharp(filePath)
            .avif({ quality: 65, effort: 6 }) // Balance calidad/peso óptimo
            .toFile(output);
          console.log(`✅ Convertido: ${filePath} -> ${output}`);
          convertedCount++;
        } catch (err) {
          console.error(`❌ Error convirtiendo ${filePath}:`, err);
        }
      }
    }
  });

  console.log(`\n🎉 Conversión completada. ${convertedCount} imágenes procesadas.`);
  
  if (convertedCount > 0) {
    console.log('🔄 Actualizando referencias en el código...');
    await updateReferences();
  } else {
    console.log('✨ No se requirieron actualizaciones de referencias.');
  }
}

async function updateReferences() {
  let updatedFiles = 0;
  
  const updateInDir = async (dir: string) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        await updateInDir(fullPath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.astro')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        // Reemplazar extensiones en strings
        EXTENSIONS.forEach(ext => {
          const regex = new RegExp(ext.replace('.', '\\.'), 'g');
          if (regex.test(content)) {
            content = content.replace(regex, '.avif');
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(fullPath, content);
          console.log(`📝 Referencias actualizadas en: ${fullPath}`);
          updatedFiles++;
        }
      }
    }
  };

  await updateInDir(SRC_DIR);
  console.log(`\n✨ Se actualizaron referencias en ${updatedFiles} archivos de código.`);
}

optimizeImages();
