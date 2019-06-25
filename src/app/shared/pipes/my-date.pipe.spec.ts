import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {

  let pipe:MyDatePipe;

  beforeEach(()=>{
    pipe = new MyDatePipe();

  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null when pass invalid date string', () => {
    const input = 'blackhole';
    const output = null;
    expect(pipe.transform(input)).toEqual(output);
  });

  it('should return proper date string when parse UTC date string', () => {
    const input = "Sat Apr 06 2019 13:14:48 GMT+0200 (czas środkowoeuropejski letni)";
    const output = "06 kwietnia 2019, 13:14:48";
    expect(pipe.transform(input)).toEqual(output);
  });

});
