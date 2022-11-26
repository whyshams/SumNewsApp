import Head from "next/head"

const Disclaimer = () => {
  return (
    <>
       <Head>
        <title>Disclaimer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="robots" content="index, nofollow"/>
        <meta name='description' content='Webiste disclaimer for SumNews webapp' />
        </Head>
        <div >
            <h1 className='mainpagetitle d-flex justify-content-center align-items-center'>Disclaimer</h1>
            <p className='text-mute d-flex justify-content-center align-items-center'>Last updated August 31, 2022</p>
        </div>
        <div className="contentcard rounded">
        <div>
            <h1 >WEBSITE DISCLAIMER</h1>
            <p>The information provided by Sum News (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on sumnewsbd.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
        </div>
        <div>
            <h1>EXTERNAL LINKS DISCLAIMER</h1>
            <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising i.e google Adsense . Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
        </div>

        </div>
      
    </>
  )
}

export default Disclaimer