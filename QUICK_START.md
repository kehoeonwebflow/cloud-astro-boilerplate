# Quick Start Guide

Get your Webflow Cloud app up and running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Set Up Environment

```bash
cp env-template.txt .env
```

Edit `.env`:
```env
WEBFLOW_MOUNT_PATH=/app
```

## 3️⃣ Run Locally

```bash
npm run dev
```

Visit: http://localhost:4321

## 4️⃣ Connect to Webflow (When Ready)

### Option A: New Webflow Site

1. Create a Webflow site (or clone [Astral Fund template](https://webflow.com/made-in-webflow/website/astral-fund-template))
2. Run: `webflow cloud init`
3. Follow the prompts to sync your design system

### Option B: Existing Webflow Site

1. Run: `webflow cloud init`
2. Select your existing Webflow site
3. Your DevLink components will sync automatically

## 5️⃣ Deploy to Webflow Cloud

### First Time Setup:

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. In Webflow:
   - Settings → Webflow Cloud
   - Connect GitHub
   - Create Project
   - Create Environment
   - Publish site

### Deploy:

```bash
npm run deploy
```

Your app will be live at: `https://yoursite.webflow.io/app`

---

## 📚 Next Steps

- [Read the full README](./README.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Webflow Cloud Docs](https://developers.webflow.com/webflow-cloud)

## 🆘 Need Help?

Common issues and solutions:

### "Command not found: webflow"
```bash
npm install -g @webflow/webflow-cli
```

### "404 when accessing app"
Make sure you've published your Webflow site after creating the environment.

### "DevLink components not found"
Run `webflow cloud init` to sync your Webflow design system.

### "Build fails locally"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

**That's it! You're ready to build amazing Webflow Cloud apps! 🎉**

