import React, { useEffect, useState } from 'react'
import a from './Anim.module.css'
import axios from 'axios'

function Anim() {
    const [state, setstate] = useState([])
    useEffect(() => {
      axios.get("https://admin.satis-fit.uz/api/home/banner").then((resp)=>{
        let allResp=resp.data.data
        setstate(allResp)
      })
    }, [])
  return (
    <div className={a.anim}>

      <div className={a.father}>
        {state.map((item, index)=>{
            return(
                <div className={a.one} key={index}>
                   <div className={a.box}>
                     <img src={item.url} className={a.img} />
                     <h1 className={a.title}>{item.title}</h1>
                     <p className={a.text}>Подробнее</p>
                   </div>
                </div>
            )
           
        })}
        <div className={a.boxtwo}></div>
        <div className={a.boxthree}></div>

      </div>



    </div>
  )
}

export default Anim
