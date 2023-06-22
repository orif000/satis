import React from 'react'
import a from './Item.module.css'
import date from './Frame.svg'

function Item(props) {
  return (
    <div className={a.card}>
      <div className={a.box}>
        <h1 className={a.title}>{props.title}</h1>
        <p className={a.text}>{props.short}</p>

        <div className={a.minibox}>
            <div className={a.date_box}>
                <img src={date} className={a.img}/>
                <h1 className={a.date}>{props.date}</h1>
            </div>

            <h1 className={a.more}>Подробнее</h1>
        </div>

      </div>
      <div className={a.boxtwo}>
        <img className={a.box_img} src={props.url} />
      </div>
    </div>
  )
}

export default Item
