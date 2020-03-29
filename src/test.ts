import { ClassedRef } from './Classed';

const Test = ClassedRef('Test', 'this-is-test', 'div');

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(Test).toBeTruthy();
  });
});
