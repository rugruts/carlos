/**
 * Favicon Generator Script
 * Generates favicon.ico and other icon sizes from logo.svg
 * 
 * Run: node scripts/generate-favicon.js
 */

const fs = require('fs');
const path = require('path');

// Simple SVG to create favicon
const faviconSVG = `<svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8EFF60;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#39C072;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background Circle -->
  <circle cx="100" cy="100" r="90" fill="#040604" stroke="url(#logoGradient)" stroke-width="3"/>
  
  <!-- Trash Can Icon -->
  <g>
    <!-- Lid -->
    <rect x="70" y="60" width="60" height="8" rx="2" fill="#8EFF60"/>
    <rect x="85" y="52" width="30" height="8" rx="2" fill="#8EFF60"/>
    
    <!-- Body -->
    <path d="M 75 70 L 80 140 Q 80 145 85 145 L 115 145 Q 120 145 120 140 L 125 70 Z" fill="url(#logoGradient)" opacity="0.9"/>
    
    <!-- Vertical Lines -->
    <line x1="90" y1="75" x2="92" y2="135" stroke="#040604" stroke-width="3" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="100" y2="135" stroke="#040604" stroke-width="3" stroke-linecap="round"/>
    <line x1="110" y1="75" x2="108" y2="135" stroke="#040604" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSVG);

console.log('✅ Generated favicon.svg');
console.log('');
console.log('📝 Next steps:');
console.log('1. Use an online tool to convert favicon.svg to favicon.ico:');
console.log('   - https://realfavicongenerator.net/');
console.log('   - https://favicon.io/favicon-converter/');
console.log('');
console.log('2. Or use sharp package (install first):');
console.log('   npm install sharp');
console.log('   Then run: node scripts/convert-favicon.js');
console.log('');
console.log('3. Place the generated files in /public:');
console.log('   - favicon.ico (16x16, 32x32, 48x48)');
console.log('   - apple-touch-icon.png (180x180)');
console.log('   - favicon-16x16.png');
console.log('   - favicon-32x32.png');
console.log('   - android-chrome-192x192.png');
console.log('   - android-chrome-512x512.png');

