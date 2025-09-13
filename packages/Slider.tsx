import { CSSProperties, useEffect, useState } from 'react';
import style from './index.module.scss';
import { itemProps } from './type';

import leftIcon from './assets/left.svg';

export default function Slider(props: {
    item: itemProps[],
    style?: CSSProperties;
    /**每一个轮播项container的样式 */
    itemStyle?: CSSProperties;
    /**是否启用背景图片 */
    backgroundImage?: boolean;
}) {
    const { item, itemStyle, backgroundImage } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        item.forEach((m) => {
            const img = new Image();
            img.src = m.src;
        });
    }, [item]);

    function handleLeft() {
        if (currentIndex === 0) {
            setCurrentIndex(item.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function handleRight() {
        if (currentIndex === item.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (<><div className={style["slider-container"]} style={props.style || { height: '60vh' }}>
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
    </>);
}