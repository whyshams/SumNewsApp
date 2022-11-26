import { useResultContext } from "../Contexts/ResultContextProvider";
import Head from "next/head";
import LoAding from "../components/LoAding";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';


const Summarize = () => {
    const {sumData,setSumInput,sumText,setSumText,Loading,setSumInputText} = useResultContext();

    
   console.log(sumData?.summary)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSumInput(sumText);
        
      }
  
 
    console.log(sumData)
      return (
        <div>
          <Head>
            <title>Summarizer Tool</title>
            <meta name="robots" content="index, nofollow"/>
            <meta name='description' content='Summarizer is a free tool that helps you read more quickly and easily. Use it to summarize news articles or blog posts.' />
            <meta name='keywords' content='summarizer,summarize,news summarize,summarize news,summarizer tool,summarizer app,article summarize,article,summarization,summary,news summary' />
            <meta name="author" content="Nuren Shams Chowdhury"/>
          </Head>
          <div className=' mt-3 row '>
        <div className=' col-md-12'> 
        <div className=''>
          <h2 className='mainpagetitle m-3 d-flex justify-content-center align-items-center'>
            Summarizer Tool 
          </h2>
        </div>
        </div>
      
      </div>
        
          <div className='m-2 contentcard fullscreen rounded d-flex justify-content-center align-items-center'>
            <div className=''>
            <div className='col-12 d-block ' >

             <form onSubmit={handleSubmit} >
            <div className='mb-5 contentparatitle d-flex justify-content-center align-items-center text-muted '>Submit any LINK of English news or article in that input field to get summarized version of that news</div> 

                      <div className=' d-flex justify-content-center align-items-center '>
                          <input className='form-control summaryinput ' placeholder='Input LINK for Summarization...' type="text" value={sumText} onChange={(e)=>setSumText(e.target.value)} />
                      </div>
                      <div className='text-center d-flex justify-content-center align-items-center m-3 '>
                          <button  type='submit' className='btn btn-light button m-2'>Submit</button>
                          <button className="btn btn-light button m-2" onClick={()=> setSumText('')}>Clear</button>
                      </div>
            </form>
     </div>
 </div>
</div>

    
    
          <div className='sumResult'>
          <div >
          
          
                {
                  Loading && <div className="modu"><LoAding/></div> 
                }
                {
                  sumData && <div>
                   
                    <div className=' col-md-12 modu'>
                      
                      <div className='d-block contentcard'>
                    <Link href="/Summarize"><div className='btn btn-light p-2 mb-4 button' > Close</div></Link>

                        <div className=''>
                        <h2 className='contenttitle d-flex justify-content-center align-items-center'>{sumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumimage rounded' src={sumData.article_image} alt={sumData.article_title}/>
                        </div>
                        
                                       <div className='d-flex justify-content-center align-items-center'>
                                                                       <a target="_blank" rel="noreferrer" className=' btn  button btn-light m-3' href={sumData.article_url}>Read Full News</a>

                                       </div>
                         
                        <div className=' summary  justify-content-center align-items-center'>
                        <h4 className='contentparatitle d-flex justify-content-center align-items-center'>Summary : </h4>

                        {
                          sumData?.summary.length === 1 && <div>
                            {
                                sumData?.summary.map(dat => (
                                  <div key={dat}>
                                   <p className='contentpara d-block justify-content-center align-items-center'>{dat}</p> 
                                  </div>
                              ))

                            }
                          </div>
                        }
                         {
                          sumData?.summary.length > 1 && <div>
                            {
                                sumData?.summary.map(dat => (
                                  <div key={dat.text}>
                                   <p className='contentpara d-block justify-content-center align-items-center'>{dat.text}</p> 
                                  </div>
                              ))

                            }
                          </div>
                        }
                        {/*    

                        {
  sumData?.summary && <div> {sumData?.summary > 1 &&
    sumData?.summary.map(dat => (
        <div>
         <p className='contentpara d-block justify-content-center align-items-center'>{dat.text}</p> 
        </div>
    ))}
     {sumData?.summary < 2 &&
      <div>
      <p className='contentpara d-block justify-content-center align-items-center'>{sumData?.summary}</p> 
       </div>} </div>
}
                        
                        
                        */}

                        

                        </div>
                        <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={sumData.article_url}><FacebookIcon/></FacebookShareButton>
                                <FacebookMessengerShareButton url={sumData.article_url} appId='611096880759273'><FacebookMessengerIcon/></FacebookMessengerShareButton>
                                <WhatsappShareButton url={sumData.article_url} title={sumData.article_title}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={sumData.article_url} title={sumData.article_title} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={sumData.article_url} title={sumData.article_title}><TelegramIcon/></TelegramShareButton>
                                
                                


                                  </div>


                                </div>

                        </div>
                       
                      </div>
                      

                    </div>
                  </div> 
                }

       
    
            </div>
         
          </div>
        </div>
      )
}

export default Summarize