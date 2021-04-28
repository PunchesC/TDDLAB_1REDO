const {translate} = require("./index");

describe("translate", () => {
  test ("simple string", () => {
    let result = translate("Apple");
    expect(result).toEqual("appleway");
  });


});
