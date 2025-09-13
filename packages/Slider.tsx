import { CSSProperties, useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { itemProps } from './type';

import leftIcon from './assets/left.svg';

export default function Slider(props: {
    item: itemProps[],
    /**container样式 */
    style?: CSSProperties;
    /**每一个轮播项container的样式 */
    itemStyle?: CSSProperties;
    /**是否启用背景图片 */
    backgroundImage?: boolean;
    /**是否自动播放 */
    autoplay?: boolean;
    /**自动播放间隔(ms)，建议不小于3秒，否则动画无法正常播放 */
    interval?: number;
    /**在hover时停止轮播 */
    pauseOnHover?: boolean;
}) {
    const { item, itemStyle, backgroundImage = true, autoplay = true, interval = 5000, pauseOnHover = true } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const timer = useRef(null);

    useEffect(() => {
        if (autoplay) {
            handleStartInterval();
        }
        return () => {
            handleStopInterval();
        };
    }, [autoplay, interval]);

    useEffect(() => {
        item.forEach((m) => {
            const img = new Image();
            img.src = m.src;
        });
    }, [item]);

    function handleStartInterval() {
        // console.log('startInterval');
        if (timer.current !== null) return;
        timer.current = setInterval(() => {
            handleRight();
        }, interval);
    }

    function handleStopInterval() {
        // console.log('stopInterval');
        if (timer.current === null) return;
        clearInterval(timer.current);
        timer.current = null;
    }

    function handleLeft() {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === 0 ? item.length - 1 : prevIndex - 1;
            return newIndex;
        });
    }

    function handleRight() {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === item.length - 1 ? 0 : prevIndex + 1;
            return newIndex;
        });
    }

    return (<div className={style["slider-container"]} style={props.style || { height: '60vh' }}
        onMouseLeave={() => {
            if (pauseOnHover) handleStartInterval();
        }}
        onMouseEnter={() => {
            if (pauseOnHover) handleStopInterval();
        }}>
        <div className={style["slider-handler"]}>
            <img src={leftIcon} onClick={handleLeft} />
            <img src={leftIcon} style={{ transform: 'rotate(180deg)' }} onClick={handleRight} />
        </div>
        <div className={style["slider-item-container"]}>
            {item && item.map((m, i) => <>
                <div className={`${style["slider-item"]} ${currentIndex === i ? style["slider-item-active"] : ''}`} style={itemStyle} key={`${m.title}${m.content}${m.src}`}>
                    <div className={style["slider-item-layer"]}>
                        <div className={style["slider-item-title"]}>
                            {m.title}
                        </div>
                        <div className={style["slider-item-content"]} >
                            {m.content}
                        </div>
                    </div>
                    <div className={style['slider-img']}>
                        <div className={style['slider-mask']} />
                        <img src={m.src} />
                    </div>
                    {backgroundImage && <img className={style["slider-bg-img"]} src={m.src} />}
                </div>
            </>
            )}
        </div>
        <div className={style["slider-dot"]}>{item && item.map((m, i) => (<div>{i}</div>))}</div>
    </div>
    );
}