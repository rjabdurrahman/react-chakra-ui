import { currencyConverter } from '../Card';

test('test', () => {
  expect(currencyConverter(1000)).toBe('$1,000.00');
})