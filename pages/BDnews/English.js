import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import { useRouter } from 'next/router';
import Head from 'next/head';


const Read = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
      <meta name="robots" content="noindex, follow"/>
      </Head>
        <span className='btn btn-matt p-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>




<Link href='/BDnews/National/news'><a className="btn btn-light m-3 p-5 button">National Media</a></Link>
<Link href='/BDnews/International'><a className="btn btn-light m-3 p-5 button">International Media</a></Link>





      </div>
    </div>
  )
}

export default Read