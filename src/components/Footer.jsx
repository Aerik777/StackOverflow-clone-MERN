import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-50 py-4 px-6 border-t border-gray-200">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Aryan College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;