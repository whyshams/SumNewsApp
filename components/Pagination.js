import { useState } from "react";

const HomePagi = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    const [clicked,setClicked] = useState(false)
  
    const handleClick = () => {
      setClicked(!clicked)
      window.scrollTo(0,350)
    }
  
    return (
      <nav className=''>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li onClick={handleClick} key={number} className='  '>
              <div onClick={() => paginate(number) } className='btn btn-light page-item m-md-3 m-1 button page-link hover-matt  d-flex justify-content-center align-items-center'>
                {number}
              </div>
              
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default HomePagi