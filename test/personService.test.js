const personService = require('../src/personService');


test("1-PersonServiceTest : test object of getPerson", ()=>{
    expect(personService.getPerson()).toEqual({name:'Fahd',lastName:'KORAICHE'})
});

test("2-PersonServiceTest : test object of getPerson (NOT)", ()=>{
    expect(personService.getPerson()).not.toEqual({})
});

test("3-PersonServiceTest : String test case", ()=>{
    expect(personService.getPersonName()).toMatch('Fahd KORAICHE')
});
test("4-PersonServiceTest : String test case (NOT)", ()=>{
    expect(personService.getPersonName()).not.toMatch('KORAICHE Fahd')
});
test("5-PersonServiceTest : String test case", ()=>{
    expect("Hello").toMatch("Hello")
});
test("6-PersonServiceTest : String test case", ()=>{
    expect(personService.getPersonName()).toMatch(/Fahd/)
});
test("7-PersonServiceTest : String test case", ()=>{
    expect(personService.getPersonName()).toMatch(/^F/)
});
test("8-PersonServiceTest : String test case", ()=>{
    expect(personService.getPersonName()).toMatch(/E$/)
});