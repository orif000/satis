import React, { useEffect, useState } from 'react'
import a from './About.module.css'
import axios from 'axios'

function About() {
    const [about, setabout] = useState([])
    useEffect(() => {
      axios.get("https://admin.satis-fit.uz/api/home/product_view").then((resp)=>{
        let allR=resp.data.data;
        setabout(allR)
      })
    }, [])
  return (
    <div className={a.about}>
      <div className='container'>
        <div className={a.father}>
            <div className={a.box}>
                <div className={a.minibox}>
                    <h1 className={a.title}>Satis - ваш помощник в снижении веса.</h1>

                    <h2 className={a.h}>Соблюдайте диету комфортно, без срывов и стресса</h2>

                    <p className={a.text}>В составе биологически активной добавки Satis, основной действующий компонент - гуаровая камедь.</p>
                    <p className={a.text}>Для удобства, мы поместили необходимую разовую дозировку продукта в капсулу и все, что вам нужно - это запить капсулу водой перед началом принятия пищи.</p>

                    <h2 className={a.h}>Как работает Satis?</h2>

                    <p className={a.text}>После того, как капсула, по пищеводу попадает в желудок, гуаровая камедь, высвобождаясь из капсулы, начинает активно заполнять пространтво желудка, тем самым, осталяя в 2-3 раза меньше свободного объема для пищи. Вы насыщаетесь меньшим количеством еды, при этом не устанавливаете никаких ограничений и исключений в рационе.</p>
                </div>

                <img src="https://admin.satis-fit.uz/uploads/product/1aede00aa781c1aebf275acfbf0be344.png" className={a.img}/>
            </div>

            <p className={a.p} dangerouslySetInnerHTML={{__html:about.composition}}></p>
        </div>
      </div>
    </div>
  )
}

export default About
