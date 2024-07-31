// tests/createUser.test.js
const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('../API_Testing/config');
var userid;

test('POST Create User', async ({ request }) => {
    const userData = {
        name: "John Doe",
        job: "Software Engineer"
    };
    const response = await request.post(`${BASE_URL}/users`, { data: userData });
    expect(response.status()).toBe(201);
    const data = await response.json();

    var res = await response.json()
    userid = res.id

    // Print the data to the console
    console.log('Response Data:', JSON.stringify(data, null, 2));
    expect(data).toHaveProperty('name', userData.name);
    expect(data).toHaveProperty('job', userData.job);
});