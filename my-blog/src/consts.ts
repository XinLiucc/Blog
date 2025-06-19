// 网站配置常量 / Site configuration constants
export const SITE_TITLE = '我的个人博客 | My Personal Blog';
export const SITE_DESCRIPTION = '分享技术、思考与生活 | Sharing technology, thoughts and life';
export const SITE_URL = 'https://your-blog-url.com';
export const SITE_AUTHOR = 'Your Name';
export const SITE_LANG = 'zh-CN';

// 社交媒体链接 / Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/XinLiucc',
  twitter: 'https://twitter.com/yourhandle',
  email: 'your-email@example.com',
  rss: '/rss.xml',
};

// 导航菜单 / Navigation menu
export const NAV_ITEMS = [
  { name: '首页 Home', href: '/' },
  { name: '博客 Blog', href: '/blog' },
  { name: '关于 About', href: '/about' },
  { name: '归档 Archive', href: '/archive' },
];

// 每页显示的文章数 / Posts per page
export const POSTS_PER_PAGE = 10;

// Giscus 评论配置 / Giscus comments configuration
export const GISCUS_CONFIG = {
  repo: 'XinLiucc/Blog',
  repoId: 'YOUR_REPO_ID',
  category: 'Announcements',
  categoryId: 'YOUR_CATEGORY_ID',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  theme: 'preferred_color_scheme',
  lang: 'zh-CN',
};