import {useState,useEffect} from 'react';
import Link from 'next/link';
import moment from 'moment';
import HomePagi from '../../components/HomePagi';
import imageUrlBuilder  from "@sanity/image-url";
import Head  from 'next/head';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { useRouter } from 'next/router';
const Category = ({ressome,image,category}) => {
    const [mapedSomeData,setMapedSomeData] = useState([]);
    const router = useRouter();
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
  const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(9);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = mapedSomeData.slice(indexOfFirstPost, indexOfLastPost);
console.log(paginatedData)
const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
   <>
   <Head>
    <title>{category}</title>
    <meta name='title' content='Some News by SumNews' />
    <meta name='description' content='Original contents of SumNews.Written by the quality writers and picked by the Editor of SumNews.' />
    <meta property='og:title' content='Some News by SumNews' />
    <meta property='og:description' content='Original contents of SumNews.Written by quality writers and picked by the Editor of SumNews.' />
    <meta property='og:image' content='https://www.sumnewsbd.com/FB.png' />
   </Head>
   <div className='d-flex mb-3 mt-3 justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
            <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>
      </div>
   
    <div className='container-fluid'>
      <div className='row '>
        <div className='border-bottom border-top pt-2 pb-2 border-light d-block text-center'>
        <h1 className='prime m-4'>Topic:</h1>

        <h1 className='prime m-4'>
          {
           category
          }
        </h1>
        </div>

      <div className='col-md-12 d-flex flex-wrap  '>{paginatedData.map(data => (
    <div key={data.title} className='col-md-4  mt-2'>
      <Link href={`/Somenews/${data.slug.current}`}>
        <a className='text-white'>
        <div className='contentcard d-block'>
         <img className='image' src={data.mainImage} />
    <h4 className='contenttitle' >{data.title}</h4>
    <strong className='text-light'>{moment(data.publishedAt).fromNow()}</strong>

    <p>{data.description}</p>
    <div className='d-flex mt-3'>
        <p>Topic : </p><a style={{color:'#FF4081',marginLeft:'10px'}} href={`/Category/${category}`}> {` ${category}`}</a>
    </div>
         </div>

        </a>
       
    
   </Link>
 
    </div>
   ))}</div>
  

      </div>
      
     

   </div>
   
              <div className='col-md-12'>
              <div className='pagination mt-3 d-flex justify-content-center align-items-center'>
                {
                  mapedSomeData.length > 6 &&  <HomePagi
                  postsPerPage={postsPerPage}
                   totalPosts={mapedSomeData.length}
                   paginate={paginate}
               />
                }
            

             </div>

              </div>
            
   </>
  
  )
}

export default Category



export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params

    const query = encodeURIComponent(`*[_type == "somenews" && "${category}" in categories[]->title] | order(publishedAt desc)`)
    const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
    `).then(d => d.json())
   
  
    return{
     props:{
        ressome : res.result,
        image : res.result[0].mainImage,
        publishedAt: res.result[0].publishedAt,
        category: category
       
  
     }
    }
  }