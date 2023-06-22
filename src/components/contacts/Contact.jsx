import React, { useState } from 'react'
import a from './Contact.module.css'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import img from './back.png'
import mail from './email.svg'
import tel from './tel.svg'
import gps from './gps.svg'

function Contact() {
    const [state, setstate] = useState({
        name:"",
        email:"",
        message:"",
    });

    const inVal=(event)=>{
        let valInput = event.target.value;
        let nameInput = event.target.name;
        setstate((old)=>({...old,[nameInput] : valInput}))
    }
    const send = (e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('name',state.name)
        formData.append('email',state.phone)
        formData.append('message',state.message)
        axios.post("https://admin.satis-fit.uz/api/registration",
        formData,
        {headers:{'Content-Type': "multipart/form-data"}
    }).then((resp)=>{
        console.log(resp);
    })
    }
  return (
    <div className={a.contact}>
        <div className={a.back_box}><img src={img} className={a.back}/></div>
        <div className="container">
        <div className={a.father}>
            <Form onSubmit={send} className={a.form}>
            <h1 className={a.title}>Стать партнером</h1>
            <p className={a.text}>Заполните пробелы ниже.</p>

            <div className={a.box}>
                <Form.Group className={a.group}>
                    <Form.Label id={a.label} className={a.label}><span>*</span> Имя:</Form.Label>
                    <Form.Control
                    placeholder='Напишите'
                    id={a.one} 
                    type='text' 
                    required 
                    name='name' 
                    onChange={inVal}
                    />
                 </Form.Group> 
                 <Form.Group className={a.group}>
                    <Form.Label id={a.label}><span>*</span> Номер телефона или электронная почта:</Form.Label>
                    <Form.Control
                    placeholder='Напишите'
                    id={a.one} 
                    type='text' 
                    required 
                    name='email' 
                    onChange={inVal}
                    />
                 </Form.Group> 
            </div>   
                <Form.Group>
                    <Form.Label id={a.label}>Текст вопроса или запроса:</Form.Label>
                    <Form.Control
                    placeholder='Напишите'
                    as='textarea' id={a.two} name='message' onChange={inVal}/>
                    
                    <div className={a.check}><Form.Check required label='Я согласен с условиями использования' /></div>
                 </Form.Group> 

                 <Form.Group>
                    <Button type='sumbit' variant='light' id={a.btn} >
                        Отправить
                    </Button>
                </Form.Group>
        </Form>

        <div className={a.contact_box}>
            <h1 className={a.title}>Связь</h1>
            <p className={a.text}>Контактная информация</p>

            <div className={a.info_box}>
                <img src={tel} className={a.svg}/>

                <div>
                    <h1 className={a.info_title}>Номер телефона:</h1>
                    <p className={a.info_text}>+998 90 115 13 33</p>
                </div>
            </div>

            <div className={a.info_box}>
                <img src={mail} className={a.svg}/>

                <div>
                    <h1 className={a.info_title}>Адрес электронной почты:</h1>
                    <p className={a.info_text}>info@sightex.uz</p>
                </div>
            </div>

            <div className={a.info_box}>
                <img src={gps} className={a.svg}/>

                <div>
                    <h1 className={a.info_title}>Адрес:</h1>
                    <p className={a.info_text}>Массив Ялангач 119А, Ташкент</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Contact