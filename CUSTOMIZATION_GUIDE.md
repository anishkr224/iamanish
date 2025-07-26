# Portfolio Customization Guide

This comprehensive guide will help you customize every aspect of your portfolio website to match your personal brand and information.

## 🎯 Quick Start Customization

### Essential Updates (Must Do)

1. **Personal Information**
2. **Contact Details**
3. **Social Media Links**
4. **Resume File**
5. **Education Background**
6. **Skills and Technologies**
7. **Work Experience**
8. **Certificates and Achievements**
9. **Project Portfolio**

## 👤 Personal Information Updates

### 1. Homepage Content

**File**: `src/components/Home.jsx`

```jsx
// Update the main greeting
<p className="my-name">Hi, I'm [Your First Name].</p>

// Update the introduction section
<p className="p-small">
  Hi, My name is [Your Full Name].
  <br />
  [Your Professional Title].
  <br />
  [Your personal description or mission statement].
  <br />
</p>
```

**Example**:
```jsx
<p className="my-name">Hi, I'm Sarah.</p>

<p className="p-small">
  Hi, My name is Sarah Johnson.
  <br />
  A passionate Full-Stack Developer.
  <br />
  Dedicated to creating beautiful, functional web applications that solve real-world problems.
  <br />
</p>
```

### 2. Navigation Bar

**File**: `src/components/MyNavbar.jsx`

```jsx
// Update the brand name in navigation
<Link to="/" title="Home">[Your First Name]</Link>
```

### 3. Bio Page Greeting

**File**: `src/components/Bio.jsx`

```jsx
// Update bio page greeting
<p className="my-name-bio">Hi, I'm [Your First Name].</p>
```

### 4. Projects Page Greeting

**File**: `src/components/Projects.jsx`

```jsx
// Update projects page greeting
<p>Hi, I'm [Your First Name].</p>
```

### 5. SEO and Meta Information

**File**: `index.html`

```html
<!-- Update page title -->
<title>[Your Full Name]</title>

<!-- Update meta description -->
<meta name="description" content="[Your Name] - [Your Title]. Portfolio showcasing [your specialties]." />

<!-- Update keywords -->
<meta name="keywords" content="[Your Name], [Your Skills], [Your Technologies], Portfolio" />

<!-- Update Open Graph tags -->
<meta property="og:title" content="[Your Name] - [Your Title] Portfolio" />
<meta property="og:description" content="[Your professional description]" />
<meta property="og:url" content="https://[your-username].github.io/[repository-name]/" />

<!-- Update Twitter card -->
<meta name="twitter:title" content="[Your Name] - [Your Title] Portfolio" />
<meta name="twitter:description" content="[Your professional description]" />
```

## 📞 Contact Information

### Update Contact Details

**File**: `src/components/Contacts.jsx`

```jsx
// Update phone number
<div className="contact">[Your Phone Number]</div>

// Update email address
<div className="contact">[your.email@domain.com]</div>
```

**Example**:
```jsx
<div className="contact">+1-555-123-4567</div>
<div className="contact">sarah.johnson@email.com</div>
```

### Contact Icons

The contact page uses icons from the `public/img/logo/` directory:
- `phone.png` - Phone icon
- `mail.png` - Email icon

You can replace these with your own icons if desired.

## 🌐 Social Media Links

### Update All Social Platforms

**File**: `src/components/Social.jsx`

```jsx
// GitHub
<a href="https://github.com/[your-username]" title="Github" target="_blank" rel="noopener noreferrer">

// LinkedIn
<a href="https://www.linkedin.com/in/[your-profile]" title="Linkedin" target="_blank" rel="noopener noreferrer">

// Twitter/X
<a href="https://twitter.com/[your-handle]" title="Twitter" target="_blank" rel="noopener noreferrer">

// LeetCode
<a href="https://leetcode.com/u/[your-username]" title="Leetcode" target="_blank" rel="noopener noreferrer">

// Instagram
<a href="https://www.instagram.com/[your-handle]" title="Instagram" target="_blank" rel="noopener noreferrer">
```

