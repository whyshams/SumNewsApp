import {useState,useEffect} from 'react';
import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';

import Pagination from '../../components/Pagination';
import Head from 'next/head';
import Summary from '../../components/Summary';
import LoAding from '../../components/LoAding';

import {FacebookShareButton,FacebookIcon,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';
import {FaArrowAltCircleLeft} from 'react-icons/fa';

import Displayad from '../../components/Displayad'
import { RiShareFill } from 'react-icons/ri';
const International = ({Data}) => {

    const {bdNewsData,setBdNewsData,setDirectsumInput,directsumInput,Loading,directSumData,setDirectSumData,clear} = useResultContext();
    setBdNewsData(Data);
    console.log(directSumData)
    const router = useRouter()

    const [ load,setLoad ] = useState(false);
    useEffect(()=>{
        if(clear){
          setDirectSumData(null)
        }
    },[clear])
   
 
    {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);

console.log(paginatedData)
  return (
    <>
       <Head>
      <title>News of Bangladesh from International Journals </title>
      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Latest and important news of Bangladesh from the reputed News Journals around the world and summarize them in seconds with our summarizer tool.."/>
      <meta name="title" content="Know what the international media is saying about Bangladesh"/>
      <meta property="og:title" content="Know what the international media is saying about Bangladesh" />
      <meta property="og:description" content="Read,Summarize and Share the Latest and important news of Bangladesh from the reputed News Journals around the world." />
      <meta property="og:image" content="https://sumnewsbd.com/FB.png" />
      <meta name="keywords" content="news bd 24,news for bangladesh,Bangladesh news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news,bangladesh international news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
       <div className='row  '>
        <div className=' '> 
        <div className=''>
        <span className='btn btn-matt m-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

          <h2 className='mainpagetitle d-flex m-3 justify-content-center align-items-center'>
            News Of Bangladesh In International Media
          </h2>
        </div>
        </div>
      </div>
    
<div className='container-fluid'>
  
    <div className=''>
    <div className='row ' >
                          <div className='col-md-12 d-flex flex-wrap'>
                          {
                      paginatedData?.map((data)=>(
                        <div key={data.title} className='col-md-6 col-12 '>
                            <div  className='contentcard '>
                            <div className='col-md-12 col-12 '>
                            <img className='image rounded' src={data.urlToImage}  alt={data.title}  />

                            </div>
                            <div className='col-md-12 col-12'>
                            <div className='maincontent'>
                                <div >
                                <h4 className='contenttitle m-2 d-flex justify-content-center align-items-center'>{data.title}</h4>
                               
                               

                                </div>
                                <div>{data.description}<a href={data.url}><strong>............</strong></a></div>
                                
    
                                {
                              
                                  <div className='bdIntSource'>
                                    <div className='contentparatitle d-md-flex d-flex justify-content-center align-items-center'>
                                    <p className='contentparatitle'> {moment(data.publishedAt).fromNow()} by </p>
                                  
                                    </div>
                                    
                                    <div className='d-md-flex d-flex justify-content-center align-items-center'>
                                        <p>{data?.source.name}</p>
                                    </div>

                                  </div>
                                    
                                    
                                }

                            </div>
                    
                            <div className='row contentbutton'>
                                      
                                  
                                      
                                 
                              <div className=' d-block d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn btn-light button m-3' href={data.url}>Read Full News</a>
                               <a className='btn btn-light m-3 button'  onClick={()=> {setDirectsumInput(data.url) }}>Summarize</a>
                               

                              </div>
                               </div>
                               <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={data.url}><FacebookIcon/></FacebookShareButton>
                                <div onClick={()=>  navigator.share({
                                                              title: `${data.title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${data.url}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><FacebookMessengerIcon/></div>         
                                <WhatsappShareButton url={data.url} title={`${data.title}    Provided By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={data.url} title={`${data.title}    Provided By SumNews`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={data.url} title={`${data.title}    Provided By SumNews`}><TelegramIcon/></TelegramShareButton>
                                <div  style={{color : '#0099FF'}} onClick={()=>  navigator.share({
                                                              title: `${data.title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${data.url}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><RiShareFill/></div>
                                </div>
                            </div>
                           
                              






                            </div>

                            </div>


                        </div>
                          
                        ))}
                           
                            
                          
                           
                               
                            
                          <hr className='text-muted'/>
                
                
                            

                          </div>
                            

                        </div>

    </div>
    
                       
                         
                         {
      Loading ? <h1 className='modu'><LoAding/></h1> : <div></div>
     }
      
                            {
          directSumData && <Summary directSumData={directSumData} /> 
        }
       
                        <div className='mt-3'>
                        <div className='pagination  d-flex flex-wrap justify-content-center alig-items-center'>
                                  <Pagination
                                          postsPerPage={postsPerPage}
                                         totalPosts={bdNewsData.length}
                                           paginate={paginate}
                                    />

                </div>

                        </div>
                        <div className='text-center'>
        <h1 className='prime'>ADS</h1>
      <Displayad />

      </div>
             
                        
                        
        

  

</div>
        
        
    </>
  )
}

export default International;






export async function getServerSideProps(context) {
 
    const Res = await axios('https://newsapi.org/v2/everything?q=Bangladesh&language=en&searchIn=title&excludeDomains=dhakatribune.com,thedailystar.net,tbsnews.net,newagebd.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,prothomalo.com,sylhetmirror.com,newsnextbd.com&sortBy=publishedAt&apiKey=e61b96af15684d79b5b13f0a12b6ec0c')
      const data = Res.data.articles;
    return {
      props: {Data : data},
    }
  
  }