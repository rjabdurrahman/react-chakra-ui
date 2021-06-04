import { render, fireEvent, screen } from '@testing-library/react';
import Card from '../components/Card';

test('Test Input Render', () => {
    const { queryByTestId } = render(<Card />);
    const inputField = queryByTestId('currency-input');
    expect(inputField).toBeTruthy();
});

test('Test Input Value', () => {
    const { queryByTestId } = render(<Card />);
    const inputField = queryByTestId('currency-input');
    fireEvent.change(inputField, {
        target: {
            value: '20000'
        }
    });
    expect(inputField.value).toBe('20000');
});

test('Test Card Value', () => {
    const { queryByTestId } = render(<Card />);
    const cardCurrecnyText = queryByTestId('currency-text');
    const inputField = queryByTestId('currency-input');
    fireEvent.change(inputField, {
        target: {
            value: '80000'
        }
    });
    expect(cardCurrecnyText.textContent).toBe('$80,000.00');
});