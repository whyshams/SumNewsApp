import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react"
import Parser from 'html-react-parser';


const ContactUs = ({ressome}) => {

  const serializers = {
    types: {
      block: (props) => {
        const { style = "normal" } = props.node;
  
    
  
        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }
  
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props);
      },
      customCode: (props) =>
        console.log("code block", props) || (
            <div>{Parser(props.node.code.code)}</div>
          
        )
    },

  };

 
  return (
    <>
    <Head>
        <title>Contact Us</title>
      <meta name="robots" content="index, nofollow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta title="title" content="Contact SumNews"/>
        <meta name='description' content='Contact SumNews for Partnership, Endorsement or Advertisement.' />

      </Head>
        <div className='mainpagetitle mt-5 d-flex justify-content-center align-items-center text-center'>
            <h1>Contact SumNews</h1>
        </div>
        <hr className='text-muted '/>
        <div className='mt-5 contentcard rounded fullscreen d-flex flex-wrap justify-content-center align-items-center text-center'>
          <pre>
          <BlockContent
  blocks={ressome}
  projectId="jj3j3gmk"
  dataset="production"
  serializers={serializers}   
/>
            
          </pre>
  
        </div>
    </>
  )
}

export default ContactUs

export async function getServerSideProps(){
  const query = encodeURIComponent(`*[_type == "contactus"]`)
  const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
  `).then(d => d.json())
 

  return{
   props:{
      ressome : res.result[0].bodyall,
      
     

   }
  }
}