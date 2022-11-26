import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';


const Bangla = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
      <meta name="robots" content="noindex, follow"/>
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>



<Link href='/BDnews/BanglaNews/ঢাকা'><a className="btn btn-light m-3 p-5 button">বিভাগ অনুযায়ী</a></Link>
<Link href='/BDnews/BanglaCat/জাতীয়'><a className="btn btn-light m-3 p-5 button">বিষয় অনুযায়ী</a></Link>
<p className='contentparatitle'>Summarization does not support Bangla</p>




      </div>
    </div>
  )
}

export default Bangla