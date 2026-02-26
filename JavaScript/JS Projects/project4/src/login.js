function login(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    throw new Error("Username and password must be strings.");
  }

  if (username.trim() === "" || password.trim() === "") {
    throw new Error("Username and password cannot be empty.");
  }

  if (username !== "admin") {
    return "username not found";
  }

  if (password !== "password") {
    return "Incorrect password";
  }

  return "Login successful!";
}

module.exports = { login };
