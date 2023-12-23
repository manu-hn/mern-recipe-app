import React from 'react';
import { Link } from "react-router-dom";
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [cookies, setCookies, removeCookie] = useCookies('access_token');
    const navigate = useNavigate();

    function userLogout() {
        removeCookie('access_token');
        window.localStorage.removeItem('userId');
        navigate('/auth');
    }
    return (
        <div>
            <nav className="w-full h-[4em] border bg-sky-700 flex justify-evenly items-center text-white">
                <Link className='hover:text-red-500 hover:underline' to={'/'}>Home</Link>
                <Link className='hover:text-red-500 hover:underline' to={'/create-recipe'}>Create Recipe</Link>
                <Link className='hover:text-red-500 hover:underline' to={'/saved-recipes'}>Saved Recipes</Link>
                {
                    !cookies.access_token ? (<Link className='hover:text-red-500 hover:underline' to={'/auth'}>Login / Register</Link>)
                        : <button onClick={() =>
                            userLogout()}>Logout</button>
                }


            </nav>
        </div>
    )
}

export default Navbar;