**Example**:
```jsx
<a href="https://github.com/sarahjohnson" title="Github" target="_blank" rel="noopener noreferrer">
<a href="https://www.linkedin.com/in/sarah-johnson-dev" title="Linkedin" target="_blank" rel="noopener noreferrer">
<a href="https://twitter.com/sarahcodes" title="Twitter" target="_blank" rel="noopener noreferrer">
<a href="https://leetcode.com/u/sarahjohnson" title="Leetcode" target="_blank" rel="noopener noreferrer">
<a href="https://www.instagram.com/sarahcodes" title="Instagram" target="_blank" rel="noopener noreferrer">
```

### Adding New Social Platforms

To add new social media platforms:

1. **Install FontAwesome icon** (if not already available)
2. **Import the icon** in `Social.jsx`:
   ```jsx
   import { faYoutube } from '@fortawesome/free-brands-svg-icons';
   ```
3. **Add the link**:
   ```jsx
   <a href="https://youtube.com/@[your-channel]" title="YouTube" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faYoutube} />
   </a>
   ```

## 📄 Resume Management

### 1. Replace Resume File

1. **Add your resume** to the `public/` directory
2. **Name it appropriately**: `[Your_Name]_Resume.pdf`
3. **Update the link** in `src/components/Home.jsx`:

```jsx
<a href="/[Your_Name]_Resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="bw-button-resume">
    Resume
  </button>
</a>
```

### 2. Resume Best Practices

- **File size**: Keep under 2MB for fast loading
- **Format**: PDF is recommended for compatibility
- **Naming**: Use clear, professional naming convention
- **Content**: Ensure it matches your portfolio information

## 🎓 Education Section

### Update Education Background

**File**: `src/components/Education.jsx`

```jsx
<div className="card">
  <h5>[Degree Name]</h5>
  <p className="p-x-small">[Institution Name, City, State, Country]</p>
  <p className="p-x-small">[Start Year] - [End Year]</p>
</div>
```

### Education Examples

```jsx
// Bachelor's Degree
<div className="card">
  <h5>Bachelor of Science in Computer Science</h5>
  <p className="p-x-small">University of California, Berkeley, CA, USA</p>
  <p className="p-x-small">2018 - 2022</p>
</div>

// Master's Degree
<div className="card">
  <h5>Master of Science in Software Engineering</h5>
  <p className="p-x-small">Stanford University, Stanford, CA, USA</p>
  <p className="p-x-small">2022 - 2024</p>
</div>

// Bootcamp
<div className="card">
  <h5>Full Stack Web Development Bootcamp</h5>
  <p className="p-x-small">General Assembly, San Francisco, CA, USA</p>
  <p className="p-x-small">2021 - 2022</p>
</div>

// High School
<div className="card">
  <h5>High School Diploma</h5>
  <p className="p-x-small">Lincoln High School, San Francisco, CA, USA</p>
  <p className="p-x-small">2014 - 2018</p>
</div>
```

### Adding Academic Achievements

You can add GPA, honors, or relevant coursework:

```jsx
<div className="card">
  <h5>Bachelor of Science in Computer Science</h5>
  <p className="p-x-small">University of California, Berkeley, CA, USA</p>
  <p className="p-x-small">2018 - 2022 | GPA: 3.8/4.0</p>
  <p className="p-x-small"><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Systems, Web Development</p>
</div>
```

## 💻 Skills Section

### Update Technical Skills

**File**: `src/components/Skills.jsx`

```jsx
<div className="card">
  <h5>[Skill Category]</h5>
  <p className="p-x-small">[Comma-separated list of skills]</p>
</div>
```

### Skill Categories and Examples

