import React, { useEffect, useState } from 'react'
import a from './Events.module.css'
import axios from 'axios'
import loc from './loc.svg'
import date from './Frame.svg'

function Events() {
    const [state, setstate] = useState([])
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/events").then((resp)=>{
      let allR=resp.data.data;
      setstate(allR)
    })
  }, [])
  return (
    <div className={a.events}>
        <div className="container">
          {state.map((item, index)=>{
            return(
              <div className={a.box}>
                <div className={a.img_box}><img src={item.url} className={a.img}/></div>
                <h1 className={a.title}>{item.title}</h1>

              <div className={a.minibox}>
                <img src={loc} className={a.loc_img}/>
                <p className={a.loc}>{item.location}</p>
              </div>

              <div className={a.miniboxtwo}>
                    <div className={a.date_box}>
                        <img src={date} />
                        <h1 className={a.date}>{item.date}</h1>
                    </div>

                    <h1 className={a.more}>Подробнее</h1>
            </div>
            
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Events