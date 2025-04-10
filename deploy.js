import FtpDeploy from 'ftp-deploy';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const ftpDeploy = new FtpDeploy();

// For ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if dist directory exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Load credentials from .env file if it exists, or prompt for them
let username = process.env.FTP_USERNAME;
let password = process.env.FTP_PASSWORD;
let host = process.env.FTP_HOST || 'your-hostinger-hostname.com';
let port = process.env.FTP_PORT || 21;
let remoteRoot = process.env.FTP_REMOTE_ROOT || '/public_html/';

// If running in interactive mode, prompt for credentials
if (!username || !password) {
  console.log('FTP Credentials not found in environment variables.');
  console.log('Please provide your Hostinger FTP credentials:');
  
  console.log(`Host: ${host}`);
  console.log(`Port: ${port}`);
  console.log(`Remote Root: ${remoteRoot}`);
  
  console.log('NOTE: You should update these values in the deploy.js file.');
  console.log('For security, never commit this file with your actual credentials.');
  
  // In a real scenario you would prompt for these values
  // For now we'll use placeholders
  username = 'your-hostinger-username';
  password = 'your-hostinger-password';
}

const config = {
  user: username,
  password: password,
  host: host,
  port: port,
  localRoot: path.join(__dirname, 'dist'),
  remoteRoot: remoteRoot,
  include: ['*', '**/*'],
  exclude: [],
  deleteRemote: true, // Set to false if you want to keep old files
  forcePasv: true,
  sftp: false
};

console.log('Starting deployment to Hostinger...');

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log('Deployment complete!');
    console.log(res);
  })
  .catch(err => {
    console.log('Deployment failed:');
    console.error(err);
  }); 