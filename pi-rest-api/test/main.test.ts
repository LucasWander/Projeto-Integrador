import axios from "axios";



test("Should get all neighborhoods", async function() {
    const {data} = await axios.get("http://localhost:3000/neighborhood");
    const neighborhoods = data.data;
    expect(Array.isArray(neighborhoods)).toBe(true);

});

test("Should get a neighborhood", async function() {
    const {data} = await axios.get("http://localhost:3000/neighborhood");
    const neighborhood = data.data[0];
    expect(neighborhood).toBeDefined();
    expect(neighborhood.id).toBeDefined();
    expect(neighborhood.name).toBeDefined();
    expect(neighborhood.pub_data).toBeDefined();
    expect(neighborhood.pcv_index).toBeDefined();
    expect(neighborhood.total_area).toBeDefined();
    expect(neighborhood.total_green_area).toBeDefined();
    expect(neighborhood.description).toBeDefined();

});

test("Should all neighborhoods with pcv index smaller than 30%", async function() {
    const {data} = await axios.get("http://localhost:3000/neighborhood?pcvSmaller=30");
    const neighborhoods = data.data;
   
    expect(Array.isArray(neighborhoods)).toBe(true);
    neighborhoods.forEach((neighborhood:any) => {
        expect(neighborhood.pcv_index).toBeLessThan(30);
    });
});

test("Should get all neighborhoods with area bigger than 1km square", async function ()  {
    const {data} = await axios.get("http://localhost:3000/neighborhood?areaBigger=1");
    const neighborhoods = data.data;

    expect(Array.isArray(neighborhoods)).toBe(true);
    neighborhoods.forEach((neighborhood:any) => {
        expect(neighborhood.total_area).toBeGreaterThan(1);
    });
});

test("Should get all neighborhoods with green area bigger than 1km square", async function ()  {
    const {data} = await axios.get("http://localhost:3000/neighborhood?greenAreaBigger=1");
    const neighborhoods = data.data;

    expect(Array.isArray(neighborhoods)).toBe(true);
    neighborhoods.forEach((neighborhood:any) => {
        expect(neighborhood.total_green_area).toBeGreaterThan(1);
    });
});