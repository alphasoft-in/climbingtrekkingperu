import fs from 'fs';
import path from 'path';

const DATA_DIR = './src/data/tours';

function sanitizeFiles(dir: string) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      sanitizeFiles(filePath);
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace coordinates with backticks: lat: `...` -> lat: '...'
      // Handling single quotes inside backticks by escaping them
      const regex = /(lat|lon):\s*`([^`]*)`/g;
      const newContent = content.replace(regex, (match, p1, p2) => {
        const sanitized = p2.replace(/'/g, "\\'");
        return `${p1}: '${sanitized}'`;
      });
      
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Sanatized: ${file}`);
      }
    }
  });
}

console.log('🚀 Starting global coordinates sanitation...');
sanitizeFiles(DATA_DIR);
console.log('✨ Sanitation complete.');
