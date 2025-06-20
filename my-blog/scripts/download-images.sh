#!/bin/bash

# 创建图片目录（如果不存在）
mkdir -p public/images

echo "📸 下载示例图片..."

# 方案 1：使用 Unsplash 随机图片 API（推荐）
# 下载技术相关的图片
curl -L "https://source.unsplash.com/1200x630/?technology,coding" -o public/blog-placeholder-1.jpg
echo "✅ 下载 blog-placeholder-1.jpg"

# 下载性能/速度相关的图片
curl -L "https://source.unsplash.com/1200x630/?performance,speed,optimization" -o public/blog-placeholder-2.jpg
echo "✅ 下载 blog-placeholder-2.jpg"

# 下载代码/编程相关的图片
curl -L "https://source.unsplash.com/1200x630/?code,programming,markdown" -o public/blog-placeholder-3.jpg
echo "✅ 下载 blog-placeholder-3.jpg"

# 方案 2：使用 Picsum（Lorem Picsum）随机图片
# curl -L "https://picsum.photos/1200/630" -o public/blog-placeholder-1.jpg
# curl -L "https://picsum.photos/1200/630" -o public/blog-placeholder-2.jpg
# curl -L "https://picsum.photos/1200/630" -o public/blog-placeholder-3.jpg

# 方案 3：使用 Placeholder.com
# curl -L "https://via.placeholder.com/1200x630/3b82f6/ffffff?text=Welcome+to+My+Blog" -o public/blog-placeholder-1.jpg
# curl -L "https://via.placeholder.com/1200x630/10b981/ffffff?text=Performance+Optimization" -o public/blog-placeholder-2.jpg
# curl -L "https://via.placeholder.com/1200x630/6366f1/ffffff?text=Markdown+Showcase" -o public/blog-placeholder-3.jpg

echo "✨ 图片下载完成！"

# 提示：如果需要优化图片大小，可以使用 ImageMagick
# 安装：brew install imagemagick (macOS) 或 sudo apt-get install imagemagick (Ubuntu)
# 优化命令示例：
# convert public/blog-placeholder-1.jpg -quality 85 -resize 1200x630 public/blog-placeholder-1-optimized.jpg