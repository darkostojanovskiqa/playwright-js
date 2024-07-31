// tests/deleteUser.test.js
const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('../API_Testing/config');

test('GET Users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    const data = await response.json();
 // Print the data to the console
 console.log('Response Data:', JSON.stringify(data, null, 2));
})


test('DELETE User', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(204); // No Content status
    // Print the data to the console
    console.log('Response Data:', JSON.stringify(response, null, 2));
})