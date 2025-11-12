# Deployment Guide

This guide covers different deployment scenarios for your Webflow Cloud app.

## Webflow Cloud Deployment (Recommended)

Webflow Cloud is the primary deployment target for this boilerplate.

### Prerequisites

1. **Webflow Account** with a published site
2. **GitHub Repository** connected to Webflow Cloud
3. **Webflow CLI** installed: `npm install -g @webflow/webflow-cli`

### Initial Setup

1. **Create Webflow Cloud Project**
   - Go to your Webflow site settings → Webflow Cloud
   - Connect your GitHub account
   - Create a new project linked to your repository

2. **Configure Environment**
   - Set your branch (e.g., `main`)
   - Set your mount path (e.g., `/app`)
   - Create the environment

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Automatic Deployments

Webflow Cloud automatically deploys when you push to your configured branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Deployments typically complete in 2-3 minutes. Monitor progress in your Webflow Cloud dashboard.

### Environment Variables

Set environment variables in the Webflow Cloud dashboard:

1. Go to your project → Environment → Settings
2. Add variables:
   - `WEBFLOW_MOUNT_PATH`
   - `PUBLIC_APP_NAME`
   - `PUBLIC_APP_URL`
   - Any API keys or secrets

## Development Workflow

### Local Development

```bash
# Start dev server with hot reload
npm run dev

# Preview production build locally
npm run preview
```

### Branch Strategy

We recommend this branching strategy:

```
main         → Production (auto-deploys to Webflow Cloud)
staging      → Staging environment (optional)
feature/*    → Feature branches (create PRs to main)
```

### Deployment Checklist

Before deploying to production:

- [ ] Test locally with `npm run preview`
- [ ] Verify all environment variables are set
- [ ] Check that DevLink components are synced
- [ ] Review build logs for errors
- [ ] Test critical user flows
- [ ] Verify API endpoints work correctly

## CI/CD Integration

The boilerplate includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Runs on every push to `main`
2. Installs dependencies
3. Builds the project
4. Validates the build

You can extend this workflow to:
- Run tests
- Perform linting
- Run security audits
- Send notifications

## Troubleshooting Deployments

### Build Fails

**Check build logs:**
1. Go to Webflow Cloud dashboard
2. Select your environment
3. Click on failed deployment
4. Review build logs

**Common issues:**
- Missing dependencies in `package.json`
- Environment variables not set
- DevLink components out of sync
- TypeScript errors

**Solution:**
```bash
# Test build locally
npm run build

# If successful locally, check environment variables in Webflow Cloud
```

### Assets Not Loading

Ensure assets reference your mount path:

```astro
<!-- ❌ Wrong -->
<img src="/image.png" />

<!-- ✅ Correct (if mount path is /app) -->
<img src="/app/image.png" />
```

Or use import statements:

```astro
---
import image from '../assets/image.png';
---
<img src={image.src} />
```

### 404 Errors

1. **Verify mount path** matches your Webflow Cloud configuration
2. **Check routes** are defined in `src/pages/`
3. **Publish Webflow site** after creating environment

### Slow Deployments

Deployments typically take 2-3 minutes. If slower:

1. Check GitHub → Webflow Cloud connection
2. Verify repository access permissions
3. Review build logs for warnings
4. Contact Webflow support if issue persists

## Rollback Strategy

If a deployment causes issues:

### Quick Rollback

1. Go to Webflow Cloud dashboard
2. Select your environment
3. View deployment history
4. Click "Rollback" on previous working deployment

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main  # ⚠️ Use with caution
```

## Performance Optimization

### Build Time

- Use `npm ci` instead of `npm install` in CI/CD
- Enable caching for `node_modules`
- Minimize dependencies

### Runtime Performance

- Use `client:load` only when necessary (prefer `client:visible` or `client:idle`)
- Optimize images (use Astro's Image component)
- Enable caching headers for static assets
- Minimize JavaScript bundles

## Security Best Practices

1. **Never commit secrets** to Git
   - Use environment variables
   - Add `.env` to `.gitignore`

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

3. **Sanitize user input** in API routes

4. **Use HTTPS** (automatic with Webflow Cloud)

5. **Implement rate limiting** for API endpoints

## Monitoring and Logs

### Access Logs

Webflow Cloud provides:
- Build logs
- Runtime logs
- Error tracking

Access via: Dashboard → Environment → Logs

### Add Custom Logging

```typescript
// In API routes
export const GET = async () => {
  console.log('API called at:', new Date().toISOString());
  // Logs appear in Webflow Cloud dashboard
};
```

## Need Help?

- **Webflow Cloud Docs:** https://developers.webflow.com/webflow-cloud
- **Webflow Support:** https://webflow.com/support
- **Astro Docs:** https://docs.astro.build
- **GitHub Issues:** Report bugs in this repository

---

**Happy Deploying! 🚀**

