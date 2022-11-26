import React,{useEffect,useState} from 'react';
import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import LoAding from '../../components/LoAding';
import Pagination from '../../components/Pagination';
import moment from 'moment';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from 'next/link';

import Summary from '../../components/Summary';
import { useRouter } from 'next/router';
const Search = () => {
    const {searchTerm,setSearchTerm,setLoading,Loading,directSumData,setDirectsumInput,clear,setClear,setDirectSumData,setSearchText,searchText} = useResultContext();
    const [Data,setData] = useState([]);
    const [error, setError] = useState(false);
    const [bangla,setBangla] = useState(false);
    const router = useRouter()
console.log(searchTerm)
       {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = Data.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);


 const handleSubmit = (e) => {
  e.preventDefault();
  setSearchTerm(searchText)
 }

    const  getData = async () => {
        
        
      
       await axios.request(
            {
                method: 'GET',
                url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
                params: {q: `${searchTerm}`, sort_by: 'date',lang : `${bangla?'bn':'en'}`, page: '1', media: 'True'},
                headers: {
                  'X-RapidAPI-Key': '0a08c0b82dmsh811a45169a9bcdcp1f1962jsnedc6962d7351',
                  'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
                }
            }
        ).then(res => setData(res.data.articles)).catch(err => {setError(true) ; console.log(err)}).finally(() =>{setLoading(false);setClear(true)})
      
    
       
    }
{/*  */}
  useEffect(() => {
        getData()
  },[searchTerm,bangla])

  useEffect(()=>{
    if(clear){
      setDirectSumData(null)
    }
},[clear])
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      
      <form className='contentcard rounded m-2' onSubmit={handleSubmit} >

            <div className='mb-5 contentparatitle d-flex justify-content-center align-items-center text-muted '>Search news from around the world for any search term/keyword</div> 
                        <div className='d-flex mb-3'>
                          <button onClick={() => setBangla(!bangla)} className={bangla ?'btn btn-dark'  :'btn btn-light' }>Click</button><small className='m-2'>{bangla ? 'To search in English' : 'if your Searching in বাংলা'} </small>
                        </div>
                      <div className=' text-center '>
                          <input className='form-control  ' placeholder='Search for latest news...' type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                      </div>
                      <div className='text-center d-flex justify-content-center align-items-center m-3 '>
                          <button  type='submit' className='btn btn-light button m-2'>Submit</button>
                          <button className="btn btn-light button m-2" onClick={()=> setSearchText('')}>Clear</button>
                      </div>
            </form>
        
        {
          searchTerm &&  <div className=''>
          <div className='pagenamecard rounded'>
            <p className='d-flex justify-content-center align-items-center pagenametitle'>Current Search Term :</p>
            <div className=''>
            <div className='d-flex justify-content-center align-items-center'>
    
            <h1 className='pagename'>{searchTerm.toUpperCase()}</h1>
            </div>
           </div>
          </div>
    
          </div>
        }
     
     
     {
      Loading ? <h1 className='modu'><LoAding/></h1> : <div></div>
     }
      
      {
          directSumData && <Summary directSumData={directSumData} />
        }
       <div className=' container-fluid  ' >
      <div className='row col-md-12 col-12'>

          {
    paginatedData?.map((data)=>(
      <div key={data.title} className='col-md-6 col-12'>
        <div key={data.title} className={` contentcard rounded `}>
        <div  >
        <div className='col-md-12  d-flex justify-content-center align-items-center'>
          
          <img className='rounded image' src={data.media} alt={data.title}/>

        </div>
        <div className=' '>
        <div className='col-md-12 maincontent'>
          <h3 className='contenttitle mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
       
          {/*<div><h4 className='contentparatitle'>Summary :</h4><p className='contentpara m-1'> {data.summary}</p></div>*/}

          <div className='d-block m-5'>
            <h5 className='m-2 contentparatitle  d-flex justify-content-center align-items-center time' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='sourcename'>{data.rights}</p>
            </div>
          </div>
           
           <div className='contentbutton'>
           <div className=''>
                               <div className='  d-block d-md-flex justify-content-center'>
                               <a target="_blank" rel="noreferrer" className='button btn btn-light m-3' href={data.link}>Read Full News</a>
            

                              
                            </div>
                         
                            </div>

           </div>

          </div>


        </div>

</div>

      </div>

      </div>
           
    

      
   
      
        
       
    ))}
    </div>
  
          </div>
          <hr className='text-muted'/>

<div className='col-md-12'>
              <div className='pagination mt-3 d-flex justify-content-center mt-3 align-items-center'>
      <Pagination
           postsPerPage={postsPerPage}
            totalPosts={Data.length}
            paginate={paginate}
        />

      </div>

              </div>
            
    </div>
  )
}

export default Search