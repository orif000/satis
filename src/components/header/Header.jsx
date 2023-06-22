import React, { useState, useEffect } from 'react'
import a from './Header.module.css'
import burger from './burger.svg'
import statis from './statis.png'
import { Button, Modal, Offcanvas } from 'react-bootstrap'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import tel from './tel.svg'
import gps from './gps.svg'
import mail from './email.svg'

function Header() {
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get("https://admin.satis-fit.uz/api/menu").then((resp)=>{
            let allResp=resp.data.data
            setstate(allResp)
        })
    }, [])
delete state[0]
delete state[5]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showtwo, setShowtwo] = useState(false);

  const handleClosetwo = () => setShowtwo(false);
  const handleShowtwo = () => setShowtwo(true);
  return (
    <div className='container'>
      <div className={a.header}>
        <div className={a.box}>

            <Button id={a.btn} onClick={handleShow}>
              <img src={burger} alt="" className={a.burger}/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton id={a.o_head} >
                </Offcanvas.Header>
                <Offcanvas.Body id={a.body}>
                <div className={a.of_box}>
                {state.map((item, index)=>{
                return(
                    <NavLink to={item.link} key={index} className={a.link_two}>{item.title}</NavLink>
                    )
                })}
                </div>
                <div className={a.contact}>
                    <img src={tel} className={a.contact_img}/>
                    <h1  className={a.contact_text}>+998 90 115 13 33</h1>
                </div>
                <div className={a.contact}>
                    <img src={mail} className={a.contact_img}/>
                    <h1  className={a.contact_text}>info@sightex.uz</h1>
                </div>
                <div className={a.contact}>
                    <img src={gps} className={a.contact_img}/>
                    <h1  className={a.contact_text}>Массив Ялангач 119А, Ташкент</h1>
                </div>
                </Offcanvas.Body>
            </Offcanvas>

            <NavLink to="/"><img src={statis}  className={a.img}/></NavLink>
        </div>

        <div className={a.menu}>
            {state.map((item, index)=>{
                return(
                    <NavLink to={item.link} key={index} className={a.link}>{item.title}</NavLink>
                )
            })}
        </div>

        <Button onClick={handleShowtwo} id={a.btn_two} ><a className={a.uzum} href="">Купить онлайн</a></Button>

        <Modal show={showtwo} onHide={handleClosetwo}>
            <Modal.Header closeButton>
                <Modal.Title><h1 className={a.m_title}>Выбрать</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body><div className={a.m_box}><a target='blank' href="https://uzum.uz/ru/product/Kapsuly-dlya-umenshenie-295582" className={a.m_link}>Uzum Market</a></div></Modal.Body>
        </Modal>

      </div>
    </div>
  )
}

export default Header
