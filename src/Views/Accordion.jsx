import React, { useState, useEffect } from 'react';
// import AccordionData from './AccordionData';
// import { Data } from './content';
import '../assets/styles/_accordion.scss'
import axios from "axios";
const Accordion = ({ prob,url }) => {
  const [type, setType] = useState([])
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setType(res.data)
      })
      
  }, [])
  console.log("Data get:", type)
  

  return type.filter(i => i.name == prob).map((t) => 
    
    <div className="accordion-item   mb-2" key={t.id} >
      <div className="col-11 " id='section_title'><h5>Calo: {t.calo} kCal</h5></div>
      <hr />

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5> Chất đạm: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.protein}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5> Tinh bột: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.starch}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5> Chất béo: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.lipit}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5>Rau quả: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.vegetableAndFruit}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5>Muối: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.salt}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5>Đường: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.sugar}</p></div>
        </div>
        <hr />
      </div>

      <div className="accordion-title" >
        <div className="row mt-3 ml-3 mr-3 mb-3">
          <div className="col-11 " id='section_title'><h5>Thực phẩm đề xuất: </h5></div>
          <div className="accordion-content bg-white p-3" ><p>{t.recommendedFood}</p></div>
        </div>
        <hr />
      </div>

    </div>

  
  )


  




}

export default Accordion;