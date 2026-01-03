# 🎯 EXACT FILES TO EDIT - STEP BY STEP

## 📍 Your Portfolio Location
```
c:\Users\CHANDAN\OneDrive\Desktop\portfolio\
```

## 🎬 To Start
```powershell
cd c:\Users\CHANDAN\OneDrive\Desktop\portfolio
npm run dev
# Wait for "Local:   http://localhost:5173/"
# Open that URL in your browser
```

---

## 📝 FILES TO EDIT (6 TOTAL)

### 1️⃣ BioSection.jsx - YOUR NAME & INTRODUCTION

**File Path**: 
```
src/components/sections/BioSection.jsx
```

**Find & Replace**:

```jsx
// LINE 8 - Change this:
<span className="text-retro-lightest font-bold text-glow">
  CHANDAN K
</span>

// To this (your name):
<span className="text-retro-lightest font-bold text-glow">
  YOUR NAME HERE
</span>
```

```jsx
// LINES 11-18 - Change the bio text:

// FROM:
<p>
  Hello! I'm <span className="text-retro-lightest font-bold text-glow">CHANDAN K</span>,
  a passionate Software Developer Intern specializing in full-stack web development.
</p>

<p>
  I build modern web applications using the MERN stack, with expertise in React,
  Node.js, and cloud technologies.
</p>

// TO:
<p>
  Your introduction here...
</p>

<p>
  More details about yourself...
</p>
```

```jsx
// LINES 24-32 - Update your stats:

// Change:
<div className="bg-retro-bg border-2 border-retro-lighter p-3">
  <p className="mb-1">ROLE:</p>
  <p className="text-retro-lightest">Software Dev Intern</p>
</div>

// To:
<div className="bg-retro-bg border-2 border-retro-lighter p-3">
  <p className="mb-1">ROLE:</p>
  <p className="text-retro-lightest">Your Role</p>
</div>
```

---

### 2️⃣ SkillsSection.jsx - YOUR SKILLS

**File Path**: 
```
src/components/sections/SkillsSection.jsx
```

**Find & Replace** (Lines 3-27):

```jsx
// OLD:
const skillCategories = [
  {
    category: 'FRONTEND',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
    color: 'text-blue-400'
  },
  {
    category: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    color: 'text-green-400'
  },
  // ... more categories
];

// NEW:
const skillCategories = [
  {
    category: 'FRONTEND',
    skills: ['Your Skill 1', 'Your Skill 2', 'Your Skill 3'],
    color: 'text-blue-400'
  },
  {
    category: 'YOUR CATEGORY',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    color: 'text-green-400'
  },
  // Add more categories as needed
];
```

---

### 3️⃣ ProjectsSection.jsx - YOUR PROJECTS

**File Path**: 
```
src/components/sections/ProjectsSection.jsx
```

**Find & Replace** (Lines 3-30):

```jsx
// OLD:
const projects = [
  {
    title: 'Exam Room Allocation System',
    tech: 'MERN Stack',
    description: 'A comprehensive web application...',
    highlights: [
      'Built with React, Node.js, Express, MongoDB',
      'Real-time seat allocation algorithm',
      'Admin dashboard for management',
      'PDF report generation'
    ],
    status: 'COMPLETED',
    statusColor: 'text-green-400'
  },
  // ... more projects
];

// NEW:
const projects = [
  {
    title: 'Your Project Name',
    tech: 'Technology Stack Used',
    description: 'What you built and why...',
    highlights: [
      'Feature or achievement 1',
      'Feature or achievement 2',
      'Feature or achievement 3',
      'Feature or achievement 4'
    ],
    status: 'COMPLETED', // or 'IN PROGRESS'
    statusColor: 'text-green-400' // text-green-400 or text-yellow-400
  },
  {
    title: 'Another Project',
    tech: 'React, Node, MongoDB',
    description: 'Another project description...',
    highlights: [
      'Feature 1',
      'Feature 2'
    ],
    status: 'IN PROGRESS',
    statusColor: 'text-yellow-400'
  }
];
```

---

### 4️⃣ ExperienceSection.jsx - YOUR JOB EXPERIENCE

**File Path**: 
```
src/components/sections/ExperienceSection.jsx
```

**Find & Replace** (Lines 10-12):

```jsx
// OLD:
<h3 className="text-retro-lightest text-sm mb-1">
  💼 Software Developer Intern
</h3>
<p className="text-blue-400 text-[10px]">
  Aulosa
</p>

// NEW:
<h3 className="text-retro-lightest text-sm mb-1">
  💼 Your Job Title
</h3>
<p className="text-blue-400 text-[10px]">
  Your Company Name
</p>
```

**Find & Replace** (Lines 23-30 - Responsibilities):

```jsx
// OLD:
{[
  'Develop and maintain full-stack web applications using MERN stack',
  'Implement CI/CD pipelines for automated deployment',
  'Work with AWS and Azure cloud services for application hosting',
  'Collaborate with cross-functional teams in Agile environment',
  'Write clean, maintainable, and well-documented code',
  'Participate in code reviews and technical discussions'
].map((item, idx) => (...))}

// NEW:
{[
  'Your responsibility 1',
  'Your responsibility 2',
  'Your responsibility 3',
  'Your responsibility 4'
].map((item, idx) => (...))}
```

**Find & Replace** (Lines 41-42 - Tech Stack):

```jsx
// OLD:
{['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Azure', 'Git', 'Docker'].map(...)}

// NEW:
{['Your Tech 1', 'Your Tech 2', 'Your Tech 3', 'Your Tech 4'].map(...)}
```

