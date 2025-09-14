# React Slider 轮播图

复现Apple官网轮播介绍效果。

![](image/48e2a6a8-d6c2-4ef3-a7b4-f99888474719.png)

CNB不支持视频直接预览，[点此查看效果](image/index.mp4)

TODO

# 使用

## 安装
````shell
npm i react-fade-slider
````

## 基本用法
```jsx
import SliderComp, { itemProps } from 'react-fade-slider';
// 没有注入js，只能手动引入css
import 'react-fade-slider/dist/index.css';

function App() {
  const item: itemProps[] = [{
    title: '这是标题',
    content: <>内容123456789<button>按钮</button></>,
    src: "/5b60764dabc3bf50c2ad7b5ff8eae80b_2607687582866761407.png"
  }, {
    title: '<>这是标题2</>',
    content: <>我永远喜欢薇塔</>,
    src: "/16de7766a642388d21e4c76cacfde801_5165224128247218265.png"
  }, {
    title: '这是标题3',
    content: <>内容123456789<button>按钮</button></>,
    src: "/fa9fc6e9532e4c56c9ad0e5e9548a06a_2258061419554533859.png"
  }];

  return (
    <>
      <Slider item={item} />
    </>
  );
}
```

## 轮播

启用轮播，设置`autoplay`为`true`，`interval`为轮播间隔（毫秒），建议不小于3秒，使动画能够完整播放。

````jsx
<Slider item={item} autoplay interval={3000}/>
````

## 禁用背景图片
默认开启了背景图片填充，在`translate`动画的情况下防止背景一片空白，如果需要禁用，设置`backgroundImage`为`false`。
````jsx
<Slider item={item} backgroundImage={false}/>
````

## 缩放比例
图片自带缩放动画，可以设置缩放比例，默认1.15，如果图片太大，可以设置为1.2
````jsx
<Slider item={item} scaleRatio={1.15}/>
````

## 自动暂停
鼠标悬停时自动暂停轮播，默认开启，设置`pauseOnHover`为`false`禁用。
````jsx
<Slider item={item} pauseOnHover={false}/>
````

# demo测试

克隆本仓库

```shell
git clone https://cnb.cool/arsrna/os/react-fade-slider.git
cd react-fade-slider
```

安装依赖并启动
```shell
pnpm i
pnpm start
```

访问`http://localhost:5173`查看效果

# 开发

包目录在`packages/Slider.tsx`，`packages/index.tsx`是入口文件

`packages/index.module.scss`是样式文件。为防止css选择器冲突，这里使用模块化css，在使用tsx组件的时候，要设置`className={styles.xxx(xxx为class名)}`


# API

| 字段 | 类型 | 是否必填 | 释义 | 默认值 |
|------|------|----------|------|-----------------------------|
| `item` | `itemProps[]` | 是 | 轮播项数据，包含标题、内容、图片等 | `void '我永远喜欢爱莉希雅'` |
| `style` | `CSSProperties` | 否 | 轮播容器的样式 | `void '我永远喜欢爱莉希雅'` |
| `itemStyle` | `CSSProperties` | 否 | 每个轮播项容器的样式 | `{ height: '60vh' }` |
| `imgStyle` | `CSSProperties` | 否 | 每个轮播项图片的样式 | `{ "--scale-ratio": scaleRatio }` |
| `backgroundImage` | `boolean` | 否 | 是否启用背景图片 | `true` |
| `autoplay` | `boolean` | 否 | 是否自动播放 | `true` |
| `interval` | `number` | 否 | 自动播放间隔（毫秒），建议不小于 3 秒 | `5000` |
| `pauseOnHover` | `boolean` | 否 | 鼠标悬停时是否暂停轮播，| `true` |
| `scaleRatio` | `number` | 否 | 缩放比例 | `1.15` |
| `onChange` | `(index: number) => any` | 否 | 切换回调 | `void '我永远喜欢爱莉希雅'` |