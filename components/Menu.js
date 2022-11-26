import React,{useState} from 'react';
import Link from 'next/link';
import { GiCancel } from "react-icons/gi";
import BdMenu from "./BdMenu"

const Menu = ({menuOpen,setMenuOpen}) => {
  const [bdmenu,setBdmenu] = useState(false)
  return (
    <div>
           <div className='modumenu'>
              <nav className='menu col-md-12'>
                {
                    menuOpen &&       <div className='col-md-12 d-flex'>
                    <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
                      {
                        menuOpen && 
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
    <Link href="/TopNews/World"><a className='btn btn-light m-3 p-md-5 p-4 button' onClick={() => setMenuOpen(!menuOpen)}>International News</a></Link>


<div className='d-block btn btn-light m-3 p-md-5 p-4 button' onClick={() => setBdmenu(!bdmenu)}>
<p className="h6 btn-light button">News of Bangladesh</p><small className="text-muted ">(English news agencies)</small></div>



   <Link href="/Summarize">
<a onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light m-3 p-md-5 p-4 button'>

     Summarizer</a></Link>
     
     <Link  href='/Somenews'><a onClick={() => setMenuOpen(!menuOpen)} className="d-block btn btn-light m-3 p-md-5 p-4 button"><p className="h6 btn-light button">Some News</p><small className="text-muted">by SumNews</small></a></Link>
     <Link  href='/Newspapers'><a onClick={() => setMenuOpen(!menuOpen)} className="d-block btn btn-light m-3  p-4 button"><p className="h6 btn-light button">Surf Through Other Newspapers</p><small className="text-muted">in SumNews</small></a></Link>
<Link href='/BDnews/BanglaNews'><a onClick={() => setMenuOpen(!menuOpen)} className="d-block btn btn-light m-3 p-4 button"><p className="h6 btn-light button">বাংলা সংবাদ</p><small className="text-muted">Summarization Does not support Bangla</small></a></Link>

    </div>
 
  </nav>
    </div>
    {
      bdmenu && <BdMenu setMenuOpen={setMenuOpen} bdmenu={bdmenu} menuOpen={menuOpen}/>
    }
    </div>
  )
}

export default Menu