import React from 'react'
import a from './Footer.module.css'
import satis from './satis.png'
import mail from './mail.png'
import tel from './tel.png'
import gps from './gps.png'
import telegram from './telegram.svg'
import insta from './insta.svg'
import youtube from './youtube.svg'

function Footer() {
  return (
    <div className={a.footer}>
      <div className="container">
        <div className={a.img_box}><img src={satis}  className={a.satis}/></div>

        <div className={a.chiziq}></div>

        <div className={a.menu}>
            <h1 className={a.link}>Главная страница</h1>
            <h1 className={a.link}>Спорт</h1>
            <h1 className={a.link}>Диета</h1>
            <h1 className={a.link}>О Satis</h1>
            <h1 className={a.link}>Мероприятия</h1>
            <h1 className={a.link}>Интересные статьи</h1>
            <h1 className={a.link}>Контакты</h1>
        </div>

        <div className={a.chiziq}></div>

        <div className={a.contact}>
            <div className={a.box}>
                <img src={tel} className={a.img}/>
                <div className={a.chiziq_two}></div>
                <h1 className={a.text}>+998 90 115 13 33</h1>
            </div>
            <div className={a.box}>
                <img src={mail} className={a.img}/>
                <div className={a.chiziq_two}></div>
                <h1 className={a.text}>info@sightex.uz</h1>
            </div>
            <div className={a.box}>
                <img src={gps} className={a.img}/>
                <div className={a.chiziq_two}></div>
                <h1 className={a.text}>Массив Ялангач 119А, Ташкент</h1>
            </div>
        </div>
        <div className={a.chiziq}></div>

        <div className={a.bottom}>
            <h1 className={a.more}>Все права защищены</h1>

            <div className={a.minibox}>
                <img src={telegram} className={a.svg}/>
                <img src={insta} className={a.svg}/>
                <img src={youtube} className={a.svg}/>
            </div>

            <h1 className={a.more}>© Sightex LLC 2022</h1>

        </div>
      </div>
    </div>
  )
}

export default Footer
