import { copyFileSync } from 'fs';
const src = 'C:/Users/dogga/.gemini/antigravity-ide/brain/7e2fd592-bf24-4f64-9c36-a5a3e2d984b9/media__1786381736101.jpg';
const dst = 'C:/Users/dogga/Desktop/portfolio/public/profile.jpg';
try {
  copyFileSync(src, dst);
  console.log('Profile image copied successfully!');
} catch (e) {
  console.error('Error:', e.message);
}
