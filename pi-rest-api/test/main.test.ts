import axios from "axios";

test("Should get all neighborhoods", async function() {
    const response = await axios.get("http://localhost:3000/neighborhood");
    const neighborhoods = response.data;
    expect(Array.isArray(neighborhoods)).toBe(true);
});