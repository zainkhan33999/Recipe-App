import PropTypes from 'prop-types'; 

import { useNavigate } from 'react-router-dom';

const Recipes = ({ favArray, setSearchQuery,searchRecipes,displayQuery }) => {
  const navigate = useNavigate(); 

  const expandHandler = async(name) => {
     setSearchQuery(name); 
   await  searchRecipes()
    if(displayQuery===name){
      navigate("/")
    }
      
  };
    return (
      <div className="flex items-center justify-center flex-col font-primary">
        <h1 className="text-[35px] lg:text-[40px] text-center font-primary text-primary">Your Saved Recipes</h1>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {favArray.map((recipe) => (
          
            <div key="" className="flex flex-col items-center justify-center  max-w-lg rounded overflow-hidden shadow-lg">
              <img className="w-full" src={recipe.img} alt={recipe.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipe.name}</div>
                <p className="inline-block max-w-30 text-center bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2 ">
                  {recipe.cat}
                </p>
                <p className="inline-block text-center max-w-30 bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                  {recipe.area}
                </p>
                <div className='py-3'>

              <button  onClick={() => expandHandler(recipe.name)} className="block bg-blue-600 font-secondry  text-white w-[16rem]  h-[50px] border rounded-full">Click To Expand</button>
                </div>
              </div>
            
              {/* <div className="px-6 pt-4 pb-2">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  Recipes.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strTags: PropTypes.string.isRequired,
    })).isRequired,
    searchRecipes: PropTypes.func.isRequired,
    favArray: PropTypes.array.isRequired,   
    setSearchQuery: PropTypes.func.isRequired,
    displayQuery: PropTypes.string.isRequired,
  };

  export default Recipes;
