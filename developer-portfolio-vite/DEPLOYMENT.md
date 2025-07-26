# Deployment Guide

This guide will walk you through setting up automatic deployment to Vercel with CI/CD using GitHub Actions.

## 🚀 Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Node.js 18+ installed locally

## 📋 Step-by-Step Setup

### Step 1: Fork and Clone Repository

1. **Fork this repository** on GitHub
2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/developer-portfolio-vite.git
   cd developer-portfolio-vite
   ```

### Step 2: Set Up Vercel Project

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Import your forked repository
   - Leave default settings (Vite will be auto-detected)
   - Click "Deploy"

3. **Get Project Configuration**
   - Go to your project dashboard
   - Click "Settings" → "General"
   - Note down:
     - Project ID (in URL or settings)
     - Team ID/Organization ID

4. **Generate Vercel Token**
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Name it "GitHub Actions"
   - Select appropriate scope
   - Copy the token (save it securely)

### Step 3: Configure GitHub Secrets

1. **Go to your GitHub repository**
   - Navigate to Settings → Secrets and variables → Actions

2. **Add Repository Secrets**
   Click "New repository secret" and add these three secrets:

   ```
   VERCEL_TOKEN
   Value: [Your Vercel token from Step 2.4]
   
   VERCEL_ORG_ID
   Value: [Your Team/Organization ID from Step 2.3]
   
   VERCEL_PROJECT_ID
   Value: [Your Project ID from Step 2.3]
   ```

### Step 4: Customize Your Portfolio

1. **Update Personal Information**
   
   Edit `src/components/Hero.jsx`:
   ```jsx
   <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
   <h2>Your Title</h2>
   ```

   Edit `src/components/About.jsx`:
   ```jsx
   const skills = [
     { name: 'JavaScript', level: 90 },
     { name: 'React', level: 85 },
     // Add your skills
   ];
   ```

   Edit `src/components/Projects.jsx`:
   ```jsx
   const projects = [
     {
       title: 'Your Project',
       description: 'Description of your project',
       githubUrl: 'https://github.com/yourusername/project',
       liveUrl: 'https://your-project.com',
       // Update with your projects
     }
   ];
   ```

   Edit `src/components/Contact.jsx`:
   ```jsx
   // Update email, social links, and contact information
   ```

2. **Update Environment Variables** (Optional)
   
   Create `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your information:
   ```env
   VITE_APP_TITLE="Your Portfolio"
   VITE_CONTACT_EMAIL="your.email@example.com"
   VITE_GITHUB_URL="https://github.com/yourusername"
   VITE_LINKEDIN_URL="https://linkedin.com/in/yourusername"
   VITE_TWITTER_URL="https://twitter.com/yourusername"
   ```

### Step 5: Test Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Step 6: Deploy

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Customize portfolio with personal information"
   git push origin main
   ```

2. **Automatic deployment will trigger**:
   - GitHub Actions will run tests
   - Build the application
   - Deploy to Vercel
   - Comment with deployment URL

## 🔄 CI/CD Workflow

### What Happens on Push to Main:

1. **CI Workflow runs**:
   - Installs dependencies
   - Runs ESLint checks
   - Executes test suite
   - Builds application
   - Checks build artifacts

2. **Deploy Workflow runs** (after CI passes):
   - Pulls Vercel configuration
   - Builds with Vercel CLI
   - Deploys to production
   - Updates deployment status

### What Happens on Pull Requests:

1. **CI Workflow runs**:
   - Same as above, plus accessibility checks

2. **Preview Deployment**:
   - Deploys PR to preview URL
   - Comments on PR with preview link
   - Allows testing before merge

## 🛠️ Troubleshooting

### Common Issues:

1. **Deployment fails with "VERCEL_TOKEN not found"**
   - Check that GitHub secrets are correctly set
   - Ensure token hasn't expired
   - Verify token has correct permissions

2. **Build fails on Vercel**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

3. **Tests fail in CI**
   - Run tests locally first: `npm test`
   - Check for environment-specific issues
   - Ensure all test dependencies are installed

4. **ESLint errors**
   - Run `npm run lint:fix` to auto-fix issues
   - Check for syntax errors
   - Ensure ESLint configuration is correct

### Getting Help:

1. **Check GitHub Actions logs**:
   - Go to Actions tab in your repository
   - Click on failed workflow
   - Review logs for error details

2. **Check Vercel deployment logs**:
   - Go to Vercel dashboard
   - Click on your project
   - Review deployment logs

3. **Common Solutions**:
   - Clear npm cache: `npm clean-install`
   - Update dependencies: `npm update`
   - Check Node.js version: `node --version`

## 🔧 Advanced Configuration

### Custom Domain Setup:

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **Update Environment Variables**:
   ```env
   VITE_SITE_URL="https://yourdomain.com"
   ```

### Analytics Integration:

1. **Add Google Analytics**:
   ```env
   VITE_GA_TRACKING_ID="GA_MEASUREMENT_ID"
   ```

2. **Update index.html** with tracking code

### Performance Monitoring:

1. **Vercel Analytics**: Enable in project settings
2. **Web Vitals**: Already configured in Vite build

## 📊 Monitoring

### Key Metrics to Monitor:

- **Build Time**: Should be under 2 minutes
- **Bundle Size**: Check for unexpected increases
- **Lighthouse Scores**: Performance, Accessibility, SEO
- **Error Rates**: Monitor deployment failures

### Vercel Dashboard:

- **Deployments**: Track deployment history
- **Analytics**: View site performance
- **Functions**: Monitor serverless functions (if used)

## 🔄 Updates and Maintenance

### Regular Updates:

1. **Dependencies**: Monthly security updates
   ```bash
   npm audit fix
   npm update
   ```

2. **Content**: Update projects and skills regularly

3. **Performance**: Monitor and optimize bundle size

### Version Control:

- Use semantic versioning for releases
- Tag important versions: `git tag v1.0.0`
- Maintain changelog for major updates

---

## 🎉 Congratulations!

Your portfolio is now live with automatic CI/CD! 

**Next Steps**:
- Share your portfolio URL
- Add more projects as you build them
- Monitor performance and user engagement
- Consider adding a blog section

**Need Help?** [Create an issue](../../issues) or [contact support](mailto:your.email@example.com)