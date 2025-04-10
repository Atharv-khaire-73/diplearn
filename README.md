# DiPLearn Educational Platform

An educational platform providing MSBTE study materials for Computer Engineering.

## Deployment Guide for Hostinger

### Prerequisites
- Node.js 16+ installed
- Hostinger account with FTP access
- Domain configured in Hostinger

### Local Development
1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

### Deploying to Hostinger

#### Method 1: Using FTP Script (Automated)

1. Update the `.env` file with your Hostinger FTP credentials:
   ```
   FTP_USERNAME=your-hostinger-username
   FTP_PASSWORD=your-hostinger-password
   FTP_HOST=ftp.yourdomain.com
   FTP_PORT=21
   FTP_REMOTE_ROOT=/public_html/
   ```

2. Run the deploy script:
   ```
   npm run deploy
   ```

#### Method 2: Manual FTP Upload

1. Build the project:
   ```
   npm run build
   ```

2. Upload the contents of the `dist` folder to your Hostinger hosting using any FTP client:
   - Connect to your Hostinger FTP server using the credentials provided in your hosting panel
   - Navigate to the `public_html` directory (or the directory you want to deploy to)
   - Upload all files from the `dist` folder

#### Method 3: Using Hostinger File Manager

1. Build the project:
   ```
   npm run build
   ```

2. Zip the `dist` folder
3. Login to Hostinger control panel
4. Navigate to File Manager
5. Upload the zip file to `public_html` folder
6. Extract the zip file
7. Delete the zip file

### Single Page Application Configuration

Since this is a React SPA with client-side routing, you need to configure URL rewriting:

1. Create a `.htaccess` file in the root of your hosting with the following content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

2. This ensures that all routes are redirected to `index.html`, allowing React Router to handle the routing.

### Post-Deployment Verification

After deploying, verify:

1. The website loads correctly at your domain
2. All routes work when accessed directly (e.g., yourdomain.com/tech-plate/python-pwp)
3. All static assets (images, CSS, JS) load properly
4. The ads are displaying correctly

### Troubleshooting

- If routes don't work, check your `.htaccess` configuration
- If assets don't load, verify paths in the `vite.config.ts` file (the `base` option)
- For FTP issues, check your credentials and make sure your hosting allows FTP connections 