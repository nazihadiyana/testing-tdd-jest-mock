const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("is21Century false", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2100-01-01'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century"
    });
    const response = httpMocks.createResponse();
    await mathHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});

test("is21Century true", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2000-01-01'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century"
    });
    const response = httpMocks.createResponse();
    await mathHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});
