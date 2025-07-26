# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying your Anish Kumar portfolio website to GitHub Pages.

## 🚀 Quick Deployment Steps

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click "New repository"
   - Name it `iamanish` (or your preferred name)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload Your Code**
   ```bash
   # Navigate to your project directory
   cd /path/to/anish-portfolio
   
   # Initialize git repository
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial commit: Anish Kumar portfolio website"
   
   # Add remote origin (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/iamanish.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

4. **Access Your Website**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/iamanish/`
   - It may take a few minutes for the first deployment

### Method 2: Manual Deployment

If you prefer manual deployment or GitHub Actions isn't working:

1. **Build the Project Locally**
   ```bash
   # Install dependencies
   npm install
   
   # Build for production
   npm run build
   ```

2. **Create a GitHub Repository**
   - Follow step 1 from Method 1

3. **Deploy Built Files**
   ```bash
   # Navigate to the dist directory
   cd dist
   
   # Initialize git in dist directory
   git init
   
   # Add all built files
   git add .
   
   # Commit
   git commit -m "Deploy portfolio website"
   
   # Add remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/iamanish.git
   
   # Push to gh-pages branch
   git push -f origin main:gh-pages
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

## 🔧 Configuration for GitHub Pages

### Base URL Configuration

If your repository name is different from `iamanish`, you need to configure the base URL:

1. **Update vite.config.js**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPOSITORY_NAME/', // Add this line
   })
   ```

2. **Update package.json** (add homepage field):
   ```json
   {
     "name": "anish-portfolio",
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/",
     ...
   }
   ```

### Router Configuration

For client-side routing to work properly on GitHub Pages:

1. **Create a 404.html** in the public directory:
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>Anish Kumar</title>
       <script type="text/javascript">
         var pathSegmentsToKeep = 1;
         var l = window.location;
         l.replace(
           l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
           l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
           l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
           (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
           l.hash
         );
       </script>
     </head>
     <body>
     </body>
   </html>
   ```

2. **Update index.html** (add script in head):
   ```html
   <script type="text/javascript">
     (function(l) {
       if (l.search[1] === '/' ) {
         var decoded = l.search.slice(1).split('&').map(function(s) { 
           return s.replace(/~and~/g, '&')
         }).join('?');
         window.history.replaceState(null, null,
             l.pathname.slice(0, -1) + decoded + l.hash
         );
       }
     }(window.location))
   </script>
   ```

## 🔍 Troubleshooting

### Common Issues and Solutions

1. **404 Error on Page Refresh**
   - Implement the 404.html solution above
   - Ensure routing is configured for single-page applications

2. **Images Not Loading**
   - Check that images are in the `public/img/` directory
   - Verify image paths use `process.env.PUBLIC_URL`
   - Ensure image file extensions match exactly

3. **CSS Not Loading**
   - Verify the build process completed successfully
   - Check that CSS files are included in the dist directory
   - Clear browser cache

4. **GitHub Actions Failing**
   - Check the Actions tab in your repository for error details
   - Ensure Node.js version is compatible (18+)
   - Verify package.json scripts are correct

5. **Site Not Updating**
   - Check if the GitHub Action completed successfully
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Wait a few minutes for CDN to update

### Debugging Steps

1. **Check Build Locally**
   ```bash
   npm run build
   npm run preview
   ```

2. **Verify GitHub Actions**
   - Go to your repository
   - Click "Actions" tab
   - Check the latest workflow run for errors

3. **Check GitHub Pages Settings**
   - Repository Settings > Pages
   - Ensure source is set correctly
   - Check for any error messages

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use appropriate formats (WebP for modern browsers)
   - Resize images to appropriate dimensions

2. **Minify Assets**
   - The build process automatically minifies CSS and JavaScript
   - Remove unused dependencies

3. **Enable Compression**
   - GitHub Pages automatically serves gzipped content
   - No additional configuration needed

### After Deployment

1. **Test Performance**
   - Use Google PageSpeed Insights
   - Test on different devices and network speeds
   - Monitor Core Web Vitals

2. **SEO Optimization**
   - Verify meta tags are correct
   - Test Open Graph tags with Facebook Debugger
   - Submit sitemap to Google Search Console

## 🔒 Security Considerations

1. **Environment Variables**
   - Don't commit sensitive data to the repository
   - Use GitHub Secrets for sensitive build-time variables

2. **Dependencies**
   - Regularly update dependencies for security patches
   - Use `npm audit` to check for vulnerabilities

3. **Content Security**
   - Review all external links
   - Ensure resume and other documents don't contain sensitive information

## 📈 Monitoring and Analytics

### Adding Google Analytics

1. **Get Tracking ID** from Google Analytics

2. **Add to index.html**:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### GitHub Pages Analytics

- GitHub provides basic analytics in repository Insights
- Monitor traffic, popular pages, and referrers

## 🔄 Updating Your Site

### Regular Updates

1. **Make Changes Locally**
   ```bash
   # Make your changes
   # Test locally
   npm run dev
   ```

2. **Build and Test**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

### Content Updates

- Follow the customization guide in README.md
- Always test changes locally before deploying
- Keep backups of important content

## 📞 Support

If you encounter issues during deployment:

1. **Check GitHub Status**: [status.github.com](https://status.github.com)
2. **Review GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/pages)
3. **Search GitHub Community**: [github.community](https://github.community)
4. **Contact Support**: Create an issue in your repository

## ✅ Deployment Checklist

Before going live, ensure:

- [ ] All personal information is updated
- [ ] Resume file is uploaded and linked correctly
- [ ] Social media links are updated
- [ ] All images are optimized and loading
- [ ] Contact information is correct
- [ ] SEO meta tags are updated
- [ ] Site works on mobile devices
- [ ] All links are functional
- [ ] GitHub Actions workflow is working
- [ ] Custom domain is configured (if applicable)

---

**Happy Deploying! 🚀**

