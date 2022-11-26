import Link from "next/link";
import { useRouter } from 'next/router';
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Menu from "./Menu";
import { IoSearchCircle } from "react-icons/io5";

const NavBar = () => {
  
  const [menuOpen,setMenuOpen] = useState(false)
 
  const router = useRouter();
  return (
    <>
   
    <div className='row header'>
      <div className='col-md-12 d-flex'>
        <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
          {
            !menuOpen && 
            <div  className='btn btn-light button' >
            <BiMenu />
            </div>
            
        
          }
       
          
         
        </div>
        <div className='logo'>
        <Link href='/'>
<a className="pt-5 d-flex justify-content-center align-items-center">
<h4 className="sum">sum</h4><h1 className="logo">News</h1>

</a>
        </Link>

       </div>
       <div className="menuicon">
       <Link href='/Search'>
          <a className="btn btn-light button searchicon"><IoSearchCircle/></a>
        </Link>
       </div>
       
        
     

      </div>
      <div className="col-md-12">
      
      {
            menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          }

      </div>
  </div>
  
 
    </>
  )
}

export default NavBar