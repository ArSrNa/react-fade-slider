# React Slider 轮播图

复现Apple官网轮播介绍效果。

![](image/48e2a6a8-d6c2-4ef3-a7b4-f99888474719.png)

TODO

# 使用

````shell
npm i react-fade-slider
````

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

# API

| 字段 | 类型 | 是否必填 | 释义 | 默认值 |
|------|------|----------|------|-----------------------------|
| `item` | `itemProps[]` | 是 | 轮播项数据，包含标题、内容、图片等 | `undefined` |
| `style` | `CSSProperties` | 否 | 轮播容器的样式 | `undefined` |
| `itemStyle` | `CSSProperties` | 否 | 每个轮播项容器的样式 | `{ height: '60vh' }` |
| `backgroundImage` | `boolean` | 否 | 是否启用背景图片 | `true` |
| `autoplay` | `boolean` | 否 | 是否自动播放 | `true` |
| `interval` | `number` | 否 | 自动播放间隔（毫秒），建议不小于 3 秒 | `5000` |
| `pauseOnHover` | `boolean` | 否 | 鼠标悬停时是否暂停轮播，| `true` |