const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateIcons() {
  const sizes = {
    favicon: 32,
    icon: 192,
    apple: 180
  };

  const inputSvg = path.join(__dirname, '../public/icon.svg');
  
  try {
    const svgBuffer = await fs.readFile(inputSvg);

    // Generar favicon.ico (PNG de 32x32)
    await sharp(svgBuffer)
      .resize(sizes.favicon, sizes.favicon)
      .png()
      .toBuffer()
      .then(async (data) => {
        await fs.writeFile(path.join(__dirname, '../public/favicon.ico'), data);
      });

    // Generar icon.png (192x192 para PWA)
    await sharp(svgBuffer)
      .resize(sizes.icon, sizes.icon)
      .png()
      .toFile(path.join(__dirname, '../public/icon.png'));

    // Generar apple-icon.png (180x180 para iOS)
    await sharp(svgBuffer)
      .resize(sizes.apple, sizes.apple)
      .png()
      .toFile(path.join(__dirname, '../public/apple-icon.png'));

    console.log('✅ Iconos generados exitosamente');
  } catch (error) {
    console.error('❌ Error generando los iconos:', error);
  }
}

generateIcons(); 