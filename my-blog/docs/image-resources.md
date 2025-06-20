# 📷 博客图片资源指南

## 免费图片资源网站

### 1. 📸 Unsplash
- 网址：https://unsplash.com
- 特点：高质量摄影图片，完全免费
- 推荐搜索关键词：
  - `technology`（技术）
  - `coding`（编程）
  - `developer`（开发者）
  - `workspace`（工作空间）
  - `abstract`（抽象）

### 2. 🎨 Pexels
- 网址：https://www.pexels.com
- 特点：免费图片和视频，中文支持良好
- 推荐类别：
  - 技术
  - 办公室
  - 抽象背景

### 3. 🖼️ Pixabay
- 网址：https://pixabay.com
- 特点：超过 280 万张免费图片
- 支持中文搜索

### 4. 🎯 Freepik
- 网址：https://www.freepik.com
- 特点：矢量图和插画资源丰富
- 注意：部分资源需要署名

## 技术博客专用图片资源

### 1. 📐 unDraw
- 网址：https://undraw.co
- 特点：开源的 SVG 插画，可自定义颜色
- 非常适合技术博客

### 2. 🎨 Storyset
- 网址：https://storyset.com
- 特点：可定制的动画插画
- 有很多技术相关主题

### 3. 💻 Tech Logos
- 网址：https://worldvectorlogo.com
- 特点：各种技术 Logo 的 SVG 版本

## 创建自定义图片

### 1. 🎨 Canva
- 网址：https://www.canva.com
- 使用场景：创建博客封面图
- 模板尺寸：1200x630px（Open Graph 标准）

### 2. 🖌️ Figma
- 网址：https://www.figma.com
- 使用场景：设计专业的博客图片
- 优点：完全免费，功能强大

### 3. 📊 Carbon
- 网址：https://carbon.now.sh
- 使用场景：创建漂亮的代码截图
- 特别适合技术文章

## 图片优化工具

### 在线工具
1. **TinyPNG**：https://tinypng.com
   - 压缩 PNG 和 JPG
   - 保持高质量

2. **Squoosh**：https://squoosh.app
   - Google 开发的图片压缩工具
   - 支持 WebP 转换

3. **SVGOMG**：https://jakearchibald.github.io/svgomg/
   - SVG 优化工具

### 命令行工具

```bash
# 安装 ImageMagick
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Ubuntu

# 批量优化图片
mogrify -resize 1200x630 -quality 85 *.jpg

# 转换为 WebP
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

## 博客图片最佳实践

### 📏 推荐尺寸
- **封面图**：1200x630px（Open Graph 标准）
- **文章内图片**：最大宽度 800-1000px
- **缩略图**：400x300px

### 📦 文件格式选择
- **照片**：使用 JPG 或 WebP
- **插画/图标**：使用 SVG 或 PNG
- **动画**：使用 GIF 或 WebP

### 🎯 命名规范
```
blog-post-title-hero.jpg      # 封面图
blog-post-title-figure-1.jpg  # 文章内图片
blog-post-title-thumb.jpg     # 缩略图
```

### 📝 图片 SEO
1. 使用描述性文件名
2. 添加 alt 文本
3. 使用适当的图片格式
4. 优化文件大小

## 版权注意事项

使用图片时请注意：
- ✅ 确认图片授权（CC0、Unsplash License 等）
- ✅ 需要署名时正确标注作者
- ✅ 商业使用时检查许可证
- ❌ 避免使用版权不明的图片
- ❌ 不要直接从其他网站复制图片

## 快速开始脚本

运行以下脚本快速获取示例图片：

```bash
chmod +x scripts/download-images.sh
./scripts/download-images.sh
```

这将自动下载适合您博客的示例图片！