import './create-recipes.css';
import pepperPandaLogo from '../assets/pepper-panda.png';
import { useState } from "react";
import axios from 'axios';

export const CreateRecipe = () =>{
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        servings: 0,
        readyInMinutes: 0,
        sourceName: "",
        sourceURL: "",
        cuisines: [],
        dairyFree: false,
        diets: [],
        instructions: [],
        extendedIngredients: [],
        vegetarian: false,
        vegan: false,
        ketogenic: false,
        glutenFree: false,
        globalRecipe: false,
        userOwner: 0,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setRecipe({ ...recipe, [name]: value})
    };

    const handleIngredientChange = (event, idx) => {
        const { value } = event.target;
        const extendedIngredients = recipe.extendedIngredients;
        extendedIngredients[idx] = value;
        setRecipe({ ...recipe, extendedIngredients })
    };

    const addIngredient = () => {
        setRecipe({...recipe, extendedIngredients: [...recipe.extendedIngredients, ""]})
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/recipes/", recipe);
            alert("Recipe Created!");
        } catch (err) {
            console.log(err);
        }
    }

    return  (
    <div className="container">
        <header>
            <div className="logo-container">
                <img src={pepperPandaLogo} alt="Pepper Panda" className="logo" />
            </div>
            <h1>Pepper's Cooking</h1>
        </header>

        <div>
            <h2>Create Recipe:</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title"> Title </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={recipe.title} 
                    onChange={handleChange}
                />

                <label htmlFor="servings"> Servings </label>
                <input
                    type="number"
                    id="servings"
                    name="servings"
                    value={recipe.servings}
                    onChange={handleChange}
                />

                <label htmlFor="readyInMinutes"> Cooking Time (min) </label>
                <input 
                    type="number" 
                    id="readyInMinutes" 
                    name="readyInMinutes" 
                    value={recipe.readyInMinutes}
                    onChange={handleChange}
                />

                <label htmlFor="extendedIngredients"> Ingredients </label>
                {recipe.extendedIngredients.map((ingredient, idx) => (
                    <input 
                        key={idx} 
                        type="text" 
                        name="extendedIngredients" 
                        value={ingredient} 
                        onChange={(event) => handleIngredientChange(event, idx)}
                    />
                ))}
                <button onClick={addIngredient} type="button"> 
                    Add Ingredient 
                </button>

                <label htmlFor="image"> Image URL </label>
                <input 
                    type="text" 
                    id="image" 
                    name="image"
                    value={recipe.image} 
                    onChange={handleChange}
                />



                <button type="submit">
                    Create Recipe
                </button>
                <button type="reset">
                    Reset Recipe
                </button>

            </form>
        </div>

        <footer>
            <p>&copy; 2024 Pepper Panda's Recipe Corner. All rights reserved.</p>
        </footer>
    </div>
    );
};

/*const addCuisine = () => {
        setRecipe({...recipe, cuisines: [...recipe.cuisines, ""]});
    }
    const addDiet = () => {
        setRecipe({...recipe, diets: [...recipe.diets, ""]});
    }*/

/**
 * 
 * <label htmlFor="instructions"> Instructions </label>
                <textarea 
                    id="instructions" 
                    name="instructions" 
                    onChange={handleChange}
                ></textarea>                 
 * 
 * <label htmlFor="sourceURL"> Source URL </label>
                    <input
                        type="text"
                        id="sourceURL"
                        name="sourceURL"
                        onChange={handleChange}
                    />

                    <label htmlFor="cuisines"> Cuisines </label>
                    <input
                        type="text"
                        id="cuisines"
                        name="cuisines"
                        onChange={handleChange}
                    />

                    <label htmlFor="diets"> Diets </label>
                    <input
                        type="text"
                        id="diets"
                        name="diets"
                        onChange={handleChange}
                    />

                    <label htmlFor="vegetarian"> Vegetarian </label>
                    <input
                        type="radio"
                        id="vegetarian"
                        name="vegetarian"
                        onChange={handleChange}
                    />

                    <label htmlFor="vegan"> Vegan </label>
                    <input
                        type="radio"
                        id="vegan"
                        name="vegan"
                        onChange={handleChange}
                    />

                    <label htmlFor="ketogenic"> Ketogenic </label>
                    <input
                        type="radio"
                        id="ketogenic"
                        name="ketogenic"
                        onChange={handleChange}
                    />

                    <label htmlFor="glutenFree"> Gluten Free </label>
                    <input
                        type="radio"
                        id="glutenFree"
                        name="glutenFree"
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="dairyFree"> Dairy Free </label>
                    <input
                        type="radio"
                        id="dairyFree"
                        name="dairyFree"
                        onChange={handleChange}
                    />

                    <label htmlFor="globalRecipe"> Publish Recipe </label>
                    <input
                        type="checkbox"
                        id="glutenFree"
                        name="glutenFree"
                        onChange={handleChange}
                    />
 */