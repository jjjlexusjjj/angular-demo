import { AddressPipe } from './address.pipe';

describe('AddressPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AddressPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform Address object to string', () => {
    const pipe = new AddressPipe();
    expect(pipe.transform({
      country: 'Ukraine',
      city: 'Kyiv',
      street: 'Zhylyanska',
      building: 75
    })).toBe('Ukraine, Kyiv, Zhylyanska 75');
  });
});
