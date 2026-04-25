import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const { user } = useAuth();

  const fetchRecipes = () => {
    fetch("http://localhost:3000/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this recipe?");

    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE"
    });

    fetchRecipes();
  };

  return (
    <div>
      <h1>All Recipes</h1>

      {recipes.length === 0 ? (
        <p>No recipes yet...</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={styles.card}>
            <h2>{recipe.title}</h2>
            <img src={recipe.imageUrl} width="200" />
            <p>{recipe.description}</p>

            {user && (
              <div style={styles.actions}>
                <Link to={`/edit/${recipe.id}`}>Edit</Link>

                <button onClick={() => handleDelete(recipe.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0"
  },
  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  }
};