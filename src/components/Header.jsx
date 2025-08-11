import React, { use, useEffect, useState } from 'react';
import Button from '../common/Button';




const Header = () => {
  // State to manage the button status
  const [status, setStatus] = useState(true);

  useEffect(() => {
    // This effect runs once when the component mounts 
    console.log("Header component mounted");
  }, []);

  // Function to toggle the button status
  const toggleStatus = () => {
    setStatus(!status);
  };



  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img 
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e" 
          alt="StackOverflow Logo" 
          className="h-9"
        />
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <Button  onClick={toggleStatus}>
        {status? 'logout' : 'login'}
      </Button>
    </header>
    
  );
};

export default Header;