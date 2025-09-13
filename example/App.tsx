import { useState } from 'react';
import Slider from '../packages/Slider';
import SliderComp from '../dist/index';
import '../dist/index.css';
import { itemProps } from '../packages';
import './index.scss';


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
      <h1>源文件</h1>
      <Slider item={item} />
      <h1>编译后</h1>
      <SliderComp item={item} />
    </>
  );
}

export default App;
