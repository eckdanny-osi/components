import { telephone } from './telephone';

describe('telephone', () => {
  it('should be a function', () => {
    expect(telephone).toEqual(jasmine.any(Function));
  });
  it('should match valid telephone numbers', () => {
    expect(telephone('9998887766')).toBe(true);
    expect(telephone('555444332')).toBe(false);
    expect(telephone('55544433222')).toBe(false);
  });
  it('should work with Number types', () => {
    expect(telephone(5554443322)).toBe(true);
  })
});
