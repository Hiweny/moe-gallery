# MoeGallery · 美少女画廊

> 精选美少女图库 | 二次元 · 写真 · Pixiv · 精选画集

## ✨ 特性

- **24个精选图源** — 二次元壁纸、Pixiv美少女、写真、JK制服、白丝、综合美女
- **Pixiv 图片支持** — 通过 Lolicon API v2 接入，支持多 CORS 代理自动回退
- **IndexedDB 持久化收藏** — 收藏夹数据本地存储，刷新不丢失，支持导出链接
- **滑动切图动画** — 触屏滑动切换图片，带方向指示器和动画反馈
- **键盘快捷键** — 方向键切图、空格键下一张、A 自动播放、F 全屏、C 复制链接、D 下载
- **完整 API 文档** — 每个图源都有 cURL、HTML、JS 调用示例，一键复制
- **响应式设计** — 适配手机、平板、桌面端，支持暗色主题
- **PWA 支持** — 可添加到主屏幕，离线浏览

## 🚀 快速开始

直接打开 [GitHub Pages](https://hiweny.github.io/moe-gallery/) 即可使用。

或本地运行：
```bash
git clone https://github.com/Hiweny/moe-gallery.git
cd moe-gallery
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## ⌨️ 快捷键

| 按键 | 功能 |
|------|------|
| ← → | 上一张/下一张 |
| 空格 | 下一张 |
| A | 自动播放/停止 |
| F | 全屏 |
| C | 复制图片链接 |
| D | 下载图片 |
| S | 切换图源 |

## 📱 触屏手势

| 手势 | 功能 |
|------|------|
| 左右滑动 | 切图（带动画方向指示器） |
| 单击 | 显示/隐藏工具栏 |
| 双击 | 全屏 |
| 长按 | 收藏/取消收藏 |

## 📡 API 图源列表

查看应用内「文档」标签页获取完整 API 使用文档，包含每个接口的 cURL、HTML、JS 调用示例。

## 🏗 技术栈

- 纯原生 HTML/CSS/JS（无框架依赖）
- IndexedDB 本地持久化
- Lolicon API v2 + 多 CORS 代理回退
- GitHub Pages 托管

## 📝 更新日志

### v9 (2026-07-28)
- IndexedDB 持久化收藏（刷新不丢失）
- 多 CORS 代理自动回退（corsproxy.io → allorigins.win → cors.eu.org → 直连）
- 滑动方向指示器 + 动画
- 敏感词脱敏处理
- 图源卡片不显示 API 详情，点击直接切换

## 📄 License

MIT
