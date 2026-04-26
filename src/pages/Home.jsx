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
      <section className="hero">
        <div>
          <span className="hero-badge">Fresh recipes every day</span>
          <h1>Discover, create and manage your favorite recipes.</h1>
          <p>
            RecipeHub helps you store your recipes, share ideas and manage your
            personal food collection in one simple React application.
          </p>

          {user ? (
            <Link to="/create" className="hero-button">
              Create your recipe
            </Link>
          ) : (
            <Link to="/register" className="hero-button">
              Get started
            </Link>
          )}
        </div>
      </section>

      <div className="section-heading">
        <h2>Latest Recipes</h2>
        <p>Browse all recipes added to the platform.</p>
      </div>

      <div className="recipe-grid">
        {recipes.length === 0 ? (
          <p className="empty-message">No recipes yet...</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} />

              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <p className="author">Created by {recipe.author}</p>

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