import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import {Home} from './component/Home';
import {About} from './component/About';
import Courses from './component/Courses';
import ContactPage from './component/ContactPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Errorpage from './Pages/Errorpage';
import { AdminUsers } from './Pages/AdminUsers';
import { AdminContacts } from './Pages/AdminContacts';
import { AdminUpdate } from './Pages/Admin-Update';
import Service from './Pages/Service';
import { AdminLayout } from './layouts/AdminLayout';
import Adminabout from './Pages/Admin-about';
import Adminhome from './Pages/Admin-home';
import Admincourse from './Pages/Admin-course';



function App() {

  return (
     
    <div className="App">
      < Router>
      <Navbar/>
<Routes>
  <Route path="/">
<Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Errorpage />} />
          </Route>

          <Route path='/admin'>
            <Route path='/admin' element={<AdminLayout />} />
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<AdminUpdate/>}/>
            <Route path='about' element={<Adminabout/>}/>
            <Route path='home' element={<Adminhome/>}/>
            <Route path='course' element={<Admincourse/>}/>

          </Route>
</Routes>


      </Router>
      
    
      
     
<footer>
  <div className='foot'>
  
<ul className='li'>
  <li className='tit1'>Quick Link</li>
  <li>About Us</li>
  <li>Contact Us</li>
  <li>Privacy Policy</li>
  <li>Term & Condition</li>
  <li>FAQs & Help</li>
</ul>
<ul className='li'>
  <li className='tit1'>Contact</li>
  <li> 1st floor, Stack Building,<br/> 
    Near Smart Bazar, <br/>
    New Bus Stand, Kasaragod

  </li>
  <li>+91 99 46 88 66 81</li>
  <li>info@stackcentre.in</li>
  <li>
  <span className='till'><i className='fa-brands fa-linkedin'></i><i className='fa-brands fa-facebook mar'></i></span> <span className='hide1'><i className='fa-brands fa-twitter'></i></span>
    <span className='hide1'><i className='fa-brands fa-instagram'></i></span>
  </li>
</ul>
<ul>
  <li className='tit'> Gallery </li>
  <li >
    <img style={{float:"left", marginRight:"10px"}}  src="images/1.jpg" alt="img" width={90}/>
    <img  className='mar' src="images/2.jpg" alt="img" width={90}/>
    
  </li>
  <li> <img style={{float:"left", marginRight:"10px"}}  className='cla'  src="images/4.jpg" title='image4' alt="img" width={90}/>
    <img className='mar' src="images/3.jpg" alt="img" width={90} />
   
    </li>
   
   <li>
   <img style={{float:"left", marginRight:"10px", marginTop:"6PX"}}  src="images/5.jpg" alt="img" width={90} />
    <img className='mar' src="images/course-2.jpg" alt="img" width={90} />
    </li>
</ul>
<ul className='cen3'>
  
  <li className='jack'>
   
    <button className='top'>Sign Up</button>
  </li>
</ul>
</div>


<div>
<hr />
</div>
<div>
© stackcentre.in, All Right Reserved. <span className='left3'><ul className='boz'>
  <li className='bo'>Home</li>
  <li className='bo'>Cookies</li>
  <li className='bo'>Help</li>
  <li className='bo'>FQAs</li>
  
  </ul></span> 
</div>

</footer>


    </div>
  
  );
}

export default App;