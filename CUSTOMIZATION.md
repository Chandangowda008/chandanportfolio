# 📝 Customization Guide

How to make this portfolio your own!

## 🎯 Quick Customization Checklist

- [ ] Update personal information
- [ ] Change color scheme (optional)
- [ ] Add your projects
- [ ] Update skills
- [ ] Add your resume
- [ ] Update contact links
- [ ] Add your experience details

---

## 1. Update Personal Information

### Bio Section
**File**: `src/components/sections/BioSection.jsx`

```javascript
// Update your name
<span className="text-retro-lightest font-bold text-glow">YOUR NAME</span>

// Update your description
<p>
  Your custom introduction text here...
</p>

// Update stats
<p className="text-retro-lightest">Your Role</p>
<p className="text-retro-lightest">Your Company</p>
```

---

## 2. Update Skills

**File**: `src/components/sections/SkillsSection.jsx`

```javascript
const skillCategories = [
  {
    category: 'FRONTEND',
    skills: ['React', 'Vue', 'Angular'], // Add your skills
    color: 'text-blue-400'
  },
  // Add more categories...
];
```

**Tips:**
- Add/remove skill categories as needed
- Keep skill names concise
- Use relevant color classes

---

## 3. Add Your Projects

**File**: `src/components/sections/ProjectsSection.jsx`

```javascript
const projects = [
  {
    title: 'Your Project Name',
    tech: 'Tech Stack Used',
    description: 'Brief project description...',
    highlights: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
    status: 'COMPLETED', // or 'IN PROGRESS'
    statusColor: 'text-green-400' // or 'text-yellow-400'
  },
  // Add more projects...
];
```

---

## 4. Update Experience

**File**: `src/components/sections/ExperienceSection.jsx`

```javascript
// Update company and role
<h3>💼 Your Job Title</h3>
<p>Your Company Name</p>

// Update responsibilities
{[
  'Your responsibility 1',
  'Your responsibility 2',
  // Add more...
].map((item, idx) => (...))}

// Update tech stack
{['React', 'Node', 'MongoDB'].map(...)} // Your technologies
```

**Adding Multiple Jobs:**
Create an array and map through it:
```javascript
const experiences = [
  {
    title: 'Software Developer',
    company: 'Company A',
    period: '2024 - Present',
    responsibilities: [...],
    technologies: [...]
  },
  // Add more jobs...
];
```

---

## 5. Update Achievements

**File**: `src/components/sections/AchievementsSection.jsx`

```javascript
const achievements = [
  {
    title: 'Your Achievement',
    description: 'What you accomplished',
    icon: '🏆', // Choose any emoji
    points: 500
  },
  // Add more...
];

const stats = [
  { label: 'Projects', value: '10+', color: 'text-green-400' },
  // Update with your stats...
];
```

---

## 6. Update Contact Information

**File**: `src/components/sections/ContactSection.jsx`

```javascript
const contactMethods = [
  {
    icon: '📧',
    label: 'EMAIL',
    value: 'your.email@example.com', // Your email
    action: 'mailto:your.email@example.com'
  },
  {
    icon: '💼',
    label: 'LINKEDIN',
    value: '/in/yourprofile', // Your LinkedIn
    action: 'https://linkedin.com/in/yourprofile'
  },
  {
    icon: '🐱',
    label: 'GITHUB',
    value: '/yourusername', // Your GitHub
    action: 'https://github.com/yourusername'
  },
  // Update all contact methods...
];
```

---

## 7. Add Resume Download

### Step 1: Add your resume
1. Place `resume.pdf` in the `public` folder
2. Rename it to exactly: `resume.pdf`

### Step 2: Update the download function
**File**: `src/components/sections/ContactSection.jsx`

```javascript
const handleDownloadResume = () => {
  // Replace with your resume file name
  window.open('/resume.pdf', '_blank');
};
```

---

## 8. Customize Colors (Optional)

**File**: `tailwind.config.js`

