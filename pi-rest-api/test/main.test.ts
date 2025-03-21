import axios from "axios";

test("Should get all neighborhoods", async function() {
    const {data} = await axios.get("http://localhost:3000/neighborhood");
    const neighborhoods = data;
    expect(Array.isArray(neighborhoods)).toBe(true);
    expect(neighborhoods.length).toBe(3);
    expect(neighborhoods[0].id).toBe('3');
});

test("Should get a neighborhood", async function() {
    const {data} = await axios.get("http://localhost:3000/neighborhood/3");
    const neighborhood = data;
    expect(neighborhood).toBeDefined();
    expect(neighborhood.id).toBeDefined();
    expect(neighborhood.name).toBeDefined();
    expect(neighborhood.pub_data).toBeDefined();
    expect(neighborhood.pcv_index).toBeDefined();
    expect(neighborhood.total_area).toBeDefined();
    expect(neighborhood.total_green_area).toBeDefined();
    expect(neighborhood.description).toBeDefined();

})