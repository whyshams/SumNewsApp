
import { useResultContext } from '../Contexts/ResultContextProvider';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';

const Summary = ({directSumData}) => {

  const {clear,setClear} = useResultContext();
  return (
    <div>
                
      
                {
                  directSumData ? <div className='modu'>
                    
                  <div className=' col-md-12'>
                        
                      
                      <div className='d-block contentcard'>
                    <button className='btn btn-light p-2 mb-4 button' onClick={() => {setClear(true)}}>Close</button>

                        <div className='maincontent'>
                        <h2 className='contentitle d-flex justify-content-center align-items-center'>{directSumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumimage rounded' src={directSumData.article_image} alt={directSumData.article_title}/>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                                                                       <a target="_blank" rel="noreferrer" className=' btn  button btn-light m-3' href={directSumData.article_url}>Read Full News</a>

                                       </div>
                       
                     
                    

                        <div className=' summary justify-content-center align-items-center'>
                        <h4 className='contentparatitle d-flex justify-content-center align-items-center'>Summary : </h4>
                        {
                          directSumData?.summary.length === 1 && <div>
                            {
                                directSumData?.summary.map(dat => (
                                  <div key={dat}>
                                   <p className='contentpara d-block justify-content-center align-items-center'>{dat}</p> 
                                  </div>
                              ))

                            }
                          </div>
                        }
                         {
                          directSumData?.summary.length > 1 && <div>
                            {
                                directSumData?.summary.map(dat => (
                                  <div key={dat.text}>
                                   <p className='contentpara d-block justify-content-center align-items-center'>{dat.text}</p> 
                                  </div>
                              ))

                            }
                          </div>
                        }

                        </div>
                        <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={directSumData.article_url}><FacebookIcon/></FacebookShareButton>
                                <div onClick={()=>  navigator.share({
                                                              title: `${directSumData.article_title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${directSumData.article_url}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><FacebookMessengerIcon/></div> 
                                <WhatsappShareButton url={directSumData.article_url} title={`${directSumData.article_title}     Provided By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={directSumData.article_url} title={`${directSumData.article_title}     Provided By SumNews`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={directSumData.article_url} title={`${directSumData.article_title}     Provided By SumNews`} ><TelegramIcon/></TelegramShareButton>
                                
                                

                                  </div>


                                </div>


                        </div>
                       
                      </div>
                      

                    </div>
                    
                    
                  </div> :<div>
                  <button className='btn btn-danger p-2' onClick={() => {setClear(true)}}></button>

                    <h1 className='modu'>
                    Loading...

                    </h1>
                      </div>
                }

    </div>
  )
}

export default Summary