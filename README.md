# Xuan_tmp 项目主页

这是一个使用 Vite + React 制作的中英双语项目主页，用来集中展示和跳转到我的小项目。

## 本地开发

安装依赖：

```powershell
npm.cmd install
```

启动本地开发服务器：

```powershell
npm.cmd run dev
```

构建生产版本：

```powershell
npm.cmd run build
```

## 添加或修改项目资料

项目资料集中写在：

```text
src/data/projects.js
```

在 `projects` 数组里，每一组 `{ ... }` 就代表一个项目。例如：

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

## 字段说明

- `id`：项目的唯一标识。建议使用英文小写和短横线，例如 `my-project`。不要和其他项目重复。
- `featured`：是否置顶展示。`true` 表示置顶，`false` 表示不置顶。
- `status`：项目状态。当前支持 `active`、`completed`、`planned`。
- `name.zh`：项目的中文名称。
- `name.en`：项目的英文名称。
- `description.zh`：项目的中文简介。
- `description.en`：项目的英文简介。
- `tech`：项目使用的技术栈，例如 `["React", "Vite"]`。
- `links.demo`：项目的在线访问地址、下载地址或发布页地址。
- `links.repo`：项目的源码仓库地址。

如果某个链接暂时没有，可以留空：

```js
links: {
  demo: "",
  repo: "",
}
```

页面会自动显示“待补充”。

## 项目状态

当前可用的 `status` 值：

- `active`：维护中
- `completed`：已完成
- `planned`：计划中

如果以后需要新增状态，需要同时修改页面中的状态文案。

## GitHub Pages 部署

这个项目已经按仓库名 `guide-homepage` 配置好了 GitHub Pages 路径。

Vite 的基础路径配置在：

```text
vite.config.js
```

内容是：

```js
base: "/guide-homepage/"
```

每次修改项目资料后，建议先本地构建检查：

```powershell
npm.cmd run build
```

然后提交并推送到 GitHub：

```powershell
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Update project list"
"C:\Program Files\Git\cmd\git.exe" push
```

推送到 `main` 分支后，GitHub Actions 会自动构建并部署网站。
