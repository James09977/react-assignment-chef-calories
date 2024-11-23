import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipie from "../Recipe/Recipe";

const Recipes = ({ handleCook }) => {
  const [recipies, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-2/3 md:grid grid-cols-2 gap-4 mx-auto">
      {recipies.map((recipe, idx) => (
        <Recipie key={idx} recipe={recipe} handleCook={handleCook}></Recipie>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleCook: PropTypes.func,
};

export default Recipes;
