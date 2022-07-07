const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("isLeapYear true", async () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2020-02-29"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/leapyear",
  });
  const response = httpMocks.createResponse();
  await mathHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});

test("isLeapYear false", async () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2021-02-29"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/leapyear",
  });
  const response = httpMocks.createResponse();
  await mathHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: false,
    error: null,
  });
});
