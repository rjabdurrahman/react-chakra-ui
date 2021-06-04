import currencyConverter from '../../helpers/currencyConverter';

it('test', () => {
  expect(currencyConverter(1000)).toBe('$1,000.00');
});