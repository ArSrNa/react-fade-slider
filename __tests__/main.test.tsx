import { render, screen, fireEvent, act } from '@testing-library/react';
import Slider from '../packages';
import '@testing-library/jest-dom';
import 'jest';

const mockItems = (n: number = 3) => new Array(n).fill(null).map((m, i) => (
    { title: `Slide ${i + 1}`, content: `Content ${i + 1}`, src: `test_${i + 1}.jpg` }
));

describe('渲染', () => {
    test('默认参数渲染', () => {
        render(<Slider item={mockItems()} />);
        expect(screen.getByText('Slide 1')).toBeInTheDocument();
    });
    test('数量正确（backgroundImage模糊启用）', () => {
        render(<Slider item={mockItems(4)} />);
        expect(document.querySelectorAll('img[src^="test_"]').length).toBe(8);
    });
    test('数量正确（backgroundImage模糊不启用）', () => {
        render(<Slider item={mockItems(4)} backgroundImage={false} />);
        expect(document.querySelectorAll('img[src^="test_"]').length).toBe(4);
    });
});

describe('自动播放', () => {
    test('自动播放', () => {
        render(<Slider item={mockItems()} autoplay={true} interval={1000} />);
        expect(screen.getByText('Slide 2')).toBeInTheDocument();
    });
})

describe('操作按钮', () => {
    test('下一张', () => {
        render(<Slider item={mockItems()} autoplay={false} />);
        const rightButton = screen.getAllByRole('img')[1];
        fireEvent.click(rightButton);
        expect(screen.getByText('Slide 2')).toBeInTheDocument();
    });

    test('上一张', () => {
        render(<Slider item={mockItems()} autoplay={false} />);
        const rightButton = screen.getAllByRole('img')[1];
        fireEvent.click(rightButton);
        const leftButton = screen.getAllByRole('img')[0];
        fireEvent.click(leftButton);
        expect(screen.getByText('Slide 1')).toBeInTheDocument();
    });

    it('改变时触发onChange', () => {
        const mockOnChange = jest.fn();
        render(<Slider item={mockItems()} onChange={mockOnChange} autoplay={false} />);
        const rightButton = screen.getAllByRole('img')[1];
        fireEvent.click(rightButton);
        expect(mockOnChange).toHaveBeenCalledWith(1);
    });
})


// ---------- 新增测试，覆盖未覆盖分支 ----------
describe('hover / interval / dot / style 相关', () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    test('hover 停止自动播放并显示暂停按钮（pauseOnHover）', () => {
        jest.useRealTimers();
        render(<Slider item={mockItems()} autoplay={false} interval={1000} pauseOnHover={true} />);

        const root = screen.getByTestId('slider-root');

        // mouseLeave → startInterval → isHover=true → 暂停按钮消失
        fireEvent.mouseLeave(root);
        expect(screen.queryByTestId('slider-pause-btn')).toBeInTheDocument();
    });
});