const fetchData = require('../src/fetchData');


beforeAll(()=>{
    console.log("BEFORE ALL");
});

beforeEach(()=>{
    console.log("Setting up the env before running a test in this file...");
});

test('0-Testing a promise', ()=>{
    fetchData.fetchAsPromise().then((data)=>{
        expect(data).toBe("Data from API")
    });
} );

test('1-Testing a promise with await', async ()=>{
    const data = await fetchData.fetchAsPromise()
    expect(data).toBe("Data from API")
} );


afterEach(()=>{
    console.log("Setting up the env before running a test in this file...");
});

afterAll(()=>{
    console.log("AFTER ALL");
});
