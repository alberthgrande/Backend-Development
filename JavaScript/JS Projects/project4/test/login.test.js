const { login } = require("../src/login");

describe("Login Function Tests", () => {
  test('should return "Login successful!" for correct credentials', () => {
    expect(login("admin", "password")).toBe("Login successful!");
  });

  test('should return "username not found" for incorrect username', () => {
    expect(login("user", "password")).toBe("username not found");
  });

  test('should return "Incorrect password" for incorrect password', () => {
    expect(login("admin", "wrongpassword")).toBe("Incorrect password");
  });

  test("should throw error for non-string username or password", () => {
    expect(() => login(123, "password")).toThrow(
      "Username and password must be strings.",
    );
    expect(() => login("admin", 123)).toThrow(
      "Username and password must be strings.",
    );
  });

  test("should throw error for empty username or password", () => {
    expect(() => login("", "password")).toThrow(
      "Username and password cannot be empty.",
    );
    expect(() => login("admin", "")).toThrow(
      "Username and password cannot be empty.",
    );
  });
});
