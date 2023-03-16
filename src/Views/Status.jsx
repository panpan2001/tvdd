
import Accordion from "./Accordion"
import '../assets/styles/_Status.scss'


export default function Status({prob,url}){
  console.log("problem in status :"+prob)


  if(prob==[]) return <></>
  else return  (
    <div>
      { prob.map(i=>(
      
        <div className="main_content " key={i}>
            
           <div className="card-body row row-cols-1 snipcss-lUU29 ">
           <div className="card-text col mb-1">
           <strong> <h3>Tư vấn dinh dưỡng cho người {i} </h3></strong> 
            
             <Accordion prob={i} url={url} />
           </div>
         </div>
  
           </div>
       ))  }
    </div>) 
}

// return title.map((i)=>
// <>Status:{i}</>
{/* <p key={i}>{i.type}</p> */}
        