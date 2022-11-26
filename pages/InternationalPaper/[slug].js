import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser';
import Head from 'next/head';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';
import Displayad from '../../components/Displayad'
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { RiShareFill } from 'react-icons/ri';
const Slug = ({body,title,description}) => {
  const [href,setHref] = useState([])
  
  const router = useRouter();
  
  useEffect(() => {
     setHref(window.location.href)
  },[])
  useEffect(() => {
    window.scrollTo({
        top:150,
        behavior: 'smooth'
    })
   },[body])
    
    
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='title' content={title} />
        <meta name='description' content={description}/>
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description}/>
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      <div>
      {body.map((data) => (
        data.children.map(d => (
         
<div key={d.title}>{Parser(d.text)}</div>

        
        ))
      ))}
      </div>
      <div className='text-center'>
        <div className='prime m-3'>{title}</div>
        <div className='text-white'>{description}</div>
      </div>
      <div className='text-center'>
        <h1 className='prime'>ADS</h1>
      <Displayad/>

      </div>
      <div className='col-md-12 mt-4 mb-4'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={href}><FacebookIcon/></FacebookShareButton>
                                <div onClick={()=>  navigator.share({
                                                              title: `${title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${href}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><FacebookMessengerIcon/></div>         
                                <WhatsappShareButton url={href} title={`${title}    Provided By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={href} title={`${title}    Provided By SumNews`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={href} title={`${title}    Provided By SumNews`}><TelegramIcon/></TelegramShareButton>
                                <div  style={{color : '#0099FF'}} onClick={()=>  navigator.share({
                                                              title: `${title}`,
                                                              text: 'Provided By SumNews',
                                                              url: `${href}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><RiShareFill/></div>
                                </div>
                            </div> 
     </div>
  )
}

export default Slug

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params
   

    const query = encodeURIComponent(`*[_type == "intnewspaper" && slug.current == "${slug}"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `,{cache:"no-store"}).then(d => d.json())

   return{
    props:{
        body : res.result[0].body,
        title : res.result[0].title,
        description : res.result[0].description

    }
   }
}
