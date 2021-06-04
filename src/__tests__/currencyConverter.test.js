import currencyConverter from '../helpers/currencyConverter';

it('Currency Converting Test', () => {
  expect(currencyConverter(1000)).toBe('$1,000.00');
  expect(currencyConverter(100)).toBe('$100.00');
});