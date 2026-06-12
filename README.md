# Guide Homepage

A bilingual Vite + React homepage for collecting and sharing projects.

## Local Development

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Build the production site:

```powershell
npm.cmd run build
```

## Add Projects

Edit `src/data/projects.js` and add a new object to the `projects` array.

```js
{
  id: "my-project",
  featured: true,
  status: "active",
  name: {
    zh: "我的项目",
    en: "My Project",
  },
  description: {
    zh: "中文项目简介。",
    en: "English project summary.",
  },
  tech: ["React", "Vite"],
  links: {
    demo: "https://example.com",
    repo: "https://github.com/your-name/my-project",
  },
}
```

Supported status values:

- `active`
- `completed`
- `planned`

Leave `demo` or `repo` as an empty string if the link is not ready yet.

## GitHub Pages

This project is configured for the repository name `guide-homepage`.

The Vite base path is:

```js
base: "/guide-homepage/"
```

After pushing to GitHub, enable GitHub Pages in the repository settings and select **GitHub Actions** as the source. The workflow in `.github/workflows/deploy.yml` will build and deploy the site automatically on pushes to `main`.
