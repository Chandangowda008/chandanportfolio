# 🚀 Vercel Deployment Guide

Complete step-by-step guide to deploy your Retro Portfolio on Vercel.

## Prerequisites
- ✅ GitHub account
- ✅ Vercel account (free)
- ✅ Your portfolio code ready

---

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `retro-portfolio` (or any name you prefer)
   - Keep it public or private
   - Don't initialize with README (we already have one)

2. **Push your local code to GitHub:**

Open PowerShell in your portfolio folder and run:

```powershell
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Retro portfolio setup"

# Set main branch
git branch -M main

# Add remote origin (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Project:**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find your `retro-portfolio` repository
   - Click "Import"

### Step 3: Configure Build Settings

Vercel should auto-detect Vite, but verify these settings:

```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 1-2 minutes for build to complete
3. You'll see "Congratulations! Your project has been deployed"
4. Click "Visit" to see your live site

### Step 5: Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain or use the free `.vercel.app` domain

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Login

```powershell
vercel login
```

Choose your preferred login method (GitHub recommended).

### Step 3: Deploy

Navigate to your portfolio folder:

```powershell
cd c:\Users\CHANDAN\OneDrive\Desktop\portfolio
```

**For preview deployment:**
```powershell
vercel
```

**For production deployment:**
```powershell
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- What's your project's name? `retro-portfolio`
- In which directory is your code located? `./`

### Step 4: Access Your Site

After deployment, you'll get a URL like:
```
https://retro-portfolio-abc123.vercel.app
```

---

## Method 3: Deploy via Git Integration

### Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch to production
- ✅ Deploy pull requests as preview deployments
- ✅ Show build status on GitHub

To set this up:
1. Connect your repo as shown in Method 1
2. Every `git push` will trigger a new deployment

---

## Post-Deployment Checklist

### ✅ Verify Everything Works
- [ ] Check all navigation links
- [ ] Test all sections (Bio, Skills, Projects, etc.)
- [ ] Verify fonts are loading (Press Start 2P)
- [ ] Check animations and transitions
- [ ] Test on different screen sizes
- [ ] Verify contact links work

### ✅ Update Contact Information
1. Edit `src/components/sections/ContactSection.jsx`
2. Replace placeholder email/links with your real ones:
   - Email
   - LinkedIn
   - GitHub
   - Twitter

3. Commit and push:
```powershell
git add .
git commit -m "Update contact information"
git push
```

### ✅ Add Resume Download
1. Add your `resume.pdf` to the `public` folder
2. Update the download function in `ContactSection.jsx`:
```javascript
const handleDownloadResume = () => {
  window.open('/resume.pdf', '_blank');
};
```
3. Commit and push changes

### ✅ SEO Optimization
Update `index.html`:
```html
<title>Chandan K | Software Developer</title>
<meta name="description" content="Software Developer specializing in MERN stack, AWS, and CI/CD">
```

---

## Troubleshooting

### Build Fails
**Error**: `Command "npm run build" exited with 1`

**Solutions:**
1. Check your `package.json` scripts
2. Run `npm run build` locally to see errors
3. Make sure all imports are correct
4. Check for TypeScript errors if using TS

### Styles Not Loading
**Issue**: Site looks broken, no colors

**Solutions:**
1. Verify `tailwind.config.js` is in root
2. Check `postcss.config.js` exists
3. Ensure `src/index.css` has Tailwind directives

### Images Not Loading
**Issue**: Images return 404

**Solutions:**
1. Put images in `public` folder
2. Reference them as `/image.png` (not `./image.png`)
3. Redeploy after adding images

### Google Fonts Not Loading
**Issue**: Press Start 2P not showing

**Solution:**
- Check internet connection
- Verify link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

---

## Managing Your Deployment

### View Deployments
```powershell
vercel ls
```

### View Logs
```powershell
vercel logs [deployment-url]
```

### Remove Project
```powershell
vercel remove retro-portfolio
```

### Environment Variables
Add via dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variable name and value
4. Redeploy for changes to take effect

---

## Performance Tips

### 1. Enable Analytics
- Go to Vercel Dashboard → Your Project
- Click "Analytics" tab
- View performance metrics for free

### 2. Optimize Images
- Use WebP format
- Compress images before adding to `public` folder
- Consider lazy loading for heavy images

### 3. Enable Compression
Vercel does this automatically, but verify:
- Brotli compression for text
- Gzip fallback
- Asset minification

---

## Custom Domain Setup

### Using Vercel Domain
Your site automatically gets:
```
https://your-project-name.vercel.app
```

### Using Your Own Domain

1. **Buy a domain** (Namecheap, GoDaddy, etc.)

2. **Add to Vercel:**
   - Project Settings → Domains
   - Click "Add"
   - Enter your domain: `yourdomain.com`

3. **Update DNS Records:**
   Add these records in your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for verification** (can take up to 48 hours)

---

## Continuous Deployment Workflow

```
Local Changes → Commit → Push to GitHub → Auto Deploy on Vercel
```

**Recommended Git Workflow:**
```powershell
# Make changes to your code

# Check status
git status

# Add changes
git add .

# Commit with meaningful message
git commit -m "Add new project to Projects section"

# Push to GitHub (triggers automatic deployment)
git push

# Check deployment status on Vercel dashboard
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

**Deployment Complete! 🎉**

Your retro portfolio is now live on the internet!

Share your link:
```
https://your-project-name.vercel.app
```
