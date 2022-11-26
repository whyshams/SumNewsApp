import {useState,useEffect} from 'react';

import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';


import {FaAngleDown,FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';
import Summary from '../../components/Summary';

import LoAding from '../../components/LoAding';

import Link from 'next/link';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';
import { RiShareFill } from 'react-icons/ri';
const Category = ({Data,Category}) => {
    const {catData, setCatData,directSumData,setDirectSumData,setDirectsumInput,clear,Loading} = useResultContext();
    const [cat,setCat] = useState('');
    const [shareOn,setShareOn] = useState(false);
    setCatData(Data);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/TopNews/${cat}`)

    }
   
    
    useEffect(()=>{
      if(clear){
        setDirectSumData(null)
      }
  },[clear])
  
   
   

    {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = catData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


{/*src={res?.image?.thumbnail.contentUrl} */}

  return (
    <div>
      <Head>
        <title>Latest World News</title>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name ='title' content="Read or Summarize the latest news around the world from the best soures of the web."/>
        <meta name="description" content="Get and summarize the latest headlines on politics, business, sports, entertainment, technology, science, and more."/>
        <meta name="keywords" content="world news today,latest world news,world news bangla
,world news of today,world news for today,world news today,world newspaper
,World News, current news, news, category, sumnews,sumnewsbd" />
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
        <section>
        <div className='row '>
        <div className=' col-md-12'> 
        <div className=''>

          <h2 className='mainpagetitle d-flex justify-content-center align-items-center'>
            Category wise Latest News Around the world 
          </h2>
        </div>
        </div>
      </div>
      <details>
        <summary className='btn btn-light button'>
            Click to Change Category <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider>
        </summary>
        <p>
        <div className='select rounded'>
            <div className='row m-2'>
            <div className='col-md-12'>
      <div className=' d-block '>
        
        <h6 className='selecttitle d-flex justify-content-center align-items-center mb-4 mt-3'>Change the category to see top news of that category</h6>
        <form className='  d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
            <div className='optiontitle mb-3 '>Select the category </div>
            <select className='rounded option' value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value='World'>World News</option>
            <option value="World_Asia">-Asia</option>
            <option value="World_Europe">-Europe</option>
            <option value="World_MiddleEast">-Middle East</option>
            <option value="World_Americas">-America</option>
            <option value="Politics">Politics</option>
            <option value='Sports'>Sports</option>
            <option value="Sports_Soccer">-Football</option>
            

            <option value='Business'>Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Entertainment_MovieAndTV">-Movie and TV</option>
            <option value="Entertainment_Music">-Music</option>

            <option value="Health">Health</option>
            <option value="ScienceAndTechnology">Science and Tech</option>
            <option value="Science">-Science</option>
            <option value="Technology">-Technology</option>
         


          </select>
          <button className='selectbutton btn btn-light' type='submit'>Submit</button>
          </label>
          </form>
          </div>
      </div>
            </div>
        </div>

        </p>
      </details>
      
        
      


        </section>
        
        <div className='pagenamecard rounded mb-5 mt-5'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center text-secondary'>Current Category</p>
        <div className=''>
        <div className='d-flex justify-content-center align-items-center'>

        <h1 className='pagename'>{Category}</h1>
        </div>
       </div>
      </div>

      </div>
      
      {
      Loading ? <h1 className='modu'><LoAding/></h1> : <div></div>
     }
      
      
      
      {
          directSumData && <Summary directSumData={directSumData} />
        }
        <section>
        <div className=''>

        <div className='container-fluid'>
          <div className=''>
            <div className='row col-md-12 col-12 text-center'>
            { 
             paginatedData?.map((res) =>(
          


                <div key={res.name}  className='mobimr  col-md-6 col-12'>
                  <div className=' cardtop '>
                      <div className=' '>
                        <div className='d-flex'>
                        <img className='WorldImage ' src={res?.image?.thumbnail.contentUrl}   alt={res.name} />
                      <h4 className=' toptitle  d-flex justify-content-center align-items-center'>{res.name}</h4>

                        </div>
                    
                      <div className=' d-block text-center'>
                       
                       {
                           res.provider.map((hes)=>(
                             <div className='m-5' key={hes.name}> 
                      <div className='moment m-2' >{moment(res.datePublished).fromNow()}</div>

                                    <h6 className=''>by</h6>
                                    <img className='sourceimage '  src={hes?.image?.thumbnail.contentUrl} alt={hes.name} />

                                <div className=''>
                                <h6 className=''> {hes.name}</h6>

                                </div>
                                   
                             </div>
                               
                           ))
                       }


                      </div>

                      </div>
                      <div className=' contentbutton'>
                                      
                                   
                              <div className=' d-block d-md-flex justify-content-center'>
                                    <a target="_blank" rel="noreferrer" className=' btn btn-light m-3 button' href={res.url}>Read Full News</a>
                               <a className='btn btn-light m-3 button' onClick={()=> {setDirectsumInput(res.url)}}>Summarize</a>
                              
                                       
                               <div onClick={() => setShareOn(!shareOn)} className=' button btn btn-light m-3'><Link href='/EditImage/Editor'>Share this news</Link></div>

                                                                       


                              </div>
                                      
                                 
                           
                               </div>
                               {
                                shareOn &&   <div className='col-md-12'>
                                <h4 className='contentparatitle'>Share this News</h4>
                                <div className='sharebutton'>
                              <FacebookShareButton url={res.url}><FacebookIcon/></FacebookShareButton>
                              <div onClick={()=>  navigator.share({
                                                            title: `${res.name}`,
                                                            text: 'Provided By SumNews',
                                                            url: `${res.url}`
                                                           }).then(() => {
                                               console.log("Sharing successfull");
                                       })} ><FacebookMessengerIcon/></div>         
                              <WhatsappShareButton url={res.url} title={`${res.name}    Provided By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                              <TwitterShareButton url={res.url} title={`${res.name}    Provided By SumNews`} ><TwitterIcon/></TwitterShareButton>
                              <TelegramShareButton url={res.url} title={`${res.name}    Provided By SumNews`}><TelegramIcon/></TelegramShareButton>
                              <div  style={{color : '#0099FF'}} onClick={()=>  navigator.share({
                                                              title: `${res.name}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${res.url}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><RiShareFill/></div>
                              </div>
                          </div>
                               }
                              
                   
                    </div>
                
                  
                             


                  

                  
               
               
                
            <hr />
            
             
             </div>
             
             


             
    ))}

            </div>
          </div>
        </div>
            
      
            
            
             
            
            <hr className='text-muted' />
           
            <div className='row'>
              <div className='col-md-12'>
              <div className='pagination mt-3 d-flex justify-content-center align-items-center'>
             <Pagination
                  postsPerPage={postsPerPage}
                   totalPosts={catData.length}
                   paginate={paginate}
               />

             </div>

              </div>
            </div>
            
            
            

      </div>
        </section>


    </div>
  )
}

export default Category

export async function getServerSideProps(context) {
    const {params} = context;
    const {Category} = params;
    const res = await axios({
        method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {category: `${Category}`, mkt: 'en-US', safeSearch: 'Off', textFormat: 'Raw',sortBy : 'Relevance'},
  headers: {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
    })
    const Data = res.data.value;
  
    return {
      props: {Data : Data,Category:Category},
    }
  }