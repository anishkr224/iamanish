# Anish Kumar - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing projects, skills, experience, and education. This is a fully functional clone of the original design, customized for Anish Kumar and optimized for deployment on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth routing between different sections
- **Bio Page with Tabs**: Four clickable subsections (Education, Skills, Experience, Certificates)
- **Projects Showcase**: Organized project portfolio with detailed descriptions
- **Contact Information**: Easy-to-find contact details
- **Social Media Integration**: Links to GitHub, LinkedIn, Twitter, LeetCode, and Instagram
- **SEO Optimized**: Meta tags and Open Graph tags for better search engine visibility
- **Fast Loading**: Optimized build with code splitting and compression

## 🚀 Live Demo

Visit the live website: [https://anishkr224.github.io/iamanish/](https://anishkr224.github.io/iamanish/)

## 📁 Project Structure

```
anish-portfolio/
├── public/
│   ├── img/                    # Static images and icons
│   │   ├── logo/              # Social media and contact icons
│   │   ├── marketplace/       # Project screenshots
│   │   ├── newsapi/          # Project screenshots
│   │   └── twitter/          # Project screenshots
│   ├── favicon.ico           # Website favicon
│   ├── index.html           # Main HTML template
│   ├── manifest.json        # PWA manifest
│   └── Anish_Kumar_Resume.pdf # Resume file
├── src/
│   ├── components/          # React components
│   │   ├── Home.jsx        # Homepage component
│   │   ├── Bio.jsx         # Bio page with tabs
│   │   ├── Projects.jsx    # Projects page
│   │   ├── Contacts.jsx    # Contact information
│   │   ├── MyNavbar.jsx    # Navigation bar
│   │   ├── Social.jsx      # Social media links
│   │   ├── Education.jsx   # Education section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Experiences.jsx # Experience section
│   │   ├── Certificates.jsx # Certificates section
│   │   └── ...            # Other components
│   ├── css/               # Styling files
│   │   ├── home.css       # Homepage styles
│   │   ├── bio.css        # Bio page styles
│   │   ├── projects.css   # Projects page styles
│   │   └── ...           # Other CSS files
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── dist/                 # Production build (generated)
├── package.json          # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19.1.0
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.1
- **Styling**: CSS3 with custom stylesheets
- **Icons**: FontAwesome icons
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/anishkr224/iamanish.git
   cd iamanish
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Production Build

1. **Build for production**
   ```bash
   pnpm run build
   # or
   npm run build
   ```

2. **Preview production build**
   ```bash
   pnpm run preview
   # or
   npm run preview
   ```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Fork or create a new repository** on GitHub named `iamanish`

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions"

3. **Create GitHub Actions workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           if: github.ref == 'refs/heads/main'
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm run build
   ```

2. **Deploy dist folder**
   - Upload the contents of the `dist/` folder to your GitHub Pages repository
   - Or use GitHub Desktop to commit and push the built files

## 📝 Customization Guide

### Updating Personal Information

#### 1. Basic Information
Edit the following files to update personal details:

**Home Page** (`src/components/Home.jsx`):
```jsx
// Update name and description
<p className="my-name">Hi, I'm [Your Name].</p>
<p className="p-small">
  Hi, My name is [Your Full Name].
  <br />
  [Your Title/Role].
  <br />
  [Your Description].
</p>
```

**Navigation** (`src/components/MyNavbar.jsx`):
```jsx
// Update navbar brand
<Link to="/" title="Home">[Your Name]</Link>
```

**Bio Page** (`src/components/Bio.jsx`):
```jsx
// Update bio page greeting
<p className="my-name-bio">Hi, I'm [Your Name].</p>
```

#### 2. Contact Information
Update `src/components/Contacts.jsx`:
```jsx
// Update phone number
<div className="contact">[Your Phone Number]</div>

// Update email
<div className="contact">[your.email@domain.com]</div>
```

#### 3. Social Media Links
Update `src/components/Social.jsx`:
```jsx
// Update all social media URLs
<a href="https://github.com/[your-username]" ...>
<a href="https://www.linkedin.com/in/[your-profile]" ...>
<a href="https://twitter.com/[your-handle]" ...>
<a href="https://leetcode.com/u/[your-username]" ...>
<a href="https://www.instagram.com/[your-handle]" ...>
```

### Updating Resume

1. **Replace the resume file**:
   - Add your resume PDF to `public/` directory
   - Name it `[Your_Name]_Resume.pdf`

2. **Update the resume link** in `src/components/Home.jsx`:
   ```jsx
   <a href="/[Your_Name]_Resume.pdf" target="_blank" rel="noopener noreferrer">
   ```

### Updating Education

Edit `src/components/Education.jsx`:
```jsx
<div className="card">
  <h5>[Degree Name]</h5>
  <p className="p-x-small">[Institution Name, City, State, Country]</p>
  <p className="p-x-small">[Start Year] - [End Year]</p>
</div>
```

### Updating Skills

Edit `src/components/Skills.jsx`:
```jsx
<div className="card">
  <h5>[Skill Category]</h5>
  <p className="p-x-small">[List of skills separated by commas]</p>
</div>
```

### Updating Experience

Edit `src/components/Experiences.jsx`:
```jsx
<div className="card">
  <h5>[Job Title]</h5>
  <p className="p-x-small">[Company Name]</p>
  <p className="p-x-small">[Start Date] - [End Date]</p>
  <ul className="p-x-small">
    <li>[Achievement or responsibility 1]</li>
    <li>[Achievement or responsibility 2]</li>
  </ul>
</div>
```

### Updating Certificates

Edit `src/components/Certificates.jsx`:
```jsx
<div className="card remove-underline">
  <a href="[Certificate URL]" target="_blank" rel="noopener noreferrer">
    <h5>[Certificate Name]</h5>
  </a>
  <p className="p-x-small">[Issuing Organization]</p>
</div>
```

### Updating Projects

The projects are organized into three categories in separate components:

1. **Full Stack Projects** (`src/components/FullstackProjects.jsx`)
2. **Frontend Projects** (`src/components/FrontendProjects.jsx`)
3. **AI/ML/DL Projects** (`src/components/AIMLDLProjects.jsx`)

To add a new project:
```jsx
<div className="card">
  <h3>[Project Name]</h3>
  <p><strong>Technologies Used:</strong> [Tech Stack]</p>
  <p><strong>Date Created:</strong> [Date]</p>
  <p><strong>Details:</strong> [Project Description]</p>
  <a href="[GitHub URL]" target="_blank" rel="noopener noreferrer">
    GitHub Link
  </a>
  
  {/* Add project screenshots */}
  <div className="project-images">
    <img src={`${process.env.PUBLIC_URL}/img/[project-folder]/screenshot1.png`} 
         alt="[Project Name] Screenshot 1" />
  </div>
</div>
```

### Adding Project Images

1. **Create a folder** in `public/img/` with your project name
2. **Add screenshots** (recommended: s1.png, s2.png, etc.)
3. **Reference in component**:
   ```jsx
   <img src={`${process.env.PUBLIC_URL}/img/[project-folder]/s1.png`} 
        alt="[Project Name] Screenshot" />
   ```

### Updating SEO Information

Edit the meta tags in `index.html`:
```html
<meta name="description" content="[Your Name] - [Your Title]. [Brief description]" />
<meta name="keywords" content="[Your Name], [Your Skills], [Your Specialties]" />
<meta property="og:title" content="[Your Name] - [Your Title] Portfolio" />
<meta property="og:description" content="[Your description]" />
<meta property="og:url" content="https://[your-username].github.io/[repository-name]/" />
```

## 🎨 Styling Customization

### Color Scheme
The website uses a clean, professional color scheme. Main colors can be modified in the CSS files:

- **Primary Green**: Used for name/brand (modify in `src/css/my-navbar.css`)
- **Button Colors**: Orange, Green, Blue (modify in `src/css/button.css`)
- **Background**: White with subtle borders

### Typography
The website uses the Quicksand font family. To change fonts:

1. **Update font imports** in `public/index.html`
2. **Modify font-family** in `src/index.css`

### Layout
The layout is responsive and uses CSS Grid/Flexbox. Key layout files:
- `src/css/home.css` - Homepage layout
- `src/css/bio.css` - Bio page layout
- `src/css/projects.css` - Projects page layout

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**:
   - Check Node.js version (should be 18+)
   - Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`

2. **Images not loading**:
   - Ensure images are in `public/img/` directory
   - Check file paths and extensions
   - Verify `process.env.PUBLIC_URL` usage

3. **Routing issues on GitHub Pages**:
   - Ensure `basename` is set correctly for subdirectory deployment
   - Check that all routes are properly configured

4. **FontAwesome icons not showing**:
   - Verify FontAwesome packages are installed
   - Check import statements in components

### Performance Optimization

- Images are optimized for web
- CSS is minified in production
- JavaScript is bundled and compressed
- Lazy loading can be implemented for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Create a new issue with detailed description
4. Contact: [anishkumar@example.com](mailto:anishkumar@example.com)

## 🙏 Acknowledgments

- Original design inspiration from Swavik Patra's portfolio
- React.js community for excellent documentation
- FontAwesome for beautiful icons
- Vite for fast build tooling

---

**Built with ❤️ by Anish Kumar**

