# 🎮 RETRO PORTFOLIO - QUICK REFERENCE CHEAT SHEET

## 🚀 Start Here (5 minutes)

```powershell
# 1. Navigate to project
cd c:\Users\CHANDAN\OneDrive\Desktop\portfolio

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173

# 4. See retro portfolio!
```

---

## 📝 Files to Edit (40 minutes)

| File | What to Edit | Line Numbers |
|------|--------------|--------------|
| `BioSection.jsx` | Your name & bio | 8, 11-18, 24-32 |
| `SkillsSection.jsx` | Your skills | 3-27 |
| `ProjectsSection.jsx` | Your projects | 3-30 |
| `ExperienceSection.jsx` | Your job & tasks | 10-12, 23-30, 41-42 |
| `AchievementsSection.jsx` | Your stats | 3-19, 22-27 |
| `ContactSection.jsx` | Your email & links | 3-22 |
| `public/resume.pdf` | Add your resume | (new file) |

---

## 🛠️ Essential Commands

```powershell
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production locally

# Git
git init                 # Initialize git
git add .                # Stage all changes
git commit -m "msg"      # Commit changes
git push                 # Push to GitHub
git status               # Check status

# Other
npm install              # Install dependencies
npm install -g vercel    # Install Vercel CLI
vercel --prod            # Deploy to Vercel
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          ← Menu (don't edit)
│   ├── MainPanel.jsx        ← Layout (don't edit)
│   └── sections/
│       ├── BioSection.jsx        ← EDIT
│       ├── SkillsSection.jsx     ← EDIT
│       ├── ProjectsSection.jsx   ← EDIT
│       ├── ExperienceSection.jsx ← EDIT
│       ├── AchievementsSection.jsx ← EDIT
│       └── ContactSection.jsx    ← EDIT
├── App.jsx               ← Main (don't edit)
├── main.jsx              ← Entry (don't edit)
└── index.css             ← Styles (don't edit unless customizing)

public/
└── resume.pdf            ← ADD YOUR RESUME HERE

Config Files (optional editing):
├── tailwind.config.js    ← Colors (optional)
├── package.json          ← Don't edit
├── vite.config.js        ← Don't edit
└── index.html            ← Title only
```

---

## 🎨 Quick Customizations

### Change Your Name (BioSection.jsx)
```jsx
// Line 8
<span className="text-retro-lightest font-bold text-glow">
  YOUR NAME HERE
</span>
```

### Update Skills (SkillsSection.jsx)
```jsx
// Line 3
const skillCategories = [
  {
    category: 'FRONTEND',
    skills: ['React', 'Your Skill', 'Another Skill'],
  }
];
```

### Add Project (ProjectsSection.jsx)
```jsx
// Line 3
const projects = [
  {
    title: 'Your Project Name',
    tech: 'React, Node.js',
    description: 'What you built...',
    highlights: ['Feature 1', 'Feature 2'],
    status: 'COMPLETED',
    statusColor: 'text-green-400'
  }
];
```

### Update Contact (ContactSection.jsx)
```jsx
// Line 3
const contactMethods = [
  {
    icon: '📧',
    label: 'EMAIL',
    value: 'your.email@example.com',
    action: 'mailto:your.email@example.com'
  }
];
```

### Change Colors (tailwind.config.js)
```js
// Line 6
colors: {
  'retro-bg': '#0f380f',      // Dark background
  'retro-light': '#306230',   // Light background
  'retro-lighter': '#8bac0f', // Lighter shade
  'retro-lightest': '#9bbc0f',// Light text
}
```

---

## ✅ Pre-Deployment Checklist

- [ ] All sections customized
- [ ] Local `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] resume.pdf added to public/
- [ ] All links work correctly
- [ ] Tested in browser
- [ ] Code pushed to GitHub
- [ ] Vercel project created

---

## 🚀 Deployment in 3 Steps

### Step 1: Push to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/retro-portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel
- Go to https://vercel.com
- Click "Add New Project"
- Import your GitHub repo

### Step 3: Deploy
- Click "Deploy"
- Wait 2 minutes
- **Done!** Share your URL 🎉

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Port already in use | `npm run dev -- --port 3000` |
| Styles not loading | Restart server with `npm run dev` |
| Build fails | Run `npm install` then `npm run build` |
| Git not working | Update git config with username/email |
| Fonts not showing | Check internet (Google Fonts needs it) |

---

## 📊 File Sizes (After Build)

```
Total: 54 KB (gzipped)
├─ JavaScript: 50 KB
├─ CSS: 3.3 KB
└─ HTML: 0.4 KB

Load Time: < 1 second ✅
```

---

## 🎯 Recommended Edit Order

1. **BioSection** (5 min)
   - Change name
   - Update bio text
   - Update stats

2. **SkillsSection** (10 min)
   - Add your skills
   - Remove skills you don't have

3. **ProjectsSection** (15 min)
   - Add your real projects
   - Update descriptions
   - Change status

4. **ExperienceSection** (5 min)
   - Update company/role
   - Update responsibilities

5. **AchievementsSection** (3 min)
   - Update stats

6. **ContactSection** (2 min)
   - Update email
   - Update LinkedIn
   - Update GitHub

7. **Add resume.pdf** (1 min)
   - Drag & drop to public/

**Total Time: ~45 minutes to full customization**

---

## 💾 Save & Test Workflow

```powershell
# 1. Make changes in VS Code

# 2. Save file (Ctrl+S)

# 3. Check live preview (localhost:5173)
#    Page auto-refreshes!

# 4. When happy, stage changes
git add .

# 5. Commit
git commit -m "Update skills"

# 6. Push (if deployed)
git push
```

---

## 🌐 After Deployment

### Share Your Link
```
https://your-project-name.vercel.app

Share on:
- LinkedIn profile
- GitHub readme
- Resume/CV
- Email signature
- Job applications
```

### Monitor Performance
- View Vercel Analytics dashboard
- Check Core Web Vitals
- Monitor traffic

### Update Content
```powershell
# Edit files locally
# Test with npm run dev
# Build with npm run build
# Push to GitHub
# Vercel auto-deploys! 🚀
```

---

## 📱 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ⚠️ Limited |

---

## 🎓 Learn More

- **React Basics**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite Guide**: https://vitejs.dev/guide/
- **Vercel Docs**: https://vercel.com/docs

---

## 🆘 Need Help?

1. **Check documentation**: README.md, CUSTOMIZATION.md, DEPLOYMENT.md
2. **Search error**: Google the error message
3. **Restart everything**: Kill server, clear cache, restart
4. **Ask ChatGPT**: Paste error and ask for help
5. **Check GitHub Issues**: Search similar problems

---

## 🎉 You've Got This!

- ✅ Setup complete
- ✅ Code ready
- ✅ Just customize & deploy
- ✅ Impress recruiters

**Next step**: Edit BioSection.jsx with your name!

```powershell
# Open in VS Code
code .

# Edit src/components/sections/BioSection.jsx
# Change "CHANDAN K" to your name
# Save and see it update live!
```

---

**Happy coding! 🚀**

This portfolio will showcase your skills perfectly! ✨
