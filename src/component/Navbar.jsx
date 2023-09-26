import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './pages/Logo/Logo';

const Navbar = () => {
    return (
        <div className='' >
            <nav className='flex-wrap md:flex lg:flex justify-between items-center py-4 shadow-lg px-4'>
                <Logo></Logo>
            <ul className='flex-wrap md:flex lg:flex gap-4'>
            
            <li>
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
>
  Home
</NavLink>
            </li>
            <li>
            <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
>
 Donation
</NavLink>
            </li>
            <li>
            <NavLink
  to="/statistic"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
>
  Statistics
</NavLink>
            </li>
            </ul> 
            </nav>
           
        </div>
    );
};

export default Navbar;