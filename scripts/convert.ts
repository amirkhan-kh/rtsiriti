import sharp from 'sharp';
import fs from 'fs';

// Barcha PNG/JPEG larni AVIF ga o'zgartirish
async function convertImages() {
  const files = fs.readdirSync('./public/images/original');
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const name = file.split('.')[0];
      
      // AVIF ga convert
      await sharp(`./public/images/original/${file}`)
        .avif({ quality: 80 })
        .toFile(`./public/images/optimized/${name}.avif`);
      
      // WebP ga convert (fallback)
      await sharp(`./public/images/original/${file}`)
        .webp({ quality: 80 })
        .toFile(`./public/images/webp/${name}.webp`);
      
      console.log(`✅ ${file} → ${name}.avif`);
    }
  }
  console.log('🎉 Barcha rasmlar convert bo\'ldi!');
}

convertImages();