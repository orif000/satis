import React, { useEffect, useState } from 'react'
import a from './SecFive.module.css'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import loc from './loc.svg'
import date from './Frame.svg'

function SecFive() {
    const [state, setstate] = useState([])
    useEffect(() => {
      axios.get("https://admin.satis-fit.uz/api/events").then((resp)=>{
        let allR=resp.data.data;
        setstate(allR)
      })
    }, [])
  return (
    <div className={a.sec}>

      <div className="container">
        <h1 className={a.events}>Мероприятия</h1>

      <OwlCarousel loop items={3} nav={true}>
      <div className={a.father}>
      {state.map((item, index)=>{
        return(
        <div key={index} className={a.box}>
            <img src={item.url} className={a.img}/>
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

      <div className={a.father}>
      {state.map((item, index)=>{
        return(
        <div key={index} className={a.box}>
            <img src={item.url} className={a.img}/>
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

      <div className={a.father}>
      {state.map((item, index)=>{
        return(
        <div key={index} className={a.box}>
            <img src={item.url} className={a.img}/>
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

      <div className={a.father}>
      {state.map((item, index)=>{
        return(
        <div key={index} className={a.box}>
            <img src={item.url} className={a.img}/>
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
      </OwlCarousel>
      
      </div>

    </div>
  )
}

export default SecFive
