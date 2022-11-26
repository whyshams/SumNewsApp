import {useState} from 'react';
import Link from 'next/link';
import moment from 'moment';
import HomePagi from './HomePagi'


const Somenews = ({mapedSomeData,categories}) => {
  const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(6);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = mapedSomeData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
   <>
   
   <div className='container-fluid'>
      <div className='row '>
        <div className='border-bottom border-top pt-2 pb-2 border-light d-flex justify-content-center align-items-center'>
        <h1 className='prime m-4'>Some News</h1><small className='text-light pb-3'>by SumNews</small>
        </div>

      <div className='col-md-12 d-flex flex-wrap '>{paginatedData.map(data => (
    <div key={data.title} className='col-md-4 mt-2'>
        <div className='contentcard d-block'>

      <Link href={`/Somenews/${data.slug.current}`}>
        <a className='text-white'>
         <img className='image' src={data.mainImage} />
    <h4 className='contenttitle' >{data.title}</h4>
    <strong className='text-light'>{moment(data.publishedAt).fromNow()}</strong>

    <p>{data.description}</p>

        </a>
       
    
   </Link>
   <div className='d-flex mt-3'>
        <p>Topic : </p><div>{data.categories.map(d => (
          <a key={d._id} href={`/Category/${d.title}`} style={{color:'#FF4081',marginLeft:'10px'}}>{d.title}</a>
        ))}</div>
        

    </div>
   </div>

    </div>
   ))}</div>
  

      </div>
      
     

   </div>
   
              <div className='col-md-12'>
              <div className='pagination mt-3 d-flex justify-content-center align-items-center'>
                {
                  mapedSomeData.length > 6 &&  <HomePagi
                  postsPerPage={postsPerPage}
                   totalPosts={mapedSomeData.length}
                   paginate={paginate}
               />
                }
            

             </div>

              </div>
            
   </>
  
  )
}

export default Somenews


