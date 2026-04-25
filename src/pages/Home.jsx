import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.log(err));
  }, []);

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
  }
};