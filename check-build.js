import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// For ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html does not exist. The build may be incomplete.');
  process.exit(1);
}

// Check if assets folder exists
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('Error: dist/assets directory does not exist. The build may be incomplete.');
  process.exit(1);
}

// Get a list of all JavaScript files to check if chunking worked
const jsFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.js'));
console.log('JavaScript files in build:');
jsFiles.forEach(file => console.log(` - ${file}`));

// Check if .htaccess was copied to dist
const htaccessPath = path.join(distPath, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  console.warn('Warning: .htaccess is missing from the build directory.');
  console.log('Copying .htaccess to the build directory...');
  
  const sourceHtaccess = path.join(__dirname, 'public', '.htaccess');
  if (fs.existsSync(sourceHtaccess)) {
    fs.copyFileSync(sourceHtaccess, htaccessPath);
    console.log('✅ .htaccess has been copied to the build directory.');
  } else {
    console.error('Error: public/.htaccess does not exist. Create it first.');
    process.exit(1);
  }
}

console.log('✅ Build verification complete. The build appears to be ready for deployment.');
console.log(`Total build size: ${getFolderSize(distPath)} bytes`);

// Helper function to get folder size
function getFolderSize(folderPath) {
  let totalSize = 0;
  
  function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    
    arrayOfFiles = arrayOfFiles || [];
    
    files.forEach(function(file) {
      if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
        arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    });
    
    return arrayOfFiles;
  }
  
  const arrayOfFiles = getAllFiles(folderPath);
  
  arrayOfFiles.forEach(function(filePath) {
    totalSize += fs.statSync(filePath).size;
  });
  
  return totalSize;
} 