import { CSSProperties, useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { itemProps } from './type';

import leftIcon from './assets/left.svg';
import pauseIcon from './assets/pause.svg';

export default function Slider(props: {
    item: itemProps[],
    /**container样式 */
    style?: CSSProperties;
    /**每一个轮播项container的样式 */
    itemStyle?: CSSProperties;
    /**图片样式 */
    imgStyle?: CSSProperties;
    /**是否启用背景图片 */
    backgroundImage?: boolean;
    /**是否自动播放 */
    autoplay?: boolean;
    /**自动播放间隔(ms)，建议不小于3秒，否则动画无法正常播放 */
    interval?: number;
    /**在hover时停止轮播 */
    pauseOnHover?: boolean;
    /**图片缩放幅度，默认1.2 */
    scaleRatio?: number;
    /**切换回调 */
    onChange?: (index: number) => any;
}) {
    const { item, itemStyle, backgroundImage = true, autoplay = true, interval = 5000, pauseOnHover = true, scaleRatio = 1.15, imgStyle, onChange } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHover, setIsHover] = useState(!pauseOnHover);

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
        onChange && onChange(currentIndex)
    }, [currentIndex])

    useEffect(() => {
        item.forEach((m) => {
            const img = new Image();
            img.src = m.src;
        });
    }, [item]);

    function handleStartInterval() {
        // console.log('startInterval');
        if (timer.current !== null) return;
        setIsHover(true);
        timer.current = setInterval(() => {
            handleRight();
        }, interval);
    }

    function handleStopInterval() {
        // console.log('stopInterval');
        if (timer.current === null) return;
        setIsHover(false);
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
            if (pauseOnHover && autoplay) handleStartInterval();
        }}
        onMouseEnter={() => {
            if (pauseOnHover && autoplay) handleStopInterval();
        }}>
        <div className={style["slider-handler"]}>
            <img src={leftIcon} onClick={handleLeft} />
            <img src={leftIcon} style={{ transform: 'rotate(180deg)' }} onClick={handleRight} />
        </div>
        <div className={style["slider-item-container"]}>
            {item && item.map((m, i) =>
                <div
                    className={`${style["slider-item"]} ${currentIndex === i ? style["slider-item-active"] : ''}`}
                    style={itemStyle}
                    key={`${m.title}${m.content}${m.src}`}>
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
                        <img src={m.src} style={{
                            ...imgStyle,
                            "--scale-ratio": scaleRatio
                        } as CSSProperties} />
                    </div>
                    {backgroundImage && <img
                        className={style["slider-bg-img"]} src={m.src}
                    />}
                </div>
            )}
        </div>
        <div className={`${style["slider-dot-container"]}`}>
            {item && item.map((m, i) => (
                <div onClick={() => setCurrentIndex(i)} className={style["slider-dot"]}
                    key={`slider-dot-${i}`}>
                    <div
                        className={`${currentIndex === i ? style["slider-dot-active"] : ''}`}
                        style={{
                            // 带一点偏移，同步动画
                            '--ani-duration': `${interval / 1000 + 0.2}s`,
                            '--running-state': isHover ? "running" : "paused"
                        } as CSSProperties}
                    />
                    <div className={style['slider-dot-bg']} />
                </div>))}
        </div>
        {!isHover && <div className={style['slider-state-btn']}>
            <img src={pauseIcon} />
        </div>}
    </div>
    );
}