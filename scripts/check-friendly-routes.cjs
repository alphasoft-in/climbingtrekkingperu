const fs = require('fs');
const path = require('path');

const REGISTRY_FILE = path.join(__dirname, '../src/data/tours/toursData.ts');

console.log('--- Checking for SEO-Friendly Routes (Slugs) ---');

const registryContent = fs.readFileSync(REGISTRY_FILE, 'utf8');

// Regex to find slugs in the allToursData object
// e.g., 'huaraz-full-experience': huarazFullExperienceData,
const slugRegex = /['"]([^'"]+)['"]\s*:\s*\w+Data/g;
const slugs = [];
let match;

while ((match = slugRegex.exec(registryContent)) !== null) {
  slugs.push(match[1]);
}

const warnings = [];
const stats = {
  totalSlugs: slugs.length,
  unfriendly: 0
};

slugs.forEach(slug => {
  const issues = [];
  
  // Rule 1: No underscores
  if (slug.includes('_')) issues.push('Contains underscore (use hyphens)');
  
  // Rule 2: Lowercase only
  if (slug !== slug.toLowerCase()) issues.push('Contains uppercase letters');
  
  // Rule 3: Minimum length for descriptiveness
  if (slug.length < 5) issues.push('Too short (not descriptive enough)');
  
  // Rule 4: No special characters
  if (/[^a-z0-9-]/.test(slug)) issues.push('Contains special characters');

  // Rule 5: Should not be just a number
  if (/^\d+$/.test(slug)) issues.push('Is numeric only');

  if (issues.length > 0) {
    stats.unfriendly++;
    warnings.push({ slug, issues });
  }
});

console.log(`\nSummary:`);
console.log(`- Total Slugs Checked: ${stats.totalSlugs}`);
console.log(`- Unfriendly Slugs Found: ${stats.unfriendly}`);

if (warnings.length > 0) {
  console.log('\n--- Unfriendly Slugs Report (Action Recommended) ---');
  warnings.forEach(w => {
    console.log(`[!] "${w.slug}":`);
    w.issues.forEach(issue => console.log(`    - ${issue}`));
  });
} else {
  console.log('\nSuccess! All slugs are SEO-friendly.');
}

console.log('\nNote: Slugs should be descriptive (e.g., "huayhuash-classic" instead of just "classic").');
