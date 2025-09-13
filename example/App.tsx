import Slider from '../packages/Slider';
import './index.scss'
import SliderComp, { itemProps } from '../dist/index.js';
import '../dist/index.css';


function App() {
  const item: itemProps[] = [
    {
      src: "https://www.arsrna.cn/images/solution/game/index.jpg",
      title: "强劲构建动力",
      content: (<>
        来自云原生构建CNB。全站点已全面接入CNB，带来无忧的CI/CD体验。
        <br />
        <a href="https://cnb.cool/arsrna/" target="_blank">
          点击查看
        </a>
      </>),
    },
    {
      src: "https://www.arsrna.cn/images/DSC09678.JPG",
      title: "ArRM集群渲染调度",
      content: (<>
        利用多机器的优势，缩短渲染时间
        <br />
        <a href="/app/render/" target="_blank">
          点击查看
        </a>
      </>),
    },
    {
      src: "https://res.arsrna.cn/arsrna.cn/VOD.png_copwh",
      title: "ArSrNa AI中心",
      content: (<>
        使用AI提高效率，事半功倍
        <br />
        <a href="https://ai.arsrna.cn" target="_blank">
          点击了解
        </a>
      </>),
    },

    {
      src: "https://res.arsrna.cn/arsrna.cn/app_esrgan/compare.jpg_copwh",
      title: "图像超分辨率",
      content: (<>
        基于ESRGAN增强型超分辨率生成对抗网络，使用Electron开发GUI，可实现图像与视频无损且线条连续地提升分辨率
        <br />
        <a href="app/esrgan/" target="_blank">
          点击查看
        </a>
      </>),
    },
    {
      src: "https://www.arsrna.cn/images/hdpics/3600.png",
      title: "协作参与，公开透明",
      content: (<>
        Ar-Sr-Na 所有开源项目平台
        <br />
        <div style={{ flexWrap: "wrap", display: 'flex', gap: 10 }}>
          <a href="https://cnb.cool/arsrna/" target="_blank">
            云原生构建
          </a>
          <a href="https://arsrna.coding.net/public/" target="_blank">
            Coding
          </a>
          <a href="https://github.com/arsrna" target="_blank">
            github
          </a>
        </div>
      </>),
    },
  ];

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
