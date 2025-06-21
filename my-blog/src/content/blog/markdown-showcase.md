---
title: 'Markdown 功能展示'
description: '展示博客支持的各种 Markdown 语法和扩展功能'
pubDate: 2025-06-19
heroImage: '/blog-placeholder-3.svg'
tags: ['Markdown', 'Tutorial', 'Features']
category: '技术'
author: 'XinLiu'
---

这篇文章展示了本博客支持的各种 Markdown 语法和扩展功能。

## 基础语法

### 文本格式

这是一段普通文本。

**这是粗体文本**

*这是斜体文本*

***这是粗斜体文本***

~~这是删除线文本~~

`这是行内代码`

### 引用

> 这是一段引用文本。
> 
> 引用可以包含多个段落。

### 列表

无序列表：
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2
- 项目 3

有序列表：
1. 第一步
2. 第二步
   1. 步骤 2.1
   2. 步骤 2.2
3. 第三步

任务列表：
- [x] 已完成的任务
- [ ] 待完成的任务
- [ ] 另一个待完成的任务

## 代码块

### JavaScript 代码

```javascript
// 斐波那契数列生成器
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// 使用生成器
const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}
```

### Python 代码

```python
# 快速排序算法
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# 测试
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))
```

### CSS 代码

```css
/* 现代 CSS 网格布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-4px);
}
```

## 表格

| 语言 | 年份 | 创建者 |
|------|------|--------|
| JavaScript | 1995 | Brendan Eich |
| Python | 1991 | Guido van Rossum |
| Go | 2009 | Google |
| Rust | 2010 | Mozilla |

## 链接和图片

[访问 Astro 官网](https://astro.build)

[带标题的链接](https://github.com "访问 GitHub")

![示例图片](https://via.placeholder.com/600x400 "这是图片标题")

## 数学公式

行内公式：$E = mc^2$

块级公式：

$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$

## HTML 元素

<details>
<summary>点击展开更多内容</summary>

这是折叠内容区域。可以包含任何 Markdown 内容：

- 列表项 1
- 列表项 2
- 列表项 3

```javascript
console.log('折叠区域中的代码');
```

</details>

## 高级功能

### 脚注

这是一段包含脚注的文本[^1]。

[^1]: 这是脚注的内容。

### 缩写

HTML 是一种标记语言。

*[HTML]: HyperText Markup Language

### 键盘按键

使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制，<kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴。

## 提示框

> 💡 **提示**: 这是一个提示信息框。

> ⚠️ **警告**: 这是一个警告信息框。

> ❌ **危险**: 这是一个危险信息框。

> ✅ **成功**: 这是一个成功信息框。

## 总结

本文展示了博客支持的各种 Markdown 语法，包括：

1. 基础文本格式
2. 列表和引用
3. 代码高亮
4. 表格
5. 数学公式
6. 以及各种扩展功能

这些功能让你能够创建丰富多彩的技术文章！