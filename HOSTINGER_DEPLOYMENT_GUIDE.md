# Hostinger Deployment Guide

## Problem
When deploying a React SPA (Single Page Application) on Hostinger, direct URL access (like `blockrabbits.com/delete-data`) shows a 404 error because the server doesn't know how to handle client-side routes.

## Solution

### 1. Build Your Project
```bash
npm run build
```

### 2. Upload Files to Hostinger
Upload the contents of the `dist` folder to your Hostinger public_html directory.

### 3. Configure .htaccess
The `.htaccess` file has been created in the `public` folder. Make sure it's uploaded to your root directory on Hostinger.

### 4. Alternative .htaccess (if the first one doesn't work)
If you're still having issues, try this simpler version:

```apache
RewriteEngine On
RewriteBase /

# Handle React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 5. Hostinger cPanel Configuration

#### Option A: Using .htaccess (Recommended)
1. Upload the `.htaccess` file to your root directory
2. Make sure mod_rewrite is enabled (it usually is by default)

#### Option B: Using Hostinger's File Manager
1. Go to Hostinger cPanel
2. Open File Manager
3. Navigate to your domain's public_html folder
4. Create a new file called `.htaccess`
5. Paste the .htaccess content
6. Save the file

### 6. Test Your Routes
After deployment, test these URLs:
- `https://blockrabbits.com/` (should work)
- `https://blockrabbits.com/delete-data` (should work)
- `https://blockrabbits.com/privacy-policy` (should work)
- `https://blockrabbits.com/about` (should work)

### 7. Troubleshooting

#### If routes still don't work:
1. **Check if .htaccess is uploaded**: Make sure the `.htaccess` file is in your root directory
2. **Check file permissions**: Set `.htaccess` permissions to 644
3. **Contact Hostinger support**: Ask them to enable mod_rewrite if it's not enabled
4. **Try alternative .htaccess**:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```

#### If you get a 500 error:
1. Check your `.htaccess` syntax
2. Try the simpler version above
3. Contact Hostinger support

### 8. Additional Configuration

#### For better performance, also add these to your .htaccess:
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

### 9. Deployment Checklist

- [ ] Build the project (`npm run build`)
- [ ] Upload `dist` contents to public_html
- [ ] Upload `.htaccess` to root directory
- [ ] Test all routes work
- [ ] Test the delete-data page specifically
- [ ] Verify email functionality works
- [ ] Test on mobile devices

### 10. Common Issues and Solutions

#### Issue: Routes work from navigation but not direct access
**Solution**: This is exactly what the .htaccess file fixes. Make sure it's properly uploaded.

#### Issue: 500 Internal Server Error
**Solution**: Check .htaccess syntax or try the simpler version above.

#### Issue: CSS/JS files not loading
**Solution**: Make sure all files from the `dist` folder are uploaded to the correct location.

#### Issue: API calls not working
**Solution**: Make sure your API endpoints are properly configured and the server supports them.

### 11. Support

If you're still having issues:
1. Check Hostinger's documentation for React apps
2. Contact Hostinger support
3. Verify your hosting plan supports .htaccess files
4. Consider upgrading to a plan that supports Node.js if you need server-side features

## Quick Fix Summary

1. **Upload the `.htaccess` file** to your Hostinger root directory
2. **Make sure all files from `dist`** are uploaded to `public_html`
3. **Test direct URL access** to your routes
4. **Contact Hostinger support** if mod_rewrite is not enabled

This should resolve the routing issues and allow direct access to URLs like `blockrabbits.com/delete-data`. 