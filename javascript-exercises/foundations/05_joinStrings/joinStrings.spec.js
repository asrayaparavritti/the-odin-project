const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Edimilson', () => {
    expect(values.firstName).toEqual('Edimilson');
  });
  test('lastName is Torres', () => {
    expect(values.lastName).toEqual('Torres');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2002', () => {
    expect(values.birthYear).toEqual(2002);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual("Hello! My name is Edimilson Torres and I am 24 years old.");
  });
});

describe('step 3', () => {
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Edimilson Torres');
  });
  test('age is 24', () => {
    expect(values.age).toEqual(24);
  });
});
