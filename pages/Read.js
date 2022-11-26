import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { useRouter } from 'next/router';
import Head from 'next/head';



const Read = () => {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <>
     <Head>
      <title>Read News</title>
      <meta name="robots" content="index, follow"/>
      <meta name="title" content="News from Everywhere."/>

      <meta name="description" content="News catalog of SumNews."/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
            <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>
      </div>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>


<Link href='/BDnews/English'><a className="btn btn-light m-3 p-4 button">English News Of Bangladesh</a></Link>
<Link href='/TopNews/World'><a className="btn btn-light m-3 p-4 button">International News</a></Link>
<Link  href='/Somenews'><a  className="d-block btn btn-light m-3 p-4 button"><p className="h6 btn-light button">Some News</p><small className="text-muted">by SumNews</small></a></Link>
<Link  href='/Newspapers'><a className="d-block btn btn-light m-3 p-4 button"><p className="h6 btn-light button"> Surf Through Other Newspapers</p><small className="text-muted">in SumNews</small></a></Link>
<Link href='/BDnews/BanglaNews'><a className="d-block btn btn-light m-3 p-4 button"><p className="h6 btn-light button">বাংলা সংবাদ</p><small className="text-muted">Summarization Does not support Bangla</small></a></Link>




      </div>
      

    </>
  )
}

export default Read