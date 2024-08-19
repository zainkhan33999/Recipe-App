
import PropTypes from 'prop-types'; 

const Home = ({ searchRecipes, displayQuery, recipes, searchQuery, setSearchQuery , favRecipes  }) => {

    const valueHandler = (strMeal) => {
        setSearchQuery(strMeal);
    }

    
   
    // const searchRecipes = async () => {

    
    //     try {
    //     const response = await axios.get(
    //         `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        
    //     );
    //     //   console.log(response.data.meals)
    //     setDisplayQuery(searchQuery);   
    //     setRecipes(response.data.meals || []); 
    //     } catch (err) {
    //     console.log(err);
    //     } 
    // };

 
    const getIngAndMeasures = (meal) =>{
        let ingandmeasures = []
         for (let i = 1;i<=20; i++){
            const ingredient = meal[`strIngredient${i}`]
            const measure = meal[`strMeasure${i}`]
            if(ingredient){
                ingandmeasures.push ({ingredient,measure})
            }
         }
         return ingandmeasures
    }
        return (
    <div className="flex flex-col gap-4 items-center justify-center">
  
    <h1 className="font-secondry text-[25px]  sm:text-[35px] text-center  text-secondry">READ <span className="text-primary"> CREATE </span> <span className="line-through" style={{ textDecorationColor: '#E5B000' }}>REP</span>EAT</h1>
    
<form className="flex items-center  max-w-sm mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className=" sm:w-[350px] h-[45px] bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search recipe name..."     value={searchQuery}     onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
    <button onClick={searchRecipes} type="button" className="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>

</form>
<h1 className="text-[30px] text-primary font-primary sm:text-[40px]">RECIPE</h1>
<div className="flex flex-col  gap-5  items-center">

        {displayQuery === "Search recipe name..."?(
            <h1 className='  text-blue-600 font-secondry text-[15px] sm:text-[20px] font-[600]'>Search Any Recipe You Want</h1>
        ):  recipes.length === 0 ?(
            <h1 className="text-red-600 font-secondry text-[15px] sm:text-[20px] font-[600]">No recipes Found</h1>
        ):(
            recipes.map((data) =>(
                <>
                <h1 onClick={() => valueHandler(data.strMeal)}  className="text-[25px] sm:text-[35px] font-primary" key={data.id}>{data.strMeal} </h1>
                <ul className="flex sm:text-[20px] flex-col items-center font-secondry">
                            {getIngAndMeasures(data).map(({ ingredient, measure }, index) => (
                                <li key={index}>{ingredient} - {measure}</li>
                            ))}
                        </ul>
                        <button className="bg-blue-600 font-secondry text-white w-[200px] sm:w h-[50px] border rounded-full"
                         onClick={() => favRecipes(data.strMeal, data.strMealThumb, data.strCategory, data.strArea)}
                         >Add To Your datas</button>
                        <div className="bg-secondry w-[100vw] text-white">
                            <h1 className="text-[30px] text-center text-primary sm:text-[40px] py-5 font-primary">INSTRUCTIONS</h1>
                        {data.strInstructions.split('.').map((sentence, idx) => (
                            sentence.trim() && <p className="p-1 sm:p-3 sm:m-3  m-1 font-secondry sm:text-[20px] text-[10px]" key={idx}>{sentence.trim()}.</p>
                        ))}
                    </div>
                </>
                
            ))  
        )}
      
</div>

    </div>
)
}

    
    
Home.propTypes = {
    searchRecipes: PropTypes.func.isRequired,
    displayQuery: PropTypes.string.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    favRecipes: PropTypes.func.isRequired,
}

export default Home