import { Link, Outlet} from 'react-router-dom';
import './AdminLayout.css';
import { ImUsers } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useAuth } from '../store/auth';
import { FaBook } from "react-icons/fa6";

export  const AdminLayout=() =>{
const {user}=useAuth();
console.log(user);
// Check if user is admin
const isAdmin = user && user.isAdmin;


  return (
   
    <>
    <div>
    {isAdmin ?<>
  <nav className='alexn'>
    <ul className='relative'>
      <li><Link className='link mt-[-25px]' to={'/admin/users'}><ImUsers className='ml-20 absolute top-4' /> users</Link></li>
      <li><Link className='link' to={'/admin/contacts'}><MdContacts className='ml-16 absolute top-14' /> contacts</Link></li>
      <li><Link className='link' to={'/service'}><GrServices className='ml-16 absolute top-26 ' /> services</Link></li>
      <li><Link className='link' to={'/'}><FaHome className='ml-14 absolute top-34'/>dashboard</Link></li>
      <li><Link className='link' to={'/admin/about'}><FaBook className='ml-20 absolute top-38' />about</Link></li>
      <li><Link className='link' to={'/admin/home'}><FaBook className='ml-20 absolute top-50' />home</Link></li>
      <li><Link className='link' to={'/admin/course'}><FaBook className='ml-20 absolute top-54 ' />course</Link></li>


    </ul>
  </nav>
  </>:
  <></>}
    </div>
    <Outlet/>
    </>
  )
}
