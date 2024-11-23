import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleCook }) => {
  //   console.log(recipe);
  const {
    calories,
    ingredients,
    preparing_time,
    recipe_image,
    recipe_name,
    short_description,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 w-96 border p-6  ">
        <figure>
          <img src={recipe_image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="leading-7 text-[#878787] mb-5 p-0">
            {short_description}
          </p>
          <hr />
          <div className="mb-5">
            {" "}
            <h2 className="font-bold mt-5 ">
              Ingredients: {ingredients.length}
            </h2>
            {ingredients.map((ingredient, idx) => (
              <ul
                key={idx}
                className="text-[#878787] leading-6 list-disc ps-4 "
              >
                <li>{ingredient}</li>
              </ul>
            ))}
          </div>

          <hr />
          <div className="flex justify-between mt-5">
            <div className="flex items-center">
              <IoTimeOutline />
              <p className="ml-3"> {preparing_time}</p>
            </div>
            <div className="flex items-center">
              <AiOutlineFire />

              <p className="ml-3"> {calories}</p>
            </div>
          </div>

          <div className="card-actions mt-4">
            <button
              onClick={() => handleCook(recipe)}
              className=" font-semibold bg-[#0BE58A] px-6 py-3 rounded-full "
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCook: PropTypes.func,
};

export default Recipe;
