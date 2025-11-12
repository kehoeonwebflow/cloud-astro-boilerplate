# DevLink Folder

This folder contains components synced from your Webflow design system via DevLink.

## How it works

When you run `webflow cloud init` and sync with your Webflow site, this folder will be populated with:

- **_Builtin/Basic.jsx** - Core Webflow layout components (Section, Container, Block, Link, etc.)
- **DevLinkProvider.jsx** - Provider component that manages Webflow interactions
- **Your custom components** - Any components you've created in Webflow Designer

## Current Status

The files in this folder are **placeholder examples** that demonstrate the structure. They will be replaced when you:

1. Run `webflow cloud init`
2. Select your Webflow site
3. Import your design system via DevLink

## Using DevLink Components

In your Astro pages, import and use components like this:

```astro
---
import { Section, Container, Block } from '../../devlink/_Builtin/Basic';
import { Navbar } from '../../devlink/Navbar';
import { Footer } from '../../devlink/Footer';
---

<Navbar client:load />
<Section client:load>
  <Container>
    <Block>Your content here</Block>
  </Container>
</Section>
<Footer client:load />
```

**Important:** Always add the `client:load` directive to Webflow components in Astro to ensure they hydrate properly on the client side.

## Learn More

- [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud/getting-started)
- [DevLink Guide](https://webflow.com/devlink)

