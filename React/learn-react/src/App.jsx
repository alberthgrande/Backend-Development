import { useContext, useState } from "react";
import "./App.css";
// import SignUpForm from "./components/SignUpForm";/
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <header
        style={{
          padding: "1rem 1.5rem",
          marginBottom: "1rem",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <div>
          {!user.isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <span>Welcome, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <main style={{ padding: "0 1.5rem" }}>
        <h1>Home</h1>

        {!user.isAuth ? (
          <p>You are not logged in. Go to login page to sign in.</p>
        ) : (
          <span>Welcome, {user.name}</span>
        )}
      </main>
    </>
  );
}

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <main style={{ padding: "0 1.5rem" }}>
        <h1>Profile</h1>

        <p>Name: {user.name || "No user logged in"}</p>
        <p>Here you could show more info from the context.</p>
      </main>
    </>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
    navigate("/profile");
  }

  return (
    <>
      <h1>Login </h1>
      <main>
        <form onSubmit={handleLogin} style={{ padding: "1.5rem" }}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button type="submit">Login</button>
        </form>

        {user.isAuth && <p>User Logged In</p>}
      </main>
    </>
  );
}

function App() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  function logout() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
