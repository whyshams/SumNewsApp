import Head from "next/head";
import { useEffect,useState } from "react";
import Link from "next/link";
import Somenews from "../components/Somenews"
import imageUrlBuilder  from "@sanity/image-url";


export default function Home({ressome,image,categories}) {
  const [mapedSomeData,setMapedSomeData] = useState([]);




useEffect(() => {
   const imageBuilder = imageUrlBuilder({
      projectId: 'jj3j3gmk',
      dataset: 'production'
   })
   setMapedSomeData(ressome.map(r => {
      return{
         ...r,
         mainImage : imageBuilder.image(r.mainImage)
      }
   }))

},[image])


  return (
    <>
          
      <Head>
        <title>sumNews</title>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="SumNews is the most powerful news aggregator in Bangladesh. It's an webapp that allows you to search for, read, share, and summarize the latest headlines from over 1,000 sources across the web. Read more about what makes SumNews different from other news sites of Bangladesh!" />
        <meta name='title' content="SumNews is a powerful online news aggregator of Bangladesh that brings together the best stories from around the web and lets you summarize them in seconds."/>
        <meta property="og:image" content="https://sumnewsbd.com/FB.png" />
        <meta  property="og:title" content="sumNews-A news aggregator and summarizer of Bangladesh." />
        <meta name='keywords' content='news aggregator,summarize news bangladesh, get news, find news, short news, news digest,bangladesh news, bangladesh news digest, bangladesh news, global news, bangladesh international news, bangladesh divisional news, বাংলা সংবাদ'/>
      </Head>
      <div className="wrapper">
      <div className='  row fullscreen'>
        
        <div className="col-md-12">
          <Link href='/Read'>
          <a className="d-flex mt-5 justify-content-center align-items-center">
            <h4 className="mainpagetitle btn btn-matt">
                    READ
              </h4>

            </a>
          
          </Link>
        
        </div>
        <div className="col-md-12">
          <Link href='/Summarize'>
          <a className="d-flex   justify-content-center align-items-center">
            <h4 className="mainpagetitle btn btn-matt">
                    SUMMARIZE
              </h4>

            </a>
          </Link>
        
        </div>
   
        <div className="col-md-12 ">
          <div className="text-center">
            <div className="d-flex  justify-content-center align-items-center">
            <h4 className="contenttitle ">
                    AND
              </h4>

            </div>
             
            <div className="d-flex justify-content-center align-items-center">
            <h4 className="mainpagetitle">
                    SHARE
              </h4>

            </div>
          </div>
        </div>
        
      </div>
      <div className="fullscreen mt-3 mb-3">
      <Somenews mapedSomeData={mapedSomeData} categories={categories}/>

      </div>
      </div>
     
     
    
    </>
  )
}





export async function getServerSideProps(){
  const query = encodeURIComponent(`*[_type == "somenews" ]{
    ...,
    categories[]->,
    "related": *[_type == "somenews" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)  {
       title,
       
     }
  } | order(publishedAt asc)`)
  const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
  `).then(d => d.json())
 

  return{
   props:{
      ressome : res.result,
      image : res.result[0].mainImage,
      publishedAt: res.result[0].publishedAt,
      categories: res.result[0].categories
      
     

   }
  }
}