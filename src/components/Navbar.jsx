import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2>RecipeHub</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/create">Create</Link>
            <button onClick={logout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#333",
    color: "#fff"
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  button: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }
};