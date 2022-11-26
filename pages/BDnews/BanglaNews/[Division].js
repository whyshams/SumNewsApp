import {useState,useEffect} from 'react';

import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import {FaAngleDown,FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';


import Pagination from '../../../components/Pagination';

import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';


import { RiShareFill } from 'react-icons/ri';


const Division = ({Data,Division}) => {
  
    
    const[banglaText,setBanglaText] = useState();
    
    
    

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BDnews/BanglaNews/${banglaText}`)

    }

    useEffect(() => {
      window.scrollTo({
          top:150,
          behavior: 'smooth'
      })
     },[])
 


        {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = Data.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <Head>
        <title>বাংলা সংবাদ </title>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="বিভাগ অনুযায়ী বাংলাদেশের প্রত্যেক দৈনিক পত্রিকা এবং অনলাইন পত্রিকার সর্বশেষ বাংলা সংবাদ"/>
        <meta name="title" content="বিভাগ অনুযায়ী বাংলাদেশের প্রত্যেক দৈনিক পত্রিকা এবং অনলাইন পত্রিকার সর্বশেষ বাংলা সংবাদ"/>
        <meta property="og:title" content="বিভাগ অনুযায়ী বাংলাদেশের প্রত্যেক দৈনিক পত্রিকা এবং অনলাইন পত্রিকার সর্বশেষ বাংলা সংবাদ" />
        <meta property="og:image" content="https://sumnewsbd.com/FB.png" />
        <meta name="keywords" content="Bangla News,bangla newspaper,Bd News,Bd,Bangladesh News,Divisional Bangla News,Bangla,News,সংবাদ, বাংলা সংবাদ,বিভাগীয় সংবাদ, বাংলাদেশ,বাংলাদেশ সংবাদ"/>
       
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4327171076361001"
     crossOrigin="anonymous"></script>
     


        
      </Head>
      <div className='d-flex justify-content-center align-items-center m-3'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      
      
      <div className='row'>
        <div className='col-md-12'> 
        <div className='MainPageTitle'>

          <h2 className=' mainpagetitle d-flex justify-content-center align-items-center'>
            বিভাগ অনুযায়ী বাংলা সংবাদ
          </h2>
        </div>
        </div>
      </div>

      
      <section>
        <details>
          <summary className='btn btn-light button mt-2'>
            বিভাগ পরিবর্তন করুন <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> 
          </summary>
          <p><div className='select rounded'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        <h6 className='selecttitle d-flex justify-content-center align-items-center mt-3 mb-4'>বিভাগ পরিবর্তন করে উক্ত বিভাগের সর্বশেষ সংবাদ দেখুন</h6>
        
        <form className=' d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
            <div className='optiontitle mb-3 '>বিভাগ পরিবর্তন করুন   </div>
            <select className=' rounded option' value={banglaText} onChange={(e) => setBanglaText(e.target.value)}>
            <option value='ঢাকা'>ঢাকা</option>
            <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
            <option value='খুলনা'>খুলনা</option>
            <option value='রাজশাহী'>রাজশাহী</option>
            <option value='বরিশাল'>বরিশাল</option>
            <option value='সিলেট'>সিলেট</option>
            <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
            <option value='রংপুর'>রংপুর</option>
            
            
            </select>
            <button className='btn selectbutton btn-light' type='submit'>Submit</button>
            </label>
       

        </form>
        </div>
        
        </div>
    </div>
    
          </div>
    </div></p>
        </details>
      

      </section>
   

      
      
     
      <div className='pagenamecard'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center pagenametitle'>বর্তমান বিভাগ</p>
        <div >
        <div className='d-flex justify-content-center align-items-center cCat2'>

        <h1 className='pagename'>{Division}</h1>
        </div>
       </div>
      </div>

      </div>
     

    
       <section>
       
          
          
            <div className='container-fluid'>
              <div className='row '>
              <div className='col-md-12 d-flex flex-wrap'>
              
              {
          paginatedData?.map((data)=>(
            <div key={data.title} className=' col-md-6 col-12 '>
              <div className='m-3'>
              <div  className='row col-md-12 contentcard rounded '>
              <div className='col-md-12 col-12'>
                
                <img className='rounded image ' src={data.media} alt={data.title}/>
      
              </div>
              <div className='col-md-12 col-12 '>
              <div className=' maincontent'>
                <h3 className='contenttitle fontFat mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
                
                
                
                {/*  */}   
                
                
                
      
                <div className='d-block m-5'>
                  <h5 className='  m-2 contentparatitle  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
                  <div className=' d-flex justify-content-center align-items-center'>
                  <h6 >by </h6>
      
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                  <p className='sourcename'>{data.rights.toUpperCase()}</p>
                  </div>
                </div>
                 
                
                <div className='row contentbutton'>
                                            
                                            
                                            
                                       
                                    <div className=' col-12 col-md-12 d-flex d-md-flex justify-content-center'>
                                    <a target="_blank" rel="noreferrer" className=' btn  button btn-light m-3' href={data.link}>Read Full News</a>
                                    
                                    
                                                                              
      
                                    </div>
                                    <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={data.link}><FacebookIcon/></FacebookShareButton>
                                <div onClick={()=>  navigator.share({
                                                              title: `${data.title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${data.link}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><FacebookMessengerIcon/></div>         
                                <WhatsappShareButton url={data.link} title={`${data.title}    Provided By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={data.link} title={`${data.title}    Provided By SumNews`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={data.link} title={`${data.title}    Provided By SumNews`}><TelegramIcon/></TelegramShareButton>
                                <div  style={{color : '#0099FF'}} onClick={()=>  navigator.share({
                                                              title: `${data.title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${data.link}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><RiShareFill/></div>
                                </div>
                            </div>
    
                                     </div>
      
              <hr/>
      
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
                          <hr className='text-muted'/>
                          
       
          </div>
  
          

       </section>
       

    </div>
  )
}

export default Division



export async function getServerSideProps(context) {
        const {params} = context
        const {Division} = params 
      
       const res = await axios.request({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
        params: {
          q: `${Division}`,
          lang: 'bn',
          sort_by: 'date',
          country: 'BD',
          page: '1',
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '3fb40035d8msh0e1e6217ef102cap139658jsnbf4b614c85e3',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
       })
       const Data = res.data.articles;
       
       
   
    return {
      props: {Data : Data,Division}, 
    }
  }
