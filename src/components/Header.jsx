import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <h1>Star Techno</h1>
      <main>
        <Link to={'/'}>Home</Link>
        <Link to={'/Contact'}>Contact</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/#brands'}>brands</Link>
        <Link to={'/#services'}>services</Link>
      </main>
    </nav>
  );
};
export default Header;
