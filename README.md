# 🚀 My Personal Blog

基于 Astro 和 Tailwind CSS 构建的现代化个人博客，追求极致的性能和优雅的阅读体验。

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ 特性

- ⚡️ **极速加载** - 基于 Astro 的静态站点生成，实现近乎即时的页面加载
- 📝 **Markdown 支持** - 使用 Markdown 编写文章，支持代码高亮和数学公式
- 🎨 **响应式设计** - 完美适配桌面、平板和移动设备
- 🌙 **暗色模式** - 自动适应系统主题，保护眼睛
- 🔍 **SEO 优化** - 内置 SEO 最佳实践，提升搜索引擎排名
- 📊 **性能监控** - 集成 Web Vitals，持续优化用户体验
- 💬 **评论系统** - 基于 GitHub Discussions 的 Giscus 评论
- 🚀 **自动部署** - GitHub Actions + Cloudflare Pages 实现持续部署

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) - 现代化的静态站点生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com) - 全球边缘网络部署
- **评论**: [Giscus](https://giscus.app) - 基于 GitHub Discussions
- **分析**: Google Analytics 4 - 网站访问分析

## 🚀 快速开始

### 前置要求

- Node.js 18.0 或更高版本
- npm 或 pnpm 包管理器
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/XinLiucc/Blog.git
cd Blog
```

2. **安装依赖**
```bash
npm install
# 或者使用 pnpm
pnpm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问本地站点**
打开浏览器访问 `http://localhost:4321`

## 📁 项目结构

```
Blog/
├── public/              # 静态资源
│   ├── fonts/          # 字体文件
│   └── images/         # 图片资源
├── src/
│   ├── components/     # React/Astro 组件
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── FormattedDate.astro
│   ├── content/        # 内容集合
│   │   ├── blog/       # 博客文章 (Markdown)
│   │   └── config.ts   # 内容配置
│   ├── layouts/        # 页面布局
│   │   └── BlogPost.astro
│   ├── pages/          # 页面路由
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   └── rss.xml.js
│   └── styles/         # 全局样式
│       └── global.css
├── astro.config.mjs    # Astro 配置
├── tailwind.config.mjs # Tailwind 配置
└── package.json
```

## 📝 写作指南

### 创建新文章

1. 在 `src/content/blog/` 目录下创建新的 `.md` 或 `.mdx` 文件
2. 添加 frontmatter 元数据：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 'Jan 15 2025'
heroImage: '/blog-placeholder-1.jpg'
tags: ['Astro', 'Blogging', 'Web Development']
---

# 文章内容

这里开始写你的文章...
```

### Markdown 扩展功能

支持以下 Markdown 扩展：
- 代码块语法高亮
- 数学公式 (KaTeX)
- 表格
- 任务列表
- 脚注

## 🚀 部署

### 自动部署 (推荐)

本项目已配置 GitHub Actions，推送到 `main` 分支会自动部署到 Cloudflare Pages。

### 手动部署

1. **构建项目**
```bash
npm run build
```

2. **预览构建结果**
```bash
npm run preview
```

3. **部署到 Cloudflare Pages**
- 在 Cloudflare Dashboard 创建新项目
- 连接 GitHub 仓库
- 设置构建命令: `npm run build`
- 设置输出目录: `dist`

## 🎨 自定义配置

### 修改主题颜色

编辑 `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#你的主色',
        secondary: '#你的辅助色',
      }
    }
  }
}
```

### 配置网站信息

编辑 `src/consts.ts`:

```typescript
export const SITE_TITLE = '你的博客标题';
export const SITE_DESCRIPTION = '你的博客描述';
```

## 📊 性能优化

- 图片自动优化和懒加载
- CSS 自动清理未使用的样式
- JavaScript 按需加载
- 静态资源 CDN 加速
- HTTP/2 推送优化

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Astro](https://astro.build) - 优秀的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 强大的 CSS 框架
- [Astro Blog Template](https://github.com/withastro/astro/tree/main/examples/blog) - 项目模板

## 📮 联系方式

- GitHub: [@XinLiucc](https://github.com/XinLiucc)
- Email: your-email@example.com
- Blog: [你的博客地址](https://your-blog-url.com)

---

<p align="center">
  Made with ❤️ using Astro
</p>