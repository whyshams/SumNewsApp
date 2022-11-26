import Link from "next/link";
import Head from "next/head";
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';

const index = () => {
  return (
    <div className="">
      <Head>
      <meta name="robots" content="noindex, follow"/>
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
      <Link href='/BDnews/National/news'><a className="btn btn-light m-3 p-5 button">National Media</a></Link>

     

<Link href='/BDnews/International'><a className="btn btn-light m-3 p-5 button">International Media</a></Link>

<Link href='/BDnews/BanglaNews/ঢাকা'><a className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(আঞ্চলিক)</a></Link>
<Link href='/BDnews/BanglaCat/জাতীয়'><a className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(বিষয়ক)</a></Link>



      </div>
    



    </div>
  )
}

export default index