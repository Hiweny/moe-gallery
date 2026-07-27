# MoeGallery API 文档

> 美女 & 二次元随机图 API 统一文档 · 2026-07-27 深度测试

## 快速开始

所有接口均为 **GET 请求**，直接返回图片（302 跳转或直出），可直接用作 `<img src>` 或通过 fetch/curl 调用。

```
# 最简单的用法 - 随机获取一张二次元美女图
curl -o image.jpg "https://imgapi.xl0408.top/index.php"

# 或直接在 HTML 里用
<img src="https://www.loliapi.com/acg/pc" />
```

> **注意**：部分接口使用 HTTP（非 HTTPS），建议 Referer 设置为 `https://www.weibo.com/` 以避免防盗链问题。

---

## 接口列表

### ✨ 二次元 / ACG

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 二次元壁纸 | `https://v2.xxapi.cn/api/randomAcgPic?type=pc&return=302` | 直出302 | ~200ms | 1920×1080 | ⭐S |
| 随机二次元 | `https://imgapi.xl0408.top/index.php` | 直出 | ~300ms | 2773×1440 | ⭐S |
| 樱花二次元 | `https://www.dmoe.cc/random.php` | 直出 | ~1200ms | 1962×1104 | A |
| LoliAPI PC横屏 | `https://www.loliapi.com/acg/pc` | 直出WebP | ~2600ms | 3779×2126 | A |
| LoliAPI PE竖屏 | `https://www.loliapi.com/acg/pe` | 直出WebP | ~2500ms | 2366×4093 | A |
| LoliAPI 头像 | `https://www.loliapi.com/acg/pp` | 直出WebP | ~400ms | 766×766 | B |
| Jitsu 涩图 | `https://moe.jitsu.top/api` | 直出 | ~1000ms | 2650×4144 | A |
| 赫萝随机图 | `https://api.horosama.com/random.php` | 直出 | ~500ms | 1920×1080 | A |
| 次元API竖屏 | `https://t.alcy.cc/mp` | 直出WebP | ~550ms | 1983×2755 | A |
| 雨今 ACG | `http://api.yujn.cn/api/ACG.php` | 直出 | ~230ms | 1080×1350 | ⭐S |
| 雨今 二次元 | `http://api.yujn.cn/api/ecy.php` | 直出WebP | ~1900ms | 1920×1080 | A |
| 雨今 高质量ACG | `http://api.yujn.cn/api/gzl_ACG.php` | 直出 | ~280ms | 5760×3240 | ⭐S |
| 樱道动漫综合① | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=动漫综合1` | 直出WebP | ~240ms | 1920×1080 | A |
| 樱道动漫综合② | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=动漫综合2` | 直出WebP | ~280ms | 1920×1080 | A |
| 白底二次元 | `https://api.paugram.com/wallpaper/` | 直出 | ~2600ms | 1920×1080 | B |
| 墨天逸 | `https://api.mtyqx.cn/tapi/random.php` | 直出 | ~1100ms | 2005×1128 | A |
| 98情缘 | `http://www.98qy.com/sjbz/api.php` | 直出 | ~1200ms | 3200×1800 | A |

### 🎮 动漫角色 / 游戏

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 樱道·原神 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=原神` | 直出WebP | ~200ms | 2610×1440 | A |
| 樱道·赛马娘 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=赛马娘` | 直出WebP | ~190ms | 1920×1080 | A |
| 樱道·鬼灭之刃 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=鬼灭之刃` | 直出WebP | ~160ms | 3840×2160 | ⭐S |
| 樱道·火影忍者 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=火影忍者` | 直出WebP | ~210ms | 5600×4000 | ⭐S |
| 樱道·咒术回战 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=咒术回战` | 直出WebP | ~200ms | 4096×2229 | ⭐S |
| 樱道·王者荣耀 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=王者荣耀` | 直出WebP | ~170ms | 1920×882 | A |
| 樱道·龙珠 | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=龙珠` | 直出WebP | ~235ms | 3602×2074 | ⭐S |
| 东方Project | `https://img.paulzzh.com/touhou/random` | 直出 | ~600ms | 1312×1059 | B |

### 📸 写真 / 真人美女

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 樱道·少女写真① | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=少女写真1` | 直出WebP | ~280ms | 1024×683 | B |
| 樱道·少女写真② | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=少女写真2` | 直出WebP | ~200ms | 448×424 | C |
| 樱道·少女写真③ | `https://api.r10086.com/樱道随机图片api接口.php?图片系列=少女写真3` | 直出WebP | ~250ms | 2321×2163 | ⭐S |
| 糖豆子·美女 | `http://api.tangdouz.com/mn.php` | 返回链接 | ~300ms | 1242×971 | B |
| 糖豆子·竖屏 | `http://api.tangdouz.com/abz/dm.php` | 返回链接 | ~380ms | 1080×1920 | A |

> **久黎写真接口**：`http://jiuli.xiaoapi.cn/i/img/mnyjs.php` 返回 JSON，包含5张图集，解析 `data.img[]` 字段取图。

### 👒 JK制服

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 雨今·JK制服 | `http://api.yujn.cn/api/jk.php` | 直出PNG | ~160ms | 1000×1442 | ⭐S |

### 🤍 白丝

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 小小API·白丝 | `https://v2.xxapi.cn/api/baisi?return=302` | 直出302 | ~190ms | 1080×1360 | ⭐S |
| 雨今·白丝 | `http://api.yujn.cn/api/baisi.php` | 直出 | ~340ms | 960×1280 | A |

### 🖤 黑丝

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 小小API·黑丝 | `https://v2.xxapi.cn/api/heisi?return=302` | 直出302 | ~290ms | 1292×2134 | ⭐S |
| 雨今·黑丝 | `http://api.yujn.cn/api/heisi.php` | 直出 | ~500ms | 884×1920 | A |
| 雨今·黑丝精品① | `http://api.yujn.cn/api/hsjp1.php` | 直出 | ~190ms | 1080×1440 | ⭐S |
| 雨今·黑丝精品② | `http://api.yujn.cn/api/hsjp2.php` | 直出 | ~190ms | 1080×1254 | ⭐S |

### 💐 综合美女

| 名称 | 接口地址 | 格式 | 平均速度 | 分辨率 | 评级 |
|------|----------|------|---------|--------|------|
| 小小API·三次元 | `https://v2.xxapi.cn/api/meinvpic?return=302` | 直出302 | ~310ms | 733×1100 | A |
| 雨今·小姐姐 | `http://api.yujn.cn/api/ksxjj.php` | 直出 | ~180ms | 955×1601 | ⭐S |
| 雨今·小姐姐图 | `http://api.yujn.cn/api/xjjtp.php` | 直出 | ~170ms | 872×1552 | ⭐S |
| 雨今·养眼 | `http://api.yujn.cn/api/yangyan.php` | 直出 | ~890ms | 1533×2048 | A |
| 雨今·美娇娘 | `http://api.yujn.cn/api/mjx.php` | 直出WebP | ~190ms | 800×768 | B |
| 雨今·美图集 | `http://api.yujn.cn/api/mcj.php` | 直出WebP | ~1600ms | 2048×1152 | A |

---

## 评级说明

| 评级 | 标准 |
|------|------|
| ⭐S | 速度<500ms + 分辨率≥1080p + 3/3轮稳定 |
| A | 速度<3s + 分辨率≥720p + 稳定可用 |
| B | 可用但速度偏慢/分辨率偏低/需特殊处理 |
| C | 质量不稳定，偶尔出小图或空响应 |

## 调用技巧

### 1. 去缓存参数
所有接口建议加时间戳参数避免缓存：
```
https://api.example.com/path?_t=1689123456789
```

### 2. Referer 设置
部分接口有防盗链，请求时设置：
```
Referer: https://www.weibo.com/
```

### 3. JSON 类型接口
- **久黎写真**：GET 返回 JSON，`data.img[]` 包含5张图片URL
- **糖豆子系列**：GET 返回纯文本链接，需二次请求取图

### 4. 樱道API 参数
支持 JSON 模式（加 `&参数=json` 返回 JSON 而非图片）：
```
https://api.r10086.com/樱道随机图片api接口.php?图片系列=动漫综合1&参数=json
```

---

## 站点总览

| 站点 | 可用接口数 | 特点 |
|------|-----------|------|
| api.yujn.cn | 38+ | 接口最丰富，无需Key |
| api.r10086.com | 18系列 | 中文参数，动漫/游戏/写真全覆盖 |
| www.loliapi.com | 4 | 高质量WebP，PC/PE双尺寸 |
| v2.xxapi.cn | 4免费 | 302直出，速度快 |
| api.tangdouz.com | 4 | 返回文本链接，需二次请求 |
| 其他各站点 | 1-2个 | 各有特色 |

---

*本文档由 MoeGallery 项目自动生成 · 测试环境: 远程沙盒 · 2026-07-27*
