import React, {  useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



const Header = () => {

  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();
 

  useEffect(() => {
    // This effect runs once when the component mounts 
    console.log("Header component mounted");
  }, []);



  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center space-x-4 hover:cursor-pointer hover:bg-gray-300 rounded-lg">
        <a href="/"><img 
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e" 
          alt="StackOverflow Logo" 
          className="h-11"
        />
        </a>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button  onClick={isLoggedIn ? logout : null} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {isLoggedIn ? 'Logout' : <Link to={'/login'}>login</Link>}
      </button>
    </header>
    
  );
};

export default Header;