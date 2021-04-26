import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
   <nav>
       <div className="nav-wrapper px1">
      <span className="brand-logo">React + Typescript</span>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация о нас</NavLink></li>
      </ul>
    </div>
   </nav>
)