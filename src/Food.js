import { React, useState } from 'react';
import './Food.css';
import Axios from 'axios';
import RecipeTile from './RecipeTile';



function Food() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [ healthLables ,sethealthLables ] = useState("vegan");

    const YOUR_APP_ID = "ac627dea";
    const YOUR_APP_KEY = "f1bd62c1fabf6c958315bf4665dafa5e";

    var url =
     `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLables}`;

    async function getRecipes() {
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    };

    return ( 
        <div className = "app" >
        <h2> Food Recipe Plaza🍔 </h2>   
        <form className = "app_searchForm" onSubmit = { onSubmit } >
        <input className = "app_input" type = "text" placeholder = "enter ingredient" value = { query }
        onChange = {(e) => setquery(e.target.value)}/>   
        <input className = "app_submit" type = "submit" vlaue = "search" />
        <select className="app_healthLabel"  >
        <option className ="app_recipeoption" value = "vegan" 
        onClick = {()=>sethealthLables("vegan")}>
        vegan</option>
        <option className ="app_recipeoption" value = "Alcohol-Free" onClick = {()=>sethealthLables("Alcohol-Free")}>
         Alcohol-Free </option>
        <option className ="app_recipeoption" value="Dairy-Free"  
        onClick = {()=>sethealthLables("Dairy-Free")}>
        Dairy-Free</option>
        <option className ="app_recipeoption" value = "Egg-Free"  
        onClick = {()=>sethealthLables("Egg-Free")}>
        Egg-Free</option>
        <option className ="app_recipeoption" value = "Fish-Fre" 
         onClick = {()=>sethealthLables("Fish-Free")}>
        Fish-Free</option>
        <option className ="app_recipeoption"
         value = "Immuno-Supportiv"  onClick = {()=>sethealthLables("Immuno-Supportive")}>
        Immuno-Supportive</option>
        <option className ="app_recipeoption" value = "Kidney-Friendly"  onClick = {()=>sethealthLables("Keto-Friendly")}>
        Kidney-Friendly</option>
        <option className ="app_recipeoption" value = "Low Potassium"  onClick = {()=>sethealthLables("Low Potassium")}>
        Low Potassium</option>
        <option className ="app_recipeoption" value = "Lupine-Free"  onClick = {()=>sethealthLables("Lupine-Free")}>
        Lupine-Free</option>
        <option className ="app_recipeoption" value = "Mustard-Free"  onClick = {()=>sethealthLables("Mustard-Free")}>
        Mustard-Free</option>
        <option className ="app_recipeoption" value = "glutin-Free"  onClick = {()=>sethealthLables("glutin-Free")}>
        glutin-Free</option>
        <option className ="app_recipeoption" value = "Low Sugar" 
         onClick = {()=>sethealthLables("Low Sugar")}>
        Low Sugar</option>
        <option className ="app_recipeoption" value = "Pork-Free" 
         onClick = {()=>sethealthLables("Pork-Free")}>
        Pork-Free</option>
        <option className ="app_recipeoption" value = "Sulfite-Free"  onClick = {()=>sethealthLables("Sulfite-Fre")}>
        Sulfite-Free</option>
        <option className ="app_recipeoption" value = "vegetarian"  onClick = {()=>sethealthLables("vegetarian")}>
        vegetarian</option>
        </select>
        </form>
        <div className="app_recipes">
          {recipes.map((recipe)=>{
          return (<RecipeTile recipe = {recipe} />
          )})};
        </div>   
        </div>
         
    );
}

export default Food;