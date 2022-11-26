import React from 'react';
import Link from 'next/link';
import { GiCancel } from "react-icons/gi";

const Menu = ({bdmenu,menuOpen,setMenuOpen}) => {
  return (
    <div>
           <div className='modumenu'>
              <nav className='menu col-md-12'>
                {
                    bdmenu &&       <div className='col-md-12 d-flex'>
                    <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
                      {
                        bdmenu && 
                        <div  className='btn btn-light button' >
                        <GiCancel/>
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
                    
                   
            
            
                  </div>
                  
                }
                <hr className='hr'/>
 
    <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
    <Link href="/BDnews/National/news"><a className='btn btn-light m-3 p-4 button' onClick={() => setMenuOpen(!menuOpen)}>National Media</a></Link>


 <Link  href='/BDnews/International'><a onClick={() => setMenuOpen(!menuOpen)} className="btn btn-light m-3 p-4 button">International Media</a></Link>

{/*
   <Link href="/BDnews/BanglaNews/ঢাকা">
<a onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light m-3 p-4 button'>

বাংলা সংবাদ(আঞ্চলিক)</a></Link>
     
       <Link href="/BDnews/BanglaCat/জাতীয়">
<a onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light m-3 p-4 button'>বাংলা সংবাদ(বিষয়ক)</a></Link>


*/}

    </div>
 
  </nav>
    </div>
    </div>
  )
}

export default Menu