
import Status from "./Status";
// import './nutritionConsulting.css'
import '../assets/styles/_nutritionConsulting.scss'
// import { diseases,typeBody } from "./content";
import { useState } from "react";


export default function NutritionConsulting(){
    const [type, setType]=useState(['gầy'])
    const [disease,setDisease]= useState(["mỡ máu","suy dinh dưỡng"] )
    const url=['https://6342d6a23f83935a784ab7c1.mockapi.io/api/tvdd/typeDisease',
  'https://6342d6a23f83935a784ab7c1.mockapi.io/api/tvdd/typeBody'
]
    // const type= ["gầy",'bình thường']
//    const disease= ["mỡ máu","suy dinh dưỡng"]  []

     return(
        <div className="container-fluid mt-3">
            
        <div className="row ">
        
          {/* <div className="col-3   mt-3 text-uppercase  align-middle " id='bmi'>BMI</div> */}
           <div className="  text-dark">
            <div className="header">
                <h2 className="mt-3  text-uppercase  align-middle">Kết quả tư vấn </h2 >
            </div>
               {type &&  <Status prob={type} url={url[1]}/>}
               {disease &&  <Status prob={disease} url={url[0]}/>}
                </div>
      </div>
              </div>
    )
}