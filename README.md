# Webflow Cloud + Astro Boilerplate 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.15.5-FF5D01?logo=astro)](https://astro.build)
[![Node](https://img.shields.io/badge/Node-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Webflow Cloud](https://img.shields.io/badge/Webflow-Cloud-4353FF?logo=webflow&logoColor=white)](https://webflow.com)

A production-ready boilerplate for building cloud apps on [Webflow Cloud](https://developers.webflow.com/webflow-cloud/getting-started) with Astro. This template includes DevLink integration, SSR configuration, and deployment-ready setup.

> **⭐ If you find this helpful, please consider giving it a star!**

## ✨ Features

- **🎨 DevLink Integration** - Seamlessly sync and use Webflow design system components
- **⚡ Server-Side Rendering** - Pre-configured with Astro's Node adapter for SSR
- **🔄 Hot Reload** - Fast development with Astro's dev server
- **📦 React Support** - Built-in React integration for Webflow components
- **🚀 Deploy Ready** - One-command deployment to Webflow Cloud
- **🎯 TypeScript** - Full TypeScript support out of the box
- **📱 Responsive** - Mobile-first responsive design patterns

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js 20.0.0 or higher** and npm installed
- A **Webflow account** ([sign up here](https://webflow.com))
- A **GitHub account** for deployment
- **Webflow CLI** installed globally: `npm install -g @webflow/webflow-cli`

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the environment template and configure your settings:

```bash
cp env-template.txt .env
```

Edit `.env` and update the mount path to match where you want your app hosted:

```env
WEBFLOW_MOUNT_PATH=/app
```

### 3. Create a Webflow Site

1. Visit [Webflow](https://webflow.com) and create a new site
2. Or clone the [Astral Fund template](https://webflow.com/made-in-webflow/website/astral-fund-template) optimized for Webflow Cloud
3. Review the styles, variables, and components in your Webflow Designer

### 4. Sync with Webflow DevLink

If you haven't initialized Webflow Cloud yet, run:

```bash
webflow cloud init
```

This will:
- Authenticate with your Webflow account
- Select your Webflow site
- Sync your design system to the `/devlink` folder
- Import components, styles, and variables

**Note:** The current `/devlink` folder contains placeholder components. They will be replaced with your actual Webflow components after syncing.

### 5. Run Locally

```bash
npm run dev
```

Visit `http://localhost:4321` to see your app running locally.

For a production-like preview:

```bash
npm run preview
```

## 🌐 Deploy to Webflow Cloud

### Step 1: Push to GitHub

1. Initialize git (if you haven't already):

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub and push your code:

```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### Step 2: Connect GitHub to Webflow Cloud

1. In Webflow, go to your site's **Settings** → **Webflow Cloud**
2. Click **"Login to GitHub"** and authorize Webflow
3. Click **"Install GitHub App"** and grant access to your repository

### Step 3: Create Webflow Cloud Project

1. Click **"Create New Project"**
2. Configure your project:
   - **Name:** Your project name
   - **GitHub Repository:** Select your repository
   - **Directory:** Leave blank (or specify if in subdirectory)
3. Click **"Create project"**

### Step 4: Create an Environment

1. Choose a **branch** (e.g., `main`)
2. Set your **mount path** (e.g., `/app`)
3. Click **"Create environment"**

### Step 5: Publish Your Site

Click **"Publish"** in the Webflow Designer to make your project live.

### Step 6: Deploy

Deploy using the Webflow CLI:

```bash
npm run deploy
# or
webflow cloud deploy
```

Your app will be live at: `https://yoursite.webflow.io/app` (or your chosen mount path)

**Automatic Deployments:** Webflow Cloud automatically deploys when you push to your configured branch.

## 📁 Project Structure

```text
/
├── devlink/                    # Webflow DevLink components (synced)
│   ├── _Builtin/
│   │   └── Basic.jsx          # Core Webflow components
│   ├── DevLinkProvider.jsx    # Webflow interactions provider
│   ├── Navbar.jsx             # Example navbar component
│   ├── Footer.jsx             # Example footer component
│   ├── global.css             # Webflow global styles
│   └── README.md              # DevLink documentation
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with DevLinkProvider
│   └── pages/
│       └── index.astro        # Homepage with example usage
├── astro.config.mjs           # Astro + Webflow Cloud config
├── package.json
├── webflow.config.json        # Webflow Cloud deployment config
└── README.md
```

## 🧞 Commands

| Command                 | Action                                              |
| :---------------------- | :-------------------------------------------------- |
| `npm install`           | Install dependencies                                |
| `npm run dev`           | Start dev server at `localhost:4321`                |
| `npm run build`         | Build production site to `./dist/`                  |
| `npm run preview`       | Preview build locally before deploying              |
| `npm run deploy`        | Deploy to Webflow Cloud                             |
| `webflow cloud init`    | Initialize Webflow Cloud and sync DevLink           |
| `webflow cloud deploy`  | Deploy to Webflow Cloud                             |
| `webflow --help`        | View all Webflow CLI commands                       |

## 🎨 Using Webflow Components

After syncing with DevLink, import and use Webflow components in your Astro pages:

```astro
---
import Layout from '../layouts/Layout.astro';
import { Section, Container, Block } from '../../devlink/_Builtin/Basic';
import { Navbar } from '../../devlink/Navbar';
import { Footer } from '../../devlink/Footer';
---

<Layout>
  <Navbar client:load />
  
  <Section client:load>
    <Container>
      <Block>
        <h1>Hello Webflow Cloud!</h1>
      </Block>
    </Container>
  </Section>
  
  <Footer client:load />
</Layout>
```

**Important:** Always add `client:load` directive to Webflow components to ensure proper hydration.

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

The boilerplate is pre-configured for Webflow Cloud with:
- **Node adapter** for SSR
- **React integration** for Webflow components
- **Base path** configuration for mount paths

### Webflow Config (`webflow.config.json`)

Deployment settings for Webflow Cloud:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "nodeVersion": "20"
}
```

### Environment Variables

Configure in `.env`:
- `WEBFLOW_MOUNT_PATH` - Your app's mount path
- `PUBLIC_APP_NAME` - Your app name (accessible in browser)
- `PUBLIC_APP_URL` - Your Webflow site URL

## 📖 Learn More

- **[Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud/getting-started)** - Official Webflow Cloud guide
- **[Astro Documentation](https://docs.astro.build)** - Learn about Astro
- **[DevLink Guide](https://webflow.com/devlink)** - Sync Webflow components
- **[Webflow University](https://university.webflow.com)** - Webflow tutorials

## 🐛 Troubleshooting

### I see a 404 error when accessing my app

Make sure you've published your Webflow site after creating the environment.

### Deployment doesn't start on git push

Check that the Webflow GitHub App has access to your repository:
1. Go to **Settings** → **Webflow Cloud** → **Install GitHub App**
2. Verify repository access on GitHub

### Assets not loading

Ensure you're referencing assets relative to your mount path. For example, if your mount path is `/app`:

```astro
<img src="/app/image.png" alt="..." />
```

### DevLink components not syncing

Run `webflow cloud init` again to re-sync your Webflow design system.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

---

**Built with ❤️ using [Astro](https://astro.build) and [Webflow Cloud](https://webflow.com)**
