import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
      logOut()
      .then(() => {})
      .catch(err => console.error(err))
    }


    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {user ? 
        <>
          <li><NavLink to='/reviews'>My Reviews</NavLink></li>
          <li><NavLink to='/addservice'>Add service</NavLink></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </> 
        : 
          <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to='/'>Travellian</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    
      <h4>{user?.displayName.slice(0, 10)}...</h4>
    <Link className="rounded-xl ml-4">
      {
        user ? 
        <img tabIndex={0} className='border-primary border-solid border-4' title={user?.displayName} style={{width: '40px', height: '40px', borderRadius: "60px"}} src={user.photoURL} alt="profileImg" />
          :
        <FaUser></FaUser>
      }
    </Link>
  </div>
</div>
    );
};

export default Header;