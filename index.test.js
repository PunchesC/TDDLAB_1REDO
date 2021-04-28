const {translate} = require("./index");

describe("translate", () => {
  test ("simple string", () => {
    let result = translate("Apple");
    expect(result).toEqual("appleway");
  });
  test ("e string", () => {
    let result = translate("earth");
    expect(result).toEqual("earthway");
  });
  
  test ("i string", () => {
    let result = translate("Ice");
    expect(result).toEqual("iceway");
  });
  test ("ostring", () => {
    let result = translate("ocean");
    expect(result).toEqual("oceanway");
  });
  test ("u string", () => {
    let result = translate("underware");
    expect(result).toEqual("underwareway");
  });
  
  
  test ("barn string", () => {
    let result = translate("barn");
    expect(result).toEqual("arnbay");
  });
  
  test ("banana string", () => {
    let result = translate("banana");
    expect(result).toEqual("ananabay");
  });
  
  test ("banana string", () => {
    let result = translate("hhhh");
    expect(result).toEqual("hhhhay");
  });
  
  test ("banana string", () => {
    let result = translate("scholar");
    expect(result).toEqual("olarschay");
  });
  
  test ("banana string", () => {
    let result = translate("Tractor");
    expect(result).toEqual("actortray");
  });

});