```jsx
// Programming Languages
<div className="card">
  <h5>Programming Languages</h5>
  <p className="p-x-small">JavaScript, Python, Java, TypeScript, C++, Go</p>
</div>

// Frontend Technologies
<div className="card">
  <h5>Frontend Technologies</h5>
  <p className="p-x-small">React.js, Vue.js, Angular, HTML5, CSS3, Sass, Bootstrap, Tailwind CSS</p>
</div>

// Backend Technologies
<div className="card">
  <h5>Backend Technologies</h5>
  <p className="p-x-small">Node.js, Express.js, Django, Flask, Spring Boot, ASP.NET Core</p>
</div>

// Databases
<div className="card">
  <h5>Databases</h5>
  <p className="p-x-small">MongoDB, PostgreSQL, MySQL, Redis, Firebase, DynamoDB</p>
</div>

// Cloud & DevOps
<div className="card">
  <h5>Cloud & DevOps</h5>
  <p className="p-x-small">AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins, GitHub Actions</p>
</div>

// Tools & Software
<div className="card">
  <h5>Development Tools</h5>
  <p className="p-x-small">Git, VS Code, IntelliJ IDEA, Postman, Figma, Jira, Slack</p>
</div>

// Soft Skills
<div className="card">
  <h5>Soft Skills</h5>
  <p className="p-x-small">Problem-Solving, Team Leadership, Communication, Project Management, Agile Methodologies</p>
</div>
```

### Skill Level Indicators

You can add skill levels using different approaches:

```jsx
// With proficiency levels
<div className="card">
  <h5>Programming Languages</h5>
  <p className="p-x-small">
    <strong>Expert:</strong> JavaScript, Python<br/>
    <strong>Proficient:</strong> Java, TypeScript<br/>
    <strong>Familiar:</strong> C++, Go
  </p>
</div>

// With years of experience
<div className="card">
  <h5>Frontend Technologies</h5>
  <p className="p-x-small">React.js (3+ years), Vue.js (2+ years), Angular (1+ year)</p>
</div>
```

## 💼 Experience Section

### Update Work Experience

**File**: `src/components/Experiences.jsx`

```jsx
<div className="card">
  <h5>[Job Title]</h5>
  <p className="p-x-small">[Company Name]</p>
  <p className="p-x-small">[Start Date] - [End Date or "Present"]</p>
  <ul className="p-x-small">
    <li>[Achievement or responsibility 1]</li>
    <li>[Achievement or responsibility 2]</li>
    <li>[Achievement or responsibility 3]</li>
  </ul>
</div>
```

### Experience Examples

```jsx
// Full-time Position
<div className="card">
  <h5>Senior Frontend Developer</h5>
  <p className="p-x-small">TechCorp Inc.</p>
  <p className="p-x-small">January 2023 - Present</p>
  <ul className="p-x-small">
    <li>Led a team of <strong>5 developers</strong> in building responsive web applications using <strong>React.js</strong> and <strong>TypeScript</strong></li>
    <li>Improved application performance by <strong>40%</strong> through code optimization and lazy loading implementation</li>
    <li>Collaborated with UX/UI designers to implement pixel-perfect designs and enhance user experience</li>
    <li>Mentored junior developers and conducted code reviews to maintain high code quality standards</li>
  </ul>
</div>

// Internship
<div className="card">
  <h5>Software Development Intern</h5>
  <p className="p-x-small">StartupXYZ</p>
  <p className="p-x-small">June 2022 - August 2022</p>
  <ul className="p-x-small">
    <li>Developed and maintained web applications using <strong>React.js</strong> and <strong>Node.js</strong></li>
    <li>Participated in daily standups and sprint planning meetings following <strong>Agile methodologies</strong></li>
    <li>Contributed to the company's main product, serving over <strong>10,000 active users</strong></li>
  </ul>
</div>

// Freelance Work
<div className="card">
  <h5>Freelance Web Developer</h5>
  <p className="p-x-small">Self-Employed</p>
  <p className="p-x-small">March 2021 - December 2022</p>
  <ul className="p-x-small">
    <li>Built custom websites for <strong>15+ small businesses</strong> using modern web technologies</li>
    <li>Managed complete project lifecycle from client consultation to deployment and maintenance</li>
    <li>Achieved <strong>100% client satisfaction</strong> rate with on-time delivery and quality work</li>
  </ul>
</div>

// Project-based Experience
<div className="card">
  <h5>Open Source Contributor</h5>
  <p className="p-x-small">Various Projects</p>
  <p className="p-x-small">2020 - Present</p>
  <ul className="p-x-small">
    <li>Contributed to <strong>10+ open source projects</strong> on GitHub with over <strong>500 commits</strong></li>
    <li>Fixed bugs and implemented new features in popular JavaScript libraries</li>
    <li>Collaborated with developers worldwide through code reviews and discussions</li>
  </ul>
</div>
```

