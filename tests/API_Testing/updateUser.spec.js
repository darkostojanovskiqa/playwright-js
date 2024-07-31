// tests/updateUser.test.js
const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('../API_Testing/config');
var userid;

test('PUT Update User', async ({ request }) => {
    const userData = {
        name: "Jane Doe",
        job: "Project Manager",

    };

    // Step 1: Update the user
    const updateResponse = await request.put(`${BASE_URL}/users/`+userid, { data: userData });
    expect(updateResponse.status()).toBe(200);
    const updatedUserData = await updateResponse.json();


    // Step 2: Fetch the full list of users
    const userListResponse = await request.get(`${BASE_URL}/users?page=2`);
    expect(userListResponse.status()).toBe(200);
    const userListData = await userListResponse.json();

    // Print the full list of users to the console
    console.log('Full User List Data:', JSON.stringify(userListData, null, 2));

    // Step 3: Include the updated user in the user list
    const updatedRecord = {
        id: 12,
        email: "janedoe@reqres.in",
        first_name: "Jane",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        job: "Project Manager",
        updatedAt: updatedUserData.updatedAt // Include the updated timestamp
    };

    // Replace the old user data with the updated user data
    const updatedDataList = userListData.data.map(user =>
        user.id === updatedRecord.id ? updatedRecord : user
    );

    const expectedResponse = {
        page: userListData.page,
        per_page: userListData.per_page,
        total: userListData.total,
        total_pages: userListData.total_pages,
        data: updatedDataList,
        support: userListData.support
    };

    // Step 4: Assert that the user list does NOT match the expected response
    expect(userListData).not.toEqual(expectedResponse);

    // Print the final expected response to the console
    console.log('Expected Response Data:', JSON.stringify(expectedResponse, null, 2));

    // Print the updated user data to the console
    console.log('Updated User Data:', JSON.stringify(updatedUserData, null, 2));

});