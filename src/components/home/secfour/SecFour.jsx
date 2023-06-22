import React from 'react'
import a from './SecFour.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import img from './img.png'
import { Button } from 'react-bootstrap'


function SecFour() {
    const [state, setstate] = useState([])
    useEffect(() => {
      axios.get("https://admin.satis-fit.uz/api/home/about_product").then((resp)=>{
        let allR=resp.data.data;
        setstate(allR)
      })
    }, [])

  return (
    <div className={a.sec}>
      <div className="container">
        <h1 className={a.title}>О Satis</h1>

        <div className={a.father}>
          <div className={a.box}>
            <p dangerouslySetInnerHTML={{__html:state.content}} className={a.text}></p>
            <Button id={a.btn}><h1 className={a.btn_text}>Подробнее</h1></Button>
          </div>

          <div className={a.box_two}>
            <img src={img} className={a.img}/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecFour
