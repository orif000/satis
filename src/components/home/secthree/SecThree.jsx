import React, { useEffect, useState } from 'react'
import a from './SecThree.module.css'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item from './item/Item';


function SecThree() {
  const [state, setstate] = useState([])
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/stati").then((resp)=>{
      let allR=resp.data.data;
      setstate(allR)
    })
  }, [])
  return (
    <div className={a.sec}>
      <div className="container">
        <h1 className={a.title}>Интересные статьи</h1>

        
        <OwlCarousel loop items={2} nav={true}>
        {state.map((item, index)=>{
          return(
            <Item
            key={index}
            title={item.title}
            url={item.url}
            short={item.short_content}
            date={item.date}
            />
          )
          })}
          {state.map((item, index)=>{
          return(
            <Item
            key={index}
            title={item.title}
            url={item.url}
            short={item.short_content}
            date={item.date}
            />
          )
          })}
        </OwlCarousel>
        
      </div>
    </div>
  )
}

export default SecThree
