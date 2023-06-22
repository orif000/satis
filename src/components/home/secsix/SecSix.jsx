import React, { useState } from 'react'
import a from './SecSix.module.css'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

function SecSix() {
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
    <div className={a.sec}>
      <div className="container">
        <Form onSubmit={send} className={a.form}>
            <h1 className={a.title}>Оставить отзыв</h1>
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
      </div>
    </div>
  )
}

export default SecSix