### GameBoy Green (Default)
```javascript
colors: {
  'retro-bg': '#0f380f',
  'retro-light': '#306230',
  'retro-lighter': '#8bac0f',
  'retro-lightest': '#9bbc0f',
  'retro-text': '#0f380f',
}
```

### Alternative Color Schemes

**Purple/Pink (Vaporwave):**
```javascript
colors: {
  'retro-bg': '#1a0033',
  'retro-light': '#4a0066',
  'retro-lighter': '#b300ff',
  'retro-lightest': '#ff00ff',
  'retro-text': '#1a0033',
}
```

**Blue/Cyan (Neo):**
```javascript
colors: {
  'retro-bg': '#001a33',
  'retro-light': '#003366',
  'retro-lighter': '#0099cc',
  'retro-lightest': '#00ccff',
  'retro-text': '#001a33',
}
```

**Red/Orange (Fire):**
```javascript
colors: {
  'retro-bg': '#330000',
  'retro-light': '#660000',
  'retro-lighter': '#ff3300',
  'retro-lightest': '#ff6600',
  'retro-text': '#330000',
}
```

---

## 9. Update Page Title & SEO

**File**: `index.html`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description for search engines">
<meta name="keywords" content="your, keywords, here">
```

---

## 10. Customize Sidebar Menu

**File**: `src/components/Sidebar.jsx`

```javascript
const menuItems = [
  { id: 'bio', label: 'ABOUT', icon: '👤' },
  { id: 'skills', label: 'SKILLS', icon: '⚡' },
  // Add/remove/reorder sections...
  { id: 'custom', label: 'CUSTOM', icon: '🎯' }, // New section
];
```

**To add a new section:**
1. Add menu item above
2. Create new component: `src/components/sections/CustomSection.jsx`
3. Import in `MainPanel.jsx`
4. Add case in switch statement

---

## 11. Change Font Size

For better readability, you can adjust font sizes:

**File**: `src/components/Sidebar.jsx`

```javascript
// Change button text size
text-xs  // default
text-sm  // slightly larger
text-base // even larger
```

**File**: Each section component

```javascript
text-[10px] // default for body text
text-xs     // larger
text-sm     // even larger
```

---

## 12. Add More Animations

**File**: `tailwind.config.js`

```javascript
animation: {
  'bounce-slow': 'bounce 3s infinite',
  'spin-slow': 'spin 3s linear infinite',
  // Add more custom animations
}
```

Use in components:
```javascript
<div className="animate-bounce-slow">
  Content with animation
</div>
```

---

## 13. Responsive Adjustments

Current breakpoints:
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)

Example:
```javascript
<div className="text-xs md:text-sm lg:text-base">
  Responsive text
</div>
```

---

## 14. Add Social Media Icons

Install React Icons (optional):
```powershell
npm install react-icons
```

Use in components:
```javascript
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

<FaGithub className="text-2xl" />
```

---

## 🎨 Pro Tips

### Keep It Professional
- Use clear, concise language
- Proofread all content
- Keep descriptions short but informative
- Use active voice ("Built" not "Was built")

### Performance
- Optimize images before adding them
- Keep component file sizes reasonable
- Avoid excessive animations
- Test on slow connections

### Accessibility
- Ensure good color contrast
- Add alt text to images
- Test keyboard navigation
- Use semantic HTML

### Version Control
Before making big changes:
```powershell
git checkout -b customization
# Make changes
git add .
git commit -m "Customize portfolio content"
# Test thoroughly
git checkout main
git merge customization
```

---

## 🔥 Quick Wins

1. **Update contact info** (5 min)
2. **Add your projects** (15 min)
3. **Update bio text** (10 min)
4. **Add resume PDF** (5 min)
5. **Test all links** (5 min)

**Total time to customize: ~40 minutes**

---

## Need Help?

Check these files for examples:
- 📄 README.md - Overall guide
- 📄 DEPLOYMENT.md - Deployment help
- 🔍 Each section component - Code examples

---

**Happy Customizing! 🎮**
