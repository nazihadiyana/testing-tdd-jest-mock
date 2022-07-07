const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("getZero", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/get-zero",
    });
    const response = httpMocks.createResponse();
    await mathHandler.getZero(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 0,
        error: null
    });
});