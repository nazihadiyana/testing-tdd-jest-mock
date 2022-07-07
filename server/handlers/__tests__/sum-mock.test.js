const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

jest.mock("../../../storage/models/math.model", () => {
    return {
        sum: jest.fn(),
    };
})

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
    mathModel.sum.mockResolvedValue(1000);
    await mathHandler.sum(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 1000,
        error: null
    });
});