### Writing Effective Experience Descriptions

**Best Practices:**
- Use action verbs (Led, Developed, Implemented, Improved)
- Include specific numbers and metrics when possible
- Highlight technologies and tools used
- Focus on achievements and impact, not just responsibilities
- Use **bold** formatting for important keywords

## 🏆 Certificates Section

### Update Certificates and Achievements

**File**: `src/components/Certificates.jsx`

```jsx
<div className="card remove-underline">
  <a href="[Certificate URL or #]" target="_blank" rel="noopener noreferrer">
    <h5>[Certificate Name]</h5>
  </a>
  <p className="p-x-small">[Issuing Organization]</p>
</div>
```

### Certificate Examples

```jsx
// Professional Certifications
<div className="card remove-underline">
  <a href="https://www.credly.com/badges/your-badge-id" target="_blank" rel="noopener noreferrer">
    <h5>AWS Certified Solutions Architect</h5>
  </a>
  <p className="p-x-small">Amazon Web Services</p>
</div>

<div className="card remove-underline">
  <a href="https://coursera.org/verify/your-certificate-id" target="_blank" rel="noopener noreferrer">
    <h5>Google Cloud Professional Cloud Architect</h5>
  </a>
  <p className="p-x-small">Google Cloud</p>
</div>

// Online Course Certificates
<div className="card remove-underline">
  <a href="https://www.freecodecamp.org/certification/username/certificate" target="_blank" rel="noopener noreferrer">
    <h5>JavaScript Algorithms and Data Structures</h5>
  </a>
  <p className="p-x-small">freeCodeCamp</p>
</div>

<div className="card remove-underline">
  <a href="https://www.udemy.com/certificate/your-certificate-id" target="_blank" rel="noopener noreferrer">
    <h5>Complete React Developer Course</h5>
  </a>
  <p className="p-x-small">Udemy</p>
</div>

// Academic Achievements
<div className="card remove-underline">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <h5>Dean's List Recognition</h5>
  </a>
  <p className="p-x-small">University of California, Berkeley</p>
</div>

// Competition Awards
<div className="card remove-underline">
  <a href="https://devpost.com/software/your-project" target="_blank" rel="noopener noreferrer">
    <h5>First Place - University Hackathon 2023</h5>
  </a>
  <p className="p-x-small">UC Berkeley</p>
</div>
```

### Certificate Links

- **With URL**: Link to the actual certificate or verification page
- **Without URL**: Use `href="#"` for certificates without online verification
- **Badge Services**: Link to Credly, Acclaim, or other badge platforms
- **Course Platforms**: Link to Coursera, Udemy, edX verification pages

## 🚀 Projects Section

The projects section is divided into three categories, each in its own component:

### 1. Full Stack Projects

**File**: `src/components/FullstackProjects.jsx`

### 2. Frontend Projects

**File**: `src/components/FrontendProjects.jsx`

### 3. AI/ML/DL Projects

**File**: `src/components/AIMLDLProjects.jsx`

### Project Template

