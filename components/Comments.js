import moment from "moment"


export default function Comments({ commentData }) {
  
        
   
    return (
      <>
       <div className= "bg-black p-5 rounded" >
       <div>
            <h1 className="courierprime text-center ">{commentData.length ? `${commentData.length} Comments Already`: "Be the first one to comment."}</h1>
        </div>
        <div className=" m2">
            {
                commentData.map((data) => (                    
                <div key={data.name} className="m1  border-bottom pb-3">
                    <div className="d-md-flex m1">
                    <h2 className="commentname">{data.name}</h2>
                    <div className="d-flex">
                    <small className="text-light">Said</small><p className="m-3">{moment(data._createdAt).fromNow()}</p> 
                        
                    </div>

                    </div>
                    <div className="fst-italic  m1">
                    <h4>&quot;{data.comment}&quot;</h4>
                    </div>
                </div>
                ))
            }
        </div>
       </div>
     

      </>
    )
  }