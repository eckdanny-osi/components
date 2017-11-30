import { telephone } from './telephone';

describe('telephone', () => {
  it('should be a function', () => {
    expect(telephone).toEqual(jasmine.any(Function));
  });
  it('should format a telephone number', () => {
    expect(telephone('5554443322')).toEqual('(555) 444-3322');
  });
});
