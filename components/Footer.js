import Link from "next/link"
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <hr/>
        <div className="Footer">
        <div className='Footer-menu pt-4 pb-1 d-flex flex-wrap justify-content-center align-items-center'>
                <Link href='/AboutUs'><a className='btn btn-matt m-md-3 m-1'>About Us</a></Link>
                <Link href='/ContactUs'><a className='btn btn-matt m-md-3 m-1'>Contact Us</a></Link>
                <Link href='/Terms'><a className='btn btn-matt m-md-3 m-1'>Terms &amp; Conditions</a></Link>
                <Link href='/PrivacyPolicy'><a className='btn btn-matt m-md-3 m-1'>Privacy Policy</a></Link>
                <Link href='/Disclaimer'><a className='btn btn-matt m-md-3 m-1'>Disclaimer</a></Link>

                
            </div>
            <div>
                <div className="d-flex text-muted justify-content-center align-items-center">
                    <h1 className="contentparatitle">Follow Us</h1>
                </div>
                <div className="pb-4 d-flex text-muted justify-content-center align-items-center">
                <a href='https://twitter.com/SumNewsbd' target='_blank' rel="noreferrer">
                        <div className="m-2 btn btn-light"><BsTwitter/></div>
                    </a>
                    <a href='https://www.facebook.com/sumthenews' target='_blank' rel="noreferrer">
                        <div className="m-2 btn btn-light"><BsFacebook/></div>
                    </a>
                </div>
              
            </div>
            <div className=''>
                <div className='copyright mt-3 d-flex justify-content-center align-items-center'>&copy; Databases of Various News API from open source</div>
                <div className='footer-logo'>
                    <p className='mt-5 d-flex text-muted justify-content-center align-items-center'>Brought To You By</p>
                    <h1 className='  mt-2 pb-5 d-flex flex-wrap justify-content-center align-items-center'>
                    <Link href='/'>
                    <a className="pt-5 d-flex justify-content-center align-items-center">
                    <h4 className="sum">sum</h4><h1 className="logo">News</h1>
                    </a>
                    </Link>
                     
                    </h1>
                </div>

            </div>
         
        </div>
    </>
  )
}

export default Footer