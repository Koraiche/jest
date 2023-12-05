const sum = require('../src/sum');


test("First Test case", ()=>{
    expect(sum(10,20)).toBe(30)
});

test("Second Test case", ()=>{
    expect(sum(1,3)).toBe(4)
});

test("Third Test case", ()=>{
    expect(sum(1,3)).not.toBe(3)
});