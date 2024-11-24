import PropTypes from "prop-types";

const Cook = ({ cook }) => {
  // console.log(cook);

  return (
    <div className=" mx-auto">
      <div className="overflow-x-auto rounded-2xl">
        <h1 className="text-center font-bold text-2xl my-5">
          Currently Cooking:{cook.length}
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
            {cook.map((c, idx) => (
              <tr className="bg-[#2828280e] " key={idx}>
                <td>{idx + 1}</td>
                <td>{c.recipe_name}</td>
                <td>{c.preparing_time}</td>
                <td>{c.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cook.propTypes = {
  cook: PropTypes.array,
};

export default Cook;