```jsx
<div className="card">
  <h3>[Project Name]</h3>
  <p><strong>Technologies Used:</strong> [Technology Stack]</p>
  <p><strong>Date Created:</strong> [Month Year]</p>
  <p><strong>Details:</strong> [Detailed project description including features, challenges solved, and impact]</p>
  
  {/* GitHub Link */}
  <a href="[GitHub Repository URL]" target="_blank" rel="noopener noreferrer">
    GitHub Link
  </a>
  
  {/* Live Demo Link (optional) */}
  <a href="[Live Demo URL]" target="_blank" rel="noopener noreferrer">
    Live Demo
  </a>
  
  {/* Project Screenshots */}
  <div className="project-images">
    <img src={`${process.env.PUBLIC_URL}/img/[project-folder]/s1.png`} 
         alt="[Project Name] Screenshot 1" />
    <img src={`${process.env.PUBLIC_URL}/img/[project-folder]/s2.png`} 
         alt="[Project Name] Screenshot 2" />
  </div>
</div>
```

### Project Examples

```jsx
// E-commerce Website
<div className="card">
  <h3>E-Commerce Platform</h3>
  <p><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB, Stripe API</p>
  <p><strong>Date Created:</strong> March 2023</p>
  <p><strong>Details:</strong> 
    Built a full-featured e-commerce platform with user authentication, product catalog, 
    shopping cart, and payment processing. Implemented admin dashboard for inventory management 
    and order tracking. Features include product search, filtering, user reviews, and 
    responsive design for mobile devices. Deployed on AWS with CI/CD pipeline.
  </p>
  
  <a href="https://github.com/yourusername/ecommerce-platform" target="_blank" rel="noopener noreferrer">
    GitHub Link
  </a>
  <a href="https://your-ecommerce-demo.netlify.app" target="_blank" rel="noopener noreferrer">
    Live Demo
  </a>
</div>

// Mobile App
<div className="card">
  <h3>Task Management Mobile App</h3>
  <p><strong>Technologies Used:</strong> React Native, Firebase, Redux, Expo</p>
  <p><strong>Date Created:</strong> January 2023</p>
  <p><strong>Details:</strong> 
    Developed a cross-platform mobile application for task management with real-time 
    synchronization. Features include task creation, categorization, due date reminders, 
    and team collaboration. Implemented push notifications and offline functionality. 
    Published on both iOS App Store and Google Play Store.
  </p>
  
  <a href="https://github.com/yourusername/task-manager-app" target="_blank" rel="noopener noreferrer">
    GitHub Link
  </a>
</div>

// Machine Learning Project
<div className="card">
  <h3>Stock Price Prediction Model</h3>
  <p><strong>Technologies Used:</strong> Python, TensorFlow, Pandas, NumPy, Flask, Chart.js</p>
  <p><strong>Date Created:</strong> September 2022</p>
  <p><strong>Details:</strong> 
    Developed a machine learning model to predict stock prices using LSTM neural networks. 
    Collected and preprocessed historical stock data from Yahoo Finance API. Built a web 
    interface to visualize predictions and model performance. Achieved 85% accuracy on 
    test data with real-time prediction capabilities.
  </p>
  
  <a href="https://github.com/yourusername/stock-prediction" target="_blank" rel="noopener noreferrer">
    GitHub Link
  </a>
</div>
```

### Adding Project Images

1. **Create a folder** in `public/img/` with your project name:
   ```
   public/img/my-project/
   ├── s1.png
   ├── s2.png
   └── s3.png
   ```

2. **Reference images** in your component:
   ```jsx
   <div className="project-images">
     <img src={`${process.env.PUBLIC_URL}/img/my-project/s1.png`} 
          alt="My Project Screenshot 1" />
     <img src={`${process.env.PUBLIC_URL}/img/my-project/s2.png`} 
          alt="My Project Screenshot 2" />
   </div>
   ```

3. **Image optimization tips**:
   - Use PNG for screenshots with text
   - Use JPG for photos
   - Compress images to reduce file size
   - Use consistent dimensions (recommended: 800x600px)

### Project Writing Tips

**Effective Project Descriptions:**
- Start with the problem you solved
- Mention key technologies and why you chose them
- Include specific features and functionality
- Highlight challenges overcome
- Mention metrics or impact when possible
- Keep descriptions concise but informative

**Technical Details to Include:**
- Architecture decisions
- Database design choices
- API integrations
- Performance optimizations
- Security implementations
- Testing strategies

