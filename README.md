# 🚀 My Personal Blog

基于 Astro 和 Tailwind CSS 构建的现代化个人博客，追求极致的性能和优雅的阅读体验。

[English](#english) | [中文](#中文)

## 中文

### 📁 项目结构

```
my-blog/
├── 📁 .github/                    # GitHub 相关配置
│   └── 📁 workflows/             # GitHub Actions 工作流
│       └── 📄 deploy.yml         # 自动部署配置
│
├── 📁 .vscode/                   # VS Code 编辑器配置
│   └── 📄 extensions.json        # 推荐扩展列表
│
├── 📁 public/                    # 静态资源目录
│   └── 📁 images                 # 图片资源
│
├── 📁 src/                      # 源代码目录
│   ├── 📁 components/           # 可复用组件
│   │   ├── 📄 BaseHead.astro    # HTML头部组件
│   │   ├── 📄 Header.astro      # 网站头部导航
│   │   ├── 📄 Footer.astro      # 网站底部
│   │   ├── 📄 ThemeToggle.astro # 主题切换
│   │   └── 📄 FormattedDate.astro # 日期格式化
│   │
│   ├── 📁 content/              # 内容管理
│   │   ├── 📁 blog/             # 博客文章
│   │   └── 📄 config.ts         # 内容配置
│   │
│   ├── 📁 layouts/              # 页面布局
│   │   ├── 📄 Layout.astro      # 基础布局
│   │   └── 📄 BlogPost.astro    # 博客文章布局
│   │
│   ├── 📁 pages/                # 页面路由
│   │   ├── 📁 blog/
│   │   │   ├── 📄 index.astro   # 博客列表
│   │   │   └── 📄 [...slug].astro # 文章详情
│   │   ├── 📁 tags/
│   │   │   ├── 📄 index.astro   # 标签列表
│   │   │   └── 📄 [tag].astro   # 标签文章
│   │   ├── 📄 index.astro       # 首页
│   │   ├── 📄 about.astro       # 关于页
│   │   ├── 📄 archive.astro     # 归档页
│   │   ├── 📄 404.astro         # 404页面
│   │   └── 📄 rss.xml.js        # RSS订阅
│   │
│   ├── 📁 styles/               # 全局样式
│   │   └── 📄 global.css        # 全局CSS
│   │
│   └── 📄 consts.ts             # 网站常量配置
│
├── 📁 scripts/                   # 脚本文件
│   └── 📄 download-images.sh     # 图片下载脚本
│
├── 📁 docs/                     # 文档
│   └── 📄 image-resources.md    # 图片资源指南
│
├── 📄 .env.example              # 环境变量示例
├── 📄 .gitignore                # Git忽略配置
├── 📄 astro.config.mjs          # Astro配置
├── 📄 budget.json               # 性能预算配置
├── 📄 package.json              # 项目依赖
├── 📄 README.md                 # 项目说明
├── 📄 tailwind.config.mjs       # Tailwind配置
└── 📄 tsconfig.json             # TypeScript配置
```

### ✨ 特性

- ⚡️ **极速加载** - 基于 Astro 的静态站点生成，实现近乎即时的页面加载
- 📝 **Markdown 支持** - 使用 Markdown 编写文章，支持代码高亮和数学公式
- 🎨 **响应式设计** - 完美适配桌面、平板和移动设备
- 🌙 **暗色模式** - 自动适应系统主题，保护眼睛
- 🔍 **SEO 优化** - 内置 SEO 最佳实践，提升搜索引擎排名
- 📊 **性能监控** - 集成 Web Vitals，持续优化用户体验
- 💬 **评论系统** - 基于 GitHub Discussions 的 Giscus 评论
- 🚀 **自动部署** - GitHub Actions + Cloudflare Pages 实现持续部署

### 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) - 现代化的静态站点生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com) - 全球边缘网络部署
- **评论**: [Giscus](https://giscus.app) - 基于 GitHub Discussions
- **分析**: Google Analytics 4 - 网站访问分析

### 🚀 快速开始

- **DEMO**: https://xinliucc.cn

#### 前置要求

- Node.js 18.0 或更高版本
- npm 或 pnpm 包管理器
- Git

#### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/XinLiucc/Blog.git
cd Blog/my-blog
```

2. **安装依赖**
```bash
npm install
# 或者使用 pnpm
pnpm install
```

3. **配置环境**

复制 `.env.example` 到 `.env` 并填写必要的配置：
```bash
cp .env.example .env
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问本地站点**
打开浏览器访问 `http://localhost:4321`

### 📝 写作指南

#### 创建新文章

1. 在 `src/content/blog/` 目录下创建新的 `.md` 或 `.mdx` 文件
2. 添加 frontmatter 元数据：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 2025-01-20
heroImage: '/blog-placeholder-1.jpg'
tags: ['Astro', 'Blogging', 'Web Development']
category: '技术'
author: 'Your Name'
---

# 文章内容

这里开始写你的文章...
```

### 🚀 部署

#### 部署到 Cloudflare Pages

1. Fork 本仓库
2. 在 Cloudflare Dashboard 创建新项目
3. 连接 GitHub 仓库
4. 配置构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
5. 添加环境变量（如需要）

#### GitHub Actions 自动部署

1. 在仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `PUBLIC_GISCUS_REPO`（如使用 Giscus）
   - `PUBLIC_GISCUS_REPO_ID`（如使用 Giscus）

2. 推送代码到 `main` 分支即可自动部署

### 🎨 自定义配置

#### 修改网站信息

编辑 `src/consts.ts`:

```typescript
export const SITE_TITLE = '你的博客标题';
export const SITE_DESCRIPTION = '你的博客描述';
```

#### 配置 Giscus 评论

1. 访问 [giscus.app](https://giscus.app)
2. 按照指引配置你的仓库
3. 更新 `src/consts.ts` 中的 Giscus 配置

### 📊 性能优化

- 图片自动优化和懒加载
- CSS 自动清理未使用的样式
- JavaScript 按需加载
- 静态资源 CDN 加速
- HTTP/2 推送优化

---

## English

### 📁 Project Structure

```
my-blog/
├── 📁 .github/                    # GitHub configuration
│   └── 📁 workflows/             # GitHub Actions workflows
│       └── 📄 deploy.yml         # Auto deployment config
│
├── 📁 .vscode/                   # VS Code editor config
│   └── 📄 extensions.json        # Recommended extensions
│
├── 📁 public/                    # Static assets
│   └── 📁 images/               # Image resources
│
├── 📁 src/                      # Source code
│   ├── 📁 components/           # Reusable components
│   │   ├── 📄 BaseHead.astro    # HTML head component
│   │   ├── 📄 Header.astro      # Site header nav
│   │   ├── 📄 Footer.astro      # Site footer
│   │   ├── 📄 ThemeToggle.astro # Theme switcher
│   │   └── 📄 FormattedDate.astro # Date formatter
│   │
│   ├── 📁 content/              # Content management
│   │   ├── 📁 blog/             # Blog posts
│   │   └── 📄 config.ts         # Content config
│   │
│   ├── 📁 layouts/              # Page layouts
│   │   ├── 📄 Layout.astro      # Base layout
│   │   └── 📄 BlogPost.astro    # Blog post layout
│   │
│   ├── 📁 pages/                # Page routes
│   │   ├── 📁 blog/
│   │   │   ├── 📄 index.astro   # Blog listing
│   │   │   └── 📄 [...slug].astro # Post details
│   │   ├── 📁 tags/
│   │   │   ├── 📄 index.astro   # Tags listing
│   │   │   └── 📄 [tag].astro   # Tag posts
│   │   ├── 📄 index.astro       # Homepage
│   │   ├── 📄 about.astro       # About page
│   │   ├── 📄 archive.astro     # Archive page
│   │   ├── 📄 404.astro         # 404 page
│   │   └── 📄 rss.xml.js        # RSS feed
│   │
│   ├── 📁 styles/               # Global styles
│   │   └── 📄 global.css        # Global CSS
│   │
│   └── 📄 consts.ts             # Site constants
│
├── 📁 scripts/                   # Scripts
│   └── 📄 download-images.sh     # Image download script
│
├── 📁 docs/                     # Documentation
│   └── 📄 image-resources.md    # Image resources guide
│
├── 📄 .env.example              # Environment variables example
├── 📄 .gitignore                # Git ignore config
├── 📄 astro.config.mjs          # Astro configuration
├── 📄 budget.json               # Performance budget
├── 📄 package.json              # Project dependencies
├── 📄 README.md                 # Project documentation
├── 📄 tailwind.config.mjs       # Tailwind config
└── 📄 tsconfig.json             # TypeScript config
```

### ✨ Features

- ⚡️ **Lightning Fast** - Static site generation with Astro for near-instant page loads
- 📝 **Markdown Support** - Write posts in Markdown with code highlighting and math formulas
- 🎨 **Responsive Design** - Perfect adaptation for desktop, tablet, and mobile devices
- 🌙 **Dark Mode** - Automatically adapts to system theme
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 📊 **Performance Monitoring** - Integrated Web Vitals
- 💬 **Comment System** - Giscus comments based on GitHub Discussions
- 🚀 **Auto Deploy** - Continuous deployment with GitHub Actions + Cloudflare Pages

### 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) - Global edge network
- **Comments**: [Giscus](https://giscus.app) - Based on GitHub Discussions
- **Analytics**: Google Analytics 4 - Website analytics

### 🚀 Quick Start

#### Prerequisites

- Node.js 18.0 or higher
- npm or pnpm package manager
- Git

#### Installation

1. **Clone the repository**
```bash
git clone https://github.com/XinLiucc/Blog.git
cd Blog/my-blog
```

2. **Install dependencies**
```bash
npm install
# or use pnpm
pnpm install
```

3. **Configure environment**

Copy `.env.example` to `.env` and fill in the necessary configuration:
```bash
cp .env.example .env
```

4. **Start development server**
```bash
npm run dev
```

5. **Visit local site**
Open your browser and visit `http://localhost:4321`

### 📝 Writing Guide

#### Create a new post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter metadata:

```markdown
---
title: 'Post Title'
description: 'Post description'
pubDate: 2025-01-20
heroImage: '/blog-placeholder-1.jpg'
tags: ['Astro', 'Blogging', 'Web Development']
category: 'Tech'
author: 'Your Name'
---

# Post Content

Start writing your post here...
```

### 🚀 Deployment

#### Deploy to Cloudflare Pages

1. Fork this repository
2. Create a new project in Cloudflare Dashboard
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Add environment variables (if needed)

#### GitHub Actions Auto Deploy

1. Add the following Secrets in repository settings:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `PUBLIC_GISCUS_REPO` (if using Giscus)
   - `PUBLIC_GISCUS_REPO_ID` (if using Giscus)

2. Push code to `main` branch for automatic deployment

### 🎨 Customization

#### Modify site information

Edit `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Your Blog Title';
export const SITE_DESCRIPTION = 'Your blog description';
```

#### Configure Giscus comments

1. Visit [giscus.app](https://giscus.app)
2. Follow the guide to configure your repository
3. Update Giscus configuration in `src/consts.ts`

### 📊 Performance Optimization

- Automatic image optimization and lazy loading
- CSS purging for unused styles
- JavaScript on-demand loading
- Static asset CDN acceleration
- HTTP/2 push optimization

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Excellent static site generator
- [Tailwind CSS](https://tailwindcss.com) - Powerful CSS framework
- [Astro Blog Template](https://github.com/withastro/astro/tree/main/examples/blog) - Project template

## 📮 Contact

- GitHub: [@XinLiucc](https://github.com/XinLiucc)
- Email: your-email@example.com

---

<p align="center">
  Made with ❤️ using Astro
</p>