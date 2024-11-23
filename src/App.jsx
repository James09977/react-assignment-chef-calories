import { useState } from "react";
import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import Navbar from "./assets/Components/NavBar/Navbar";
import Recipes from "./assets/Components/OurRecipies/Recipes";
import RecipeHeder from "./assets/Components/RecipiHeader/RecipeHeder";
import SideBar from "./assets/Components/SideBar/SideBar";

function App() {
  const [recipes, setRecipies] = useState([]);

  const handleCook = (recipe) => {
    const updateRecipe = [...recipes, recipe];
    setRecipies(updateRecipe);
  };

  return (
    <>
      <div className="md:max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <RecipeHeder></RecipeHeder>
        <div className="flex justify-between">
          <Recipes handleCook={handleCook}></Recipes>

          <SideBar recipes={recipes}></SideBar>
        </div>
      </div>
    </>
  );
}

export default App;
