import { Tester } from '../src/app';

describe('Something', () => {
  it('just exists', () => {
    const tester = new Tester();
    expect(tester.write()).toBe('Hello!');
  });
});
