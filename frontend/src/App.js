import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from "./pages/Home.js";
import Authentication from "./pages/Authentication.js";
import CreateRecipe from "./pages/CreateRecipe.js";
import SavedRecipe from "./pages/SavedRecipes.js";
import Navbar from './components/Navbar.js';
const App = ()=>{
    return (
        <div className='m-0 p-0 w-full'>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth" element={<Authentication />}/>
            <Route path="/create-recipe" element={<CreateRecipe />}/>
            <Route path="/saved-recipes" element={<SavedRecipe />}/>
        </Routes>
        </BrowserRouter>
      
        </div>
    )
}


export default App;