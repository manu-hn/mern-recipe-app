import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="w-full h-[4em] border bg-sky-700 flex justify-evenly items-center text-white">
                <Link className='hover:text-red-500 hover:underline' to={'/'}>Home</Link> 
                <Link className='hover:text-red-500 hover:underline' to={'/create-recipe'}>Create Recipe</Link> 
                <Link className='hover:text-red-500 hover:underline' to={'/saved-recipes'}>Saved Recipes</Link> 
                <Link className='hover:text-red-500 hover:underline' to={'/auth'}>Login / Register</Link> 
            </nav>
        </div>
    )
}

export default Navbar;