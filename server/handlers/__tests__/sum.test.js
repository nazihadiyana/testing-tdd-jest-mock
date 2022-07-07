const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("sum 1+2", async () => {
    const request = httpMocks.createRequest({
        method: "POST",
        url: "/sum",
        body: {
            a: 1,
            b: 2
        },
    });
    const response = httpMocks.createResponse();
    await mathHandler.sum(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 3,
        error: null
    });
});
