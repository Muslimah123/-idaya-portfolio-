# Idaya's Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases research work, projects, experience, and publications with a clean, professional design and smooth user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Mode Support**: Seamless dark/light mode toggle with system preference detection
- **Smooth Animations**: Engaging micro-interactions and scroll-triggered animations
- **Performance Optimized**: Fast loading times with code splitting and optimization
- **SEO Friendly**: Optimized meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
idaya-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── documents/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Navigation, Footer, Layout
│   │   ├── sections/        # Hero, About, Research, Projects, etc.
│   │   ├── ui/             # Reusable UI components
│   │   └── features/       # Feature-specific components
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context providers
│   ├── data/               # Static data and content
│   ├── utils/              # Utility functions and helpers
│   ├── styles/             # Global CSS and component styles
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
├── README.md
└── .gitignore
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Icons**: Heroicons (via Tailwind)
- **Deployment**: Vercel/Netlify ready

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/idaya-portfolio.git
   cd idaya-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/data/projects.js` - Your projects and work
- `src/data/experience.js` - Your work experience
- `src/data/research.js` - Your research work
- `src/data/skills.js` - Your technical skills
- `src/data/publications.js` - Your publications and papers
- `src/utils/constants.js` - Contact information and metadata

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/styles/` files for custom CSS
- Adjust colors, fonts, and animations to match your brand

### Images

Add your images to the `public/assets/images/` directory:
- `profile.jpg` - Your profile photo
- `projects/` - Project screenshots
- `research/` - Research-related images

## 📱 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal story and what you do
3. **Research** - Research projects and interests
4. **Projects** - Portfolio of development work
5. **Experience** - Professional experience timeline
6. **Skills** - Technical skills with proficiency levels
7. **Publications** - Academic papers and publications
8. **Contact** - Contact form and information

## 🎨 Design Features

- **Clean, Professional Design**: Modern UI with attention to detail
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Dark Mode**: Complete dark mode implementation with user preference storage
- **Mobile-First**: Responsive design that works on all devices
- **Performance**: Optimized images, lazy loading, and code splitting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/idaya-portfolio/issues).

## 📞 Contact

- Email: [contact@example.com](mailto:contact@example.com)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

---

⭐ Don't forget to star this repo if you found it helpful!