---

### 5️⃣ AchievementsSection.jsx - YOUR STATS & ACHIEVEMENTS

**File Path**: 
```
src/components/sections/AchievementsSection.jsx
```

**Find & Replace** (Lines 3-19):

```jsx
// OLD:
const achievements = [
  {
    title: 'Full-Stack Mastery',
    description: 'Successfully built and deployed multiple MERN stack applications',
    icon: '🏆',
    points: 500
  },
  // ... more achievements
];

// NEW:
const achievements = [
  {
    title: 'Your Achievement 1',
    description: 'What you accomplished...',
    icon: '🏆', // Use any emoji
    points: 500
  },
  {
    title: 'Your Achievement 2',
    description: 'What you accomplished...',
    icon: '⚡',
    points: 400
  }
];
```

**Find & Replace** (Lines 22-27 - Statistics):

```jsx
// OLD:
const stats = [
  { label: 'Projects Completed', value: '10+', color: 'text-green-400' },
  { label: 'Technologies Mastered', value: '15+', color: 'text-blue-400' },
  { label: 'Code Commits', value: '500+', color: 'text-yellow-400' },
  { label: 'Problems Solved', value: '100+', color: 'text-purple-400' }
];

// NEW:
const stats = [
  { label: 'Your Stat 1', value: 'Your Value', color: 'text-green-400' },
  { label: 'Your Stat 2', value: 'Your Value', color: 'text-blue-400' },
  { label: 'Your Stat 3', value: 'Your Value', color: 'text-yellow-400' },
  { label: 'Your Stat 4', value: 'Your Value', color: 'text-purple-400' }
];
```

---

### 6️⃣ ContactSection.jsx - YOUR CONTACT INFORMATION

**File Path**: 
```
src/components/sections/ContactSection.jsx
```

**Find & Replace** (Lines 3-22):

```jsx
// OLD:
const contactMethods = [
  {
    icon: '📧',
    label: 'EMAIL',
    value: 'chandan.dev@example.com',
    action: 'mailto:chandan.dev@example.com'
  },
  {
    icon: '💼',
    label: 'LINKEDIN',
    value: '/in/chandank',
    action: 'https://linkedin.com/in/chandank'
  },
  {
    icon: '🐱',
    label: 'GITHUB',
    value: '/chandank',
    action: 'https://github.com/chandank'
  },
  {
    icon: '🐦',
    label: 'TWITTER',
    value: '@chandank_dev',
    action: 'https://twitter.com/chandank_dev'
  }
];

// NEW:
const contactMethods = [
  {
    icon: '📧',
    label: 'EMAIL',
    value: 'your.email@example.com',
    action: 'mailto:your.email@example.com'
  },
  {
    icon: '💼',
    label: 'LINKEDIN',
    value: '/in/yourprofile',
    action: 'https://linkedin.com/in/yourprofile'
  },
  {
    icon: '🐱',
    label: 'GITHUB',
    value: '/yourusername',
    action: 'https://github.com/yourusername'
  },
  {
    icon: '🐦',
    label: 'TWITTER',
    value: '@your_handle',
    action: 'https://twitter.com/your_handle'
  }
];
```

---

## 📄 ADD YOUR RESUME

**What to do**:
1. Save your resume as `resume.pdf`
2. Place it in the `public` folder

**Path**:
```
c:\Users\CHANDAN\OneDrive\Desktop\portfolio\public\resume.pdf
```

**Note**: If `public` folder doesn't exist, create it first.

---

## 🎨 OPTIONAL: CHANGE COLORS

**File Path**: 
```
tailwind.config.js
```

**Find** (Lines 6-12):
```javascript
colors: {
  'retro-bg': '#0f380f',
  'retro-light': '#306230',
  'retro-lighter': '#8bac0f',
  'retro-lightest': '#9bbc0f',
  'retro-text': '#0f380f',
}
```

**Replace with** (Example - Purple theme):
```javascript
colors: {
  'retro-bg': '#1a0033',
  'retro-light': '#4a0066',
  'retro-lighter': '#b300ff',
  'retro-lightest': '#ff00ff',
  'retro-text': '#1a0033',
}
```

Then restart: `npm run dev`

---

## ✅ EDITING WORKFLOW

1. **Open VS Code**:
   ```powershell
   code c:\Users\CHANDAN\OneDrive\Desktop\portfolio
   ```

2. **Start dev server** (in terminal):
   ```powershell
   npm run dev
   ```

3. **View at**: http://localhost:5173

4. **Edit a file** (e.g., BioSection.jsx)

5. **Save** (Ctrl+S)

6. **Watch page update live!**

7. **Repeat** for other files

---

## 📋 EDITING CHECKLIST

- [ ] Edit BioSection.jsx
- [ ] Edit SkillsSection.jsx  
- [ ] Edit ProjectsSection.jsx
- [ ] Edit ExperienceSection.jsx
- [ ] Edit AchievementsSection.jsx
- [ ] Edit ContactSection.jsx
- [ ] Add resume.pdf to public/
- [ ] Test all sections in browser
- [ ] Check mobile view
- [ ] Run `npm run build`
- [ ] Ready to deploy!

---

## 🚀 NEXT STEPS

After editing all files:

1. **Test locally**:
   ```powershell
   npm run build
   npm run preview
   ```

2. **Push to GitHub**:
   ```powershell
   git add .
   git commit -m "Customize portfolio"
   git push
   ```

3. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Import GitHub repo
   - Click Deploy
   - **Done! 🎉**

---

**Happy editing! Your portfolio will be amazing! ✨**
