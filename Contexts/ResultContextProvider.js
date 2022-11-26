import React,{useContext,createContext,useState,useEffect} from 'react';
import axios from 'axios';
import { set } from 'nprogress';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ResultContext = createContext();


export default function ResultContextProvider  ({children})  {
 const router = useRouter()
  const [browserUrl,setBrowserUrl] = useState('http://sumnewsbd.com/BDnews/Categorical/news');

  const[searchTerm, setSearchTerm] = useState('');
  const [searchText,setSearchText] = useState('')



  const [menuOpen,setMenuOpen] = useState(false)
 
    const [bdNewsData,setBdNewsData] = useState([]); 

    const [bdNewsDataDiv, setBdNewsDataDiv] = useState([]);
    const [bdNewsDataCat, setBdNewsDataCat] = useState([]);
    
    const [catData,setCatData] = useState([]);


    const [sumData, setSumData] = useState();
    
  

    const [sumInput,setSumInput] = useState('');
    const [sumText,setSumText] = useState('');
    const [sumError, setSumError] = useState(false);

  
    const [Loading, setLoading] = useState(false)
    


    const [mobile,setMobile] = useState(false);
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const [copied, setCopied] = useState(false);
    
   
    const [directSumData,setDirectSumData] = useState()
    const [directSumInput,setDirectsumInput] = useState('')
    const [directSumError,setDirectSumError] = useState(false)
    const [clear,setClear] = useState(false)

    const getData = async () => {
      setLoading(true)
        await axios.request(
           {
             method: 'POST',
             url : `https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/`,
             headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
               'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
               },
             data: `{"url":"${sumInput}","min_length":100,"max_length":300,"is_detailed":true}`
         }).then((response)=>setSumData(response.data)).catch(err => router.push('/Extractive')).finally(() => setLoading(false))
 
       }

    


       const getData2 = async () => {
        setLoading(true)
        
        await axios.request(
           {
             method: 'POST',
             url : "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/",
             headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
               'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
               },
             data: `{"url":"${directSumInput}","min_length":100,"max_length":300,"is_detailed":true}`
         }).then((response)=>setDirectSumData(response.data)).then(()=> setClear(false)).catch(err => console.log(err)).finally(() => setLoading(false))
 
       }
 
     
    useEffect(() => {
    if(sumInput !== ''){
     

      getData();
      
    }
      },[sumInput])
    
      


      useEffect(() => {
        if(directSumInput !== ''){
          getData2();
         
        }
          },[directSumInput])
        
    



  return (
    <ResultContext.Provider value={{browserUrl,setBrowserUrl,searchTerm, setSearchTerm,searchText,setSearchText,setMenuOpen,menuOpen,mobile,setMobile,text, setText,image, setImage,Loading,setLoading,sumError,bdNewsData,setBdNewsData,bdNewsDataDiv,setBdNewsDataDiv,catData,setCatData,sumData, setSumData,sumInput,setSumInput,sumText,setSumText,copied,setCopied,bdNewsDataCat, setBdNewsDataCat,setDirectsumInput,directSumData,setDirectSumData,clear,setClear}}>
        
          {children}
        </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
