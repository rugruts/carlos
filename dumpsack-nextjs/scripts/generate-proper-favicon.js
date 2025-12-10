const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  console.log('🎨 Generating favicons from logo.png...');
  const inputPath = path.join(__dirname, '../public/logo.png');
  const publicDir = path.join(__dirname, '../public');

  // Check if logo.png exists
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Error: logo.png not found at', inputPath);
    process.exit(1);
  }

  console.log('Generating favicons from logo.png...');

  try {
    // Generate 32x32 favicon.ico
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(path.join(publicDir, 'favicon-32.png'));

    console.log('✓ Generated favicon-32.png');

    // Generate 16x16 favicon
    await sharp(inputPath)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(path.join(publicDir, 'favicon-16.png'));

    console.log('✓ Generated favicon-16.png');

    // Generate apple-touch-icon (180x180)
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 4, g: 6, b: 4, alpha: 1 } // void color
      })
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('✓ Generated apple-touch-icon.png');

    console.log('\n✅ All favicons generated successfully!');
    console.log('\nNote: For favicon.ico, you need to:');
    console.log('1. Use an online converter like https://www.icoconverter.com/');
    console.log('2. Upload favicon-32.png and favicon-16.png');
    console.log('3. Download the .ico file and replace public/favicon.ico');
    console.log('\nOr use the generated PNG files directly in the metadata.');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

