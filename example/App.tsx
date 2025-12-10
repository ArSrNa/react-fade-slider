import Slider from '../packages/Slider';
import './index.scss'
import SliderComp, { itemProps } from '../dist/index.js';
import '../dist/index.css';
import { Button, Divider, Space } from 'tdesign-react'
import 'tdesign-react/dist/tdesign.min.css'


function App() {
  const item: itemProps[] = [
    {
      src: "/5b60764dabc3bf50c2ad7b5ff8eae80b_2607687582866761407.png",
      title: "孑遗千星——星之环",
      content: (<>
        分野：无存之仪。特性：万有之星、界域共鸣、星影偕行、天渊易位
        <Divider />
        <Button href='https://baike.mihoyo.com/bh3/wiki/content/3364/detail?bbs_presentation_style=no_header'>了解更多</Button>
      </>),
    }, {
      src: "/fa9fc6e9532e4c56c9ad0e5e9548a06a_2258061419554533859.png",
      title: "超长文本内容和标题截断示例",
      content: (<>
        崩坏三 LV6 粉丝团17<br />
        5小时前 IP属地：上海<br /><br />
        不对，你不是爱酱!你是谁!(芽衣·大荒囚天指)<br /><br />
        崩坏三 LV6 粉丝团17<br />
        3小时前 IP属地：上海<br /><br />
        (创死他克利希娜)爱酱!撑住啊!我这就来救亻<br /><br />
        崩坏三 LV6 粉丝团17<br />13分钟前 IP属地：上海<br /><br />
        薇塔大人ᐠ( ᑒ )ᐟ 薇塔大人ᐠ( ᑒ )ᐟ 2024-08-31<br /><br />
        回复<br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et suscipit repellendus nesciunt nulla eum modi velit sit debitis vel. Beatae exercitationem dolorum vel eos aspernatur voluptates ipsum eum explicabo.
      </>),
    }, {
      src: "/16de7766a642388d21e4c76cacfde801_5165224128247218265.png",
      title: "孑遗千星——圣遗物",
      content: (<>
        推荐理由：兼具输出和辅助的配装。武器提高角色的输出和辅助能力。星之环激活时，全队角色可以通过圣痕三件套获得大量增益效果，进一步提高队伍整体输出。
        <Divider />
        <Button href='https://baike.mihoyo.com/bh3/wiki/content/3586/detail?bbs_presentation_style=no_header'>了解更多</Button>
      </>),
    },
  ];

  return (
    <>
      <h1>源文件</h1>
      <Slider item={item} pauseOnHover={true} autoplay={true} backgroundImage={true} />
      {/* <h1>编译后</h1>
      <SliderComp item={item} /> */}
      <p>*注意：上述所有素材均为测试使用，版权归原作者所有，禁止用于商业用途！</p>
    </>
  );
}

export default App;
