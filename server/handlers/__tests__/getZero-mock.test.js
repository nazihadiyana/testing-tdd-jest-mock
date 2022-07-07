const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

jest.mock("../../../storage/models/math.model", () => {
    return {
        getZero: jest.fn()
    };
})

test("getZero", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/get-zero",
    });
    const response = httpMocks.createResponse();
    mathModel.getZero.mockResolvedValue(1);
    await mathHandler.getZero(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 1,
        error: null
    });
});