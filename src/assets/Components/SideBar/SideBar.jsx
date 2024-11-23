import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const SideBar = ({ recipes }) => {
  console.log(recipes);

  return (
    <div className="w-1/3 mx-auto">
      <div className="overflow-x-auto border rounded">
        <h1 className="text-center font-bold text-2xl my-5">
          Want to Cook: {recipes.length}
        </h1>

        <hr className="mb-4" />
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>FCalories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipes.map((recipe, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button className="bg-[#0BE58A] font-medium py-2 px-4 rounded-full ">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 2 */}

            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  recipes: PropTypes.array,
};

export default SideBar;