## 🎨 Styling and Theming

### Color Scheme Customization

The website uses a clean, professional color scheme. You can customize colors in the CSS files:

**Primary Colors:**
- Green: Used for brand/name
- Orange: Used for Bio button
- Blue: Used for Projects button
- Gray: Used for Resume button

**Key CSS Files:**
- `src/css/button.css` - Button colors and styles
- `src/css/my-navbar.css` - Navigation bar styling
- `src/css/home.css` - Homepage layout and colors

### Typography Changes

**Font Family:**
The site uses Quicksand font. To change:

1. **Update font imports** in `public/index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300..700&display=swap" rel="stylesheet">
   ```

2. **Update CSS** in `src/index.css`:
   ```css
   body {
     font-family: 'YourFont', sans-serif;
   }
   ```

### Layout Modifications

**Responsive Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Key Layout Files:**
- `src/css/home.css` - Homepage two-column layout
- `src/css/bio.css` - Bio page sidebar and content
- `src/css/projects.css` - Projects page layout

## 🔧 Advanced Customization

### Adding New Sections

To add a new section to the bio page:

1. **Create a new component**:
   ```jsx
   // src/components/Awards.jsx
   import React from 'react';
   
   function Awards() {
     return (
       <div>
         <h3>Awards</h3>
         <div className="card">
           <h5>Award Name</h5>
           <p className="p-x-small">Awarding Organization</p>
           <p className="p-x-small">Year</p>
         </div>
       </div>
     );
   }
   
   export default Awards;
   ```

2. **Update Bio.jsx**:
   ```jsx
   import Awards from "./Awards.jsx"
   
   // Add to state options
   const [clickedButton, setClickedButton] = useState('Education');
   
   // Add button
   <button 
     className={`text-button ${clickedButton === 'Awards' ? 'active' : ''}`} 
     onClick={() => handleButtonClick('Awards')}
   >
     Awards
   </button>
   
   // Add conditional rendering
   { clickedButton === 'Awards' && <Awards/>}
   ```

### Custom Animations

Add CSS animations for enhanced user experience:

```css
/* Fade in animation */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide in animation */
.slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

### Dark Mode Implementation

To add dark mode support:

1. **Add theme context**
2. **Create CSS variables for colors**
3. **Add theme toggle button**
4. **Update all components to use theme**

## 📱 Mobile Optimization

### Responsive Design Checklist

- [ ] Navigation works on mobile
- [ ] Text is readable without zooming
- [ ] Buttons are touch-friendly (44px minimum)
- [ ] Images scale properly
- [ ] Content fits within viewport
- [ ] Social media icons are accessible

### Testing on Different Devices

**Browser Developer Tools:**
- Chrome DevTools device simulation
- Firefox Responsive Design Mode
- Safari Web Inspector

**Real Device Testing:**
- Test on actual smartphones and tablets
- Check different orientations
- Verify touch interactions

## 🔍 SEO Optimization

### Meta Tags Checklist

- [ ] Title tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Keywords meta tag
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Language declaration

### Content Optimization

- Use semantic HTML elements
- Include alt text for all images
- Use descriptive link text
- Optimize page loading speed
- Ensure mobile-friendly design

## 🚀 Performance Optimization

### Image Optimization

- Compress images before adding
- Use appropriate formats (WebP, PNG, JPG)
- Implement lazy loading for large images
- Use responsive images with srcset

### Code Optimization

- Remove unused dependencies
- Minimize bundle size
- Use code splitting
- Implement caching strategies

## 📊 Analytics and Tracking

### Google Analytics Setup

1. **Create Google Analytics account**
2. **Get tracking ID**
3. **Add tracking code to index.html**
4. **Set up goals and conversions**

### Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Track user engagement metrics
- Monitor error rates

---

**Need Help?** 

If you need assistance with any customization:
1. Check the troubleshooting section in README.md
2. Review the code comments for guidance
3. Test changes locally before deploying
4. Keep backups of working versions

**Happy Customizing! 🎨**

