import React from 'react'
import a from './Diet.module.css'
import one from './one.jpg'
import two from './two.png'
import date from './date.svg'

function Diet() {
  return (
    <div className={a.diet}>
        <div className="container">
            <div className={a.father}>

                <div className={a.box}>
                    <div className={a.img_box}>
                        <img src={one} className={a.img}/>
                    </div>
                    <h1 className={a.title}>Пищевое поведение, которое приводит к набору веса</h1>
                    <p className={a.text}>Чтобы понять, почему мы набираем вес, нужно немного разобраться с механизмом отложения жира и сахара в нашем организме.</p>

                    <div className={a.minibox}>
                        <div className={a.date_box}>
                            <img src={date} className={a.date_img}/>
                            <p className={a.date}>17.02.2023</p>
                        </div>
                        <h1 className={a.btn_text}>Подробнее</h1>
                    </div>
                </div>

                <div className={a.box}>
                    <div className={a.img_box}>
                        <img src={two} className={a.img}/>
                    </div>
                    <h1 className={a.title}>Чувством сытости управляет кишечник?</h1>
                    <p className={a.text}>Для того чтобы поддерживать стабильный вес в течение длительного времени..</p>

                    <div className={a.minibox}>
                        <div className={a.date_box}>
                            <img src={date} className={a.date_img}/>
                            <p className={a.date}>22.03.2023</p>
                        </div>
                        <h1 className={a.btn_text}>Подробнее</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Diet
