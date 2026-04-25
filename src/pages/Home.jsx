import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const { user } = useAuth();

  const fetchRecipes = () => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this recipe?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    });

    fetchRecipes();
  };

  return (
    <div>
      <h1 className="page-title">All Recipes</h1>

      <div className="recipe-grid">
        {recipes.length === 0 ? (
          <p>No recipes yet...</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} />

              <div className="recipe-content">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p className="author">Author: {recipe.author}</p>

                {user && user.email === recipe.author && (
                  <div className="actions">
                    <Link className="edit-link" to={`/edit/${recipe.id}`}>
                      Edit
                    </Link>

                    <button onClick={() => handleDelete(recipe.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}