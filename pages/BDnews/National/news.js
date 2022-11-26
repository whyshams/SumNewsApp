import {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useResultContext } from '../../../Contexts/ResultContextProvider';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaAngleDown,FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';

import Head from 'next/head';
import Pagination from '../../../components/Pagination';
import Summary from '../../../components/Summary';
import LoAding from '../../../components/LoAding';
import Link from 'next/link';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';


import { RiShareFill } from 'react-icons/ri';




const Category= ({Data}) => {
    const {bdNewsDataCat, setBdNewsDataCat,setSumText,setDirectsumInput,directSumData,setDirectSumData,clear,Loading} = useResultContext();
    const [bdCat,setBdCat] = useState('news');
    const [passData,setPassData] = useState('');
    
   
    const router = useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/BDnews/Categorical/${bdCat}`);

    }
    const handleCopy = () => {
      
      router.push('/Summarize')
      
    }
    
   useEffect(() => {
  
      setSumText(passData)
    
   },[passData])
  
   useEffect(()=>{
    if(clear){
      setDirectSumData(null)
    }
},[clear])

    

    setBdNewsDataCat(Data);


     {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsDataCat.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);
    
  return (
    <div className='maindiv'>
      <Head>
      <title>National Media </title>
      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Read,Summarize and Share the news and articles from the reputed English Newspaper of Bangladesh in one click."/>
      <meta name="title" content="News from the English newspapers of Bangladesh in one place."/>
      <meta property="og:title" content="News from the English newspapers of Bangladesh in one place." />
<meta property="og:description" content="Read,Summarize and share the news and articles from the reputed English Newspaper of Bangladesh in one click." />
<meta property="og:image" content="https://sumnewsbd.com/FB.png" />
      <meta name="keywords" content="Bangladesh news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news"/>
     
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      
      <div className='selectSticky'>
      <div className='row '>
        <div className=' col-md-12'> 
       
        <div className=''>
        <span className='btn btn-matt m-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

          <h2 className='mainpagetitle d-flex justify-content-center align-items-center'>
             English News From Bangladesh National Media 

          </h2>
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
          <details>
            <summary className='btn btn-light button mt-3'>Summary</summary>
            <p className='contentpara mt-3'> {data.summary}</p>

          </details>
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

export default Category


export async function getServerSideProps() {
   
    const res =await axios({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search',
        params: {
          q: 'Bangladesh News',
          lang: 'en',
          sort_by: 'date',
          country: 'BD',
          topic: `news`,
          media: 'True',
          sources: 'dhakatribune.com,thedailystar.net,tbsnews.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,en.prothomalo.com,dhakapost.com'
        },
        headers: {
          'X-RapidAPI-Key': '0ea5875e08msh2ec564c6381f6e8p10c302jsn3dbc1337386d',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
          'cache-control' : 'no-cache',
          'pragma' : 'no-cache',
          'expires' : '0'
        }

    })
    const Data = res.data.articles;
    return{
        props : {Data },

    }
}