import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";



const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>{
         console.log(error)
        })
   }
      const links = <>
           <li> <NavLink to='/news'>News</NavLink>  </li>
           <li> <NavLink to='/destination'>Destination</NavLink>  </li>
           <li> <NavLink to='/blog'>Blog</NavLink>  </li>
           <li> <NavLink to='/contact'>Contact</NavLink>  </li>
           <li> <NavLink to='/Register'>Register</NavLink>  </li>
           {
             user ? <li> <NavLink onClick={handleLogOut} to='/login'>LogOut</NavLink>  </li> : <li> <NavLink to='/login'>Login</NavLink>  </li>
           }
      </>

    
    return (
        <>
             <div className="navbar bg-base-300 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {links}

      </ul>
    </div>
    <a className="btn text-black btn-ghost text-xl">
       Travel Guru
    </a>
  </div>
     <div className="relative">
     <FaSearch className="absolute top-1 left-3" />
          <input className=" pl-9" type="text" name="Input" id="" placeholder="Search Your Destination" />
        
     </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
 
</div>   
        </>
    );
};

export default NavBar;