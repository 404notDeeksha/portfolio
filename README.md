# Portfolio - Developer Portfolio

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/404notDeeksha/portfolio)
[![CI](https://github.com/404notDeeksha/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/404notDeeksha/portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/404notDeeksha/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/404notDeeksha/portfolio/actions/workflows/deploy.yml)

A clean, responsive developer portfolio built with **React**, **Vite**, and **modern web technologies**. Features automatic deployment to Vercel with CI/CD pipeline.

## 🚀 Features

- **⚡ Lightning Fast**: Built with Vite for instant hot module replacement
- **📱 Fully Responsive**: Works perfectly on all devices
- **🎨 Modern Design**: Clean, minimal UI with smooth animations
- **🔄 CI/CD Pipeline**: Automated testing and deployment with GitHub Actions
- **🚀 Vercel Integration**: Automatic deployment with preview URLs for PRs
- **✅ Testing**: Comprehensive test suite with Vitest
- **📊 Code Quality**: ESLint, Prettier, and accessibility checks
- **🎯 Performance**: Optimized build with code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite 6
- **Styling**: Modern CSS with custom properties
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Fonts**: Google Fonts (Inter + Fira Code)

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/404notDeeksha/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Build and deploy to Vercel |

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Fork this repository**

2. **Set up Vercel**
   - Connect your GitHub account to [Vercel](https://vercel.com)
   - Import your forked repository
   - Vercel will automatically deploy your main branch

3. **Configure GitHub Secrets**
   Add these secrets to your GitHub repository:
   ```
   VERCEL_TOKEN          # Get from vercel.com/account/tokens
   VERCEL_ORG_ID         # Get from project settings
   VERCEL_PROJECT_ID     # Get from project settings
   ```

4. **Push to main branch**
   - Automatic deployment will trigger
   - PR previews are automatically generated

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run deploy
```

## 🔧 CI/CD Pipeline

The project includes two GitHub Actions workflows:

### 1. CI Workflow (`.github/workflows/ci.yml`)
- **Triggers**: Push to any branch, PRs
- **Actions**: 
  - Lint code with ESLint
  - Run tests with coverage
  - Build application
  - Accessibility checks (PRs only)
- **Matrix Testing**: Node.js 18 & 20

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
- **Triggers**: Push to main/master, PRs
- **Actions**:
  - Production deployment (main branch)
  - Preview deployment (PRs)
  - Automatic PR comments with deployment URLs

## 🎨 Customization

### Personal Information

Update these files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   ```jsx
   <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
   <h2>Your Title</h2>
   ```

2. **About Section** (`src/components/About.jsx`):
   ```jsx
   const skills = [
     { name: 'Your Skill', level: 90 },
     // Add your skills
   ];
   ```

3. **Projects Section** (`src/components/Projects.jsx`):
   ```jsx
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       githubUrl: 'https://github.com/yourusername/project',
       // Update with your projects
     }
   ];
   ```

4. **Contact Section** (`src/components/Contact.jsx`):
   ```jsx
   // Update contact information and social links
   ```

### Styling

- **Colors**: Modify CSS custom properties in `src/App.css`
- **Fonts**: Update font imports in `src/index.css`
- **Layout**: Customize component styles in respective CSS files

### Environment Variables

Configure your portfolio using environment variables:

```bash
# .env.local
VITE_APP_TITLE="Your Portfolio"
VITE_CONTACT_EMAIL="your.email@example.com"
VITE_GITHUB_URL="https://github.com/yourusername"
VITE_LINKEDIN_URL="https://linkedin.com/in/yourusername"
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

## 📊 Performance

The build is optimized for performance:

- **Code Splitting**: Vendor libraries separated
- **Minification**: Terser for optimal compression
- **Tree Shaking**: Dead code elimination
- **Modern JS**: ES2020+ for better performance

## 🔍 Accessibility

The portfolio follows accessibility best practices:

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

If you have any questions or need help:

- **Email**: your.email@example.com
- **GitHub Issues**: [Create an issue](../../issues)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vercel](https://vercel.com/) - The platform for frontend developers
- [GitHub Actions](https://github.com/features/actions) - CI/CD platform

---

⭐ **Star this repository if you found it helpful!**

💼 **Looking to hire?** [Get in touch!](mailto:your.email@example.com)
