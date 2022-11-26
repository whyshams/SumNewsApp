import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import imageUrlBuilder from "@sanity/image-url";
import moment from 'moment/moment';
import Comments from '../../components/Comments';
import Head from 'next/head';
import Form from '../../components/Form';
import BlockContent from "@sanity/block-content-to-react"
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';



import {FaArrowAltCircleLeft,FaHome,FaShareAltSquare} from 'react-icons/fa';

import {RiShareFill} from 'react-icons/ri'



const Some = ({body,image,res,title,publishedAt,commentData,writer,description,_id,writerlink,data}) => {
  const [someData,setSomeData] = useState([]);
  const [href,setHref] = useState([])
  const router = useRouter();
 console.log(data.result[0].categories)

 useEffect(() => {
    setHref(window.location.href)
 },[])
 console.log(href)
  useEffect(() => {
    window.scrollTo({
        top:200,
        behavior: 'smooth'
    })
   },[body])
   
   useEffect(() => {
    const imageBuilder = imageUrlBuilder({
       projectId: 'jj3j3gmk',
       dataset: 'production'
    })
    setSomeData(res.map(r => {
       return{
          ...r,
          mainImage : imageBuilder.image(r.mainImage)
       }
    }))
 
 },[image])

 const BlockRenderer = (props) => {
  const {style = 'normal'} = props.node

 

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}
    
  return (
    <div key={title}>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='description' content={description}/>
        <meta name='title' content={title} />
        <meta property='description' content={description}/>
        <meta property='title' content={title} />
        <meta property='og:image' content={someData.map(d => {
                    return d.mainImage
        })} />
      </Head>
      <div className='d-flex border-bottom pb-2 justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
            <div className='mt-2'>
            <div className=''>
            <h1 className='prime'>{title}</h1>
            <strong className='text-light'>{moment(publishedAt).fromNow()}</strong>
            </div>
            <div className='writer mt-2'>
            <h4 className='fst-italic'><strong><a className='text-white' href={writerlink}>{writer ? `Written By : ${writer}`:""}</a></strong></h4>

            </div>
            <div className='text-center mt-4 mb-4'>
        {
          someData.map(data => (
        <img key={data.title} className='singleimage rounded' src={data.mainImage}  />

          ))
        }
      </div>
            </div>
          
      <div className='contentcard rounded pb-5'>
        
      
      <div className='m-mb-5 m-2 border-bottom border-top pt-2 blockcontent'>
      <BlockContent
  blocks={body}
  projectId="jj3j3gmk"
  dataset="production"
  serializers={{types: {block: BlockRenderer}}}
/>

<div className='col-md-12 mt-5 mb-4'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={href}><FacebookIcon/></FacebookShareButton>
                                <div onClick={()=>  navigator.share({
                                                              title: `${title}`,
                                                              text: 'By SumNews',
                                                              url: `${href}`
                                                             }).then(() => {
                                                 console.log("Sharing successfull");
                                         })} ><FacebookMessengerIcon/></div>         
                                <WhatsappShareButton url={href} title={`${title}     By SumNews`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={href} title={`${title}     By SumNews`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={href} title={`${title}    By SumNews`}><TelegramIcon/></TelegramShareButton>
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
      <div className='m-4'>
      <Comments commentData={commentData} />

      </div>
<Form _id={_id} />
  
     
      </div>
    
     </div>
  )
}

export default Some




export async function getServerSideProps(context){
    const {params} = context;
    const {some} = params
   

    const query = encodeURIComponent(`*[_type == "somenews" && slug.current == "${some}"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `,{cache:"no-store"}).then(d => d.json())
   const commentQuery = encodeURIComponent(`*[_type == "comment" && somenews._ref == "${res.result[0]._id}" && approved == true]`)
   const commentRes= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${commentQuery}
   `,{cache:"no-store"}).then(d => d.json())
   return{
    props:{
      data : res,
      res: res.result,
      publishedAt : res.result[0].publishedAt,
      title : res.result[0].title,
      writer : res.result[0].writer,
      writerlink : res.result[0].writerlink,

      description : res.result[0].description,


        body : res.result[0].body,
       image : res.result[0].mainImage,
       _id : res.result[0]._id,
      commentData : commentRes.result, 
            



    }
   }
}
