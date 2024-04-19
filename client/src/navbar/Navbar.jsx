import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { AuthContext } from '../store/auth';
import { useAuth } from '../store/auth';
function Navbar() {
  const { isloggedin, LogoutUser } = useContext(AuthContext);
  const {user}=useAuth();
  const handleLogout = () => {
    LogoutUser();
  };
  return (
<div className="alex7">
    <nav className='fix'>

      
      <ul className='kit2 point3'>
        <li>
      <Link to='/'>
          <img src="http://stackcentre.in/img/logo.png" alt="img" width={200} /> </Link> </li>
        <li className='out4'><Link to='/'> HOME  </Link></li>
        <li className='out4'><Link to='/about'>ABOUT</Link></li>
        <li className='out4'><Link to='/courses'>COURSES</Link></li>
        <li className='out4'><Link  to='/service'>Service</Link></li>
        <li className='out4'>
          <Link to='/Contact'>
            CONTACT </Link></li>
            {isloggedin ?
            <li  className='out4'><Link to={'/logout'} onClick={handleLogout}>Logout({user ? user.username : ''})</Link></li>
            :
            <>
              <li className='out4'><Link  to={'/register'}>Register</Link></li>
              <li className='out4'><Link  to={'/login'}>Login</Link></li>
            </>
          }
        
          <button className='new4 point3 poin'> <Link to='/contact'><span id="out4">Join Now</span></Link><i className="fa-solid fa-arrow-right"></i> </button>
      
      </ul>
    </nav>
</div>
  );
}

export default Navbar;