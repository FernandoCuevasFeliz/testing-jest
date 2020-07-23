import { sum } from '../src/functions/aritmetic';

describe('sumar numeros', () => {
  it('dos numeros positivos', () => {
    const result = sum(12, 15);
    expect(result).toBe(27);
  });
});
