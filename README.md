# 🎮 Retro Pixel-Art Developer Portfolio

A retro GameBoy-inspired developer portfolio built with React, Vite, and Tailwind CSS.

## 👤 Profile
- **Name**: Chandan K
- **Role**: Software Developer Intern
- **Company**: Aulosa
- **Stack**: React, MERN, CI/CD, AWS, Azure

## ✨ Features
- 🎨 Retro pixel-art design inspired by classic GameBoy aesthetics
- 🎯 Clean, component-based architecture
- 📱 Responsive layout (optimized for desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📦 Easy to customize and deploy

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Sidebar.jsx
│   │   ├── MainPanel.jsx
│   │   └── sections/    # Content sections
│   │       ├── BioSection.jsx
│   │       ├── SkillsSection.jsx
│   │       ├── ProjectsSection.jsx
│   │       ├── ExperienceSection.jsx
│   │       ├── AchievementsSection.jsx
│   │       └── ContactSection.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Update Profile Information

Edit the content in each section component:
- **Bio**: `src/components/sections/BioSection.jsx`
- **Skills**: `src/components/sections/SkillsSection.jsx`
- **Projects**: `src/components/sections/ProjectsSection.jsx`
- **Experience**: `src/components/sections/ExperienceSection.jsx`
- **Achievements**: `src/components/sections/AchievementsSection.jsx`
- **Contact**: `src/components/sections/ContactSection.jsx`

### Change Color Scheme

Edit `tailwind.config.js`:
```javascript
colors: {
  'retro-bg': '#0f380f',        // Background
  'retro-light': '#306230',     // Light background
  'retro-lighter': '#8bac0f',   // Lighter shade
  'retro-lightest': '#9bbc0f',  // Lightest shade
  'retro-text': '#0f380f',      // Text color
}
```

### Add Resume Download

1. Add your resume PDF to the `public` folder (e.g., `public/resume.pdf`)
2. Update the download button in `ContactSection.jsx`:
```javascript
const handleDownloadResume = () => {
  window.open('/resume.pdf', '_blank');
};
```

## 🌐 Deployment on Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Go to [Vercel](https://vercel.com):**
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project:**
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Environment Variables (if needed)
If you add any API integrations later:
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy

## 🔧 Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Font**: Press Start 2P (Google Fonts)
- **Deployment**: Vercel

## 📝 Future Enhancements
- [ ] Add keyboard navigation (Arrow keys / WASD)
- [ ] Mobile responsive improvements
- [ ] Add sound effects (optional)
- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Contact form backend integration
- [ ] Loading screen animation
- [ ] SEO optimization

## 🐛 Troubleshooting

**Issue**: Styles not loading
- Solution: Make sure Tailwind is configured properly and `npm run dev` is running

**Issue**: Build fails
- Solution: Run `npm install` to ensure all dependencies are installed

**Issue**: Fonts not displaying
- Solution: Check your internet connection (Google Fonts requires internet)

## 📄 License
MIT License - Feel free to use this portfolio template for your own projects!

## 🤝 Contributing
Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact
- **Email**: chandan.dev@example.com
- **LinkedIn**: [linkedin.com/in/chandank](https://linkedin.com/in/chandank)
- **GitHub**: [github.com/chandank](https://github.com/chandank)

---

Made with ❤️ and retro vibes by Chandan K
