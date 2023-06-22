import React, { useEffect, useState } from 'react'
import a from './SecTwo.module.css'
import axios from 'axios'

function SecTwo() {
    const [state, setstate] = useState([])
    useEffect(() => {
      axios.get("https://admin.satis-fit.uz/api/home/menu_category").then((resp)=>{
        let allR=resp.data.data
        setstate(allR)
      })
    }, [])

  return (
    <div className={a.sec}>
      <div className="container">
        <div className={a.father}>
            <div className={a.uch}></div>
            
            {state.map((item, index)=>{
              return(
                <div className={a.box} key={index}>
                  <img className={a.img} src={item.url} />
                  <div className={a.title}>{item.title}</div>
                  <p className={a.text}>{item.short_content}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default SecTwo
