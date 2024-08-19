import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './components/Recipes';
import { useEffect, useState } from "react";
import axios from 'axios';
import Home from './components/Home';

function App() {
  const [displayQuery, setDisplayQuery] = useState("Search recipe name...");
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favArray, setfavArray] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const fetchedRecipes = response.data.meals || [];

      setDisplayQuery(searchQuery);
      setRecipes(fetchedRecipes);
      
      // Save search results to local storage
      sessionStorage.setItem('searchedRecipes', JSON.stringify({ query: searchQuery, recipes: fetchedRecipes }));
      
    } catch (err) {
      console.log(err);
    }
  };

  const favRecipes = (strMeal, strMealThumb, strCategory, strArea) => {
    const newRecipe = { name: strMeal, img: strMealThumb, cat: strCategory, area: strArea };
    
    if (!favArray.some(recipe => recipe.name === strMeal)) {
      const updatedFavArray = [...favArray, newRecipe];
      setfavArray(updatedFavArray);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavArray)); 
    }
  };

  useEffect(() => {

    const storedFavRecipes = localStorage.getItem('favoriteRecipes');
    if (storedFavRecipes) {
      setfavArray(JSON.parse(storedFavRecipes));
    }

    const storedSearchData = sessionStorage.getItem('searchedRecipes');
    if (storedSearchData) {
      const { query, recipes } = JSON.parse(storedSearchData);
      setSearchQuery(query);
      setDisplayQuery(query);
      setRecipes(recipes);
    }
  }, []);
          return (
            <div className="flex flex-col min-h-screen overflow-hidden">
            <BrowserRouter>
              <Navbar />
              <div className="flex-grow ">
              <Routes>

                
                <Route path="/" element={<Home searchRecipes={searchRecipes}
                        displayQuery={displayQuery}
                        recipes={recipes}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        favRecipes={favRecipes} />}
                        />
                        
                        <Route path='/recipes' element={<Recipes
                        searchRecipes={searchRecipes}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        favArray={favArray} recipes={recipes} 
                        displayQuery={displayQuery}/>} />
              
              </Routes>
              </div>
              <Footer />
              </BrowserRouter>
            </div>
          )
        }





        export default App
