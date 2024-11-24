import { useState } from "react";
import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import Navbar from "./assets/Components/NavBar/Navbar";
import Recipes from "./assets/Components/OurRecipies/Recipes";
import RecipeHeder from "./assets/Components/RecipiHeader/RecipeHeder";
import SideBar from "./assets/Components/SideBar/SideBar";
import Cook from "./assets/Components/Cook/Cook";

function App() {
  const [recipes, setRecipies] = useState([]);
  const [toast, setToast] = useState("hidden");
  const [cook, setCook] = useState([]);

  const handleCook = (recipe) => {
    // --------- finding duplicate-------------
    const isDuplicate = recipes.some((r) => r.recipe_id === recipe.recipe_id);
    // console.log(isDuplicate);
    if (!isDuplicate) {
      const updateRecipe = [...recipes, recipe];
      setToast("hidden");

      setRecipies(updateRecipe);
    } else {
      setToast("");
    }
  };

  const handlePreparing = (cooks) => {
    // console.log(id);
    const newCook = [...cook, cooks];
    setCook(newCook);
  };

  const removeTtem = (id) => {
    const updateCook = recipes.filter((c) => c.recipe_id !== id);
    setRecipies(updateCook);
    // console.log(cook);
    // console.log(id);
  };

  return (
    <>
      <div className="md:max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner toast={toast}></Banner>
        <RecipeHeder></RecipeHeder>
        <div className="flex justify-between">
          <Recipes handleCook={handleCook}></Recipes>

          <div className="w-1/3">
            <div className="border rounded-2xl">
              <SideBar
                removeTtem={removeTtem}
                handlePreparing={handlePreparing}
                recipes={recipes}
              ></SideBar>
              <Cook cook={cook}></Cook>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
