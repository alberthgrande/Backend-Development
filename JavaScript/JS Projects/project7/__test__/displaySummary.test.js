const { displaySummary } = require("../src/displaySummary");

describe("displaySummary", () => {
  test("should call console.log multiple times", () => {
    const mockLog = jest.spyOn(console, "log").mockImplementation(() => {});
    const cart = [{ name: "Apple", price: 10, quantity: 2 }];
    const discountResult = {
      discountRate: 0.1,
      discountAmount: 2,
      finalTotal: 18,
      freeShipping: false,
      userType: "REGULAR",
    };

    displaySummary(cart, 20, discountResult);
    expect(mockLog).toHaveBeenCalled();
    mockLog.mockRestore();
  });
});
