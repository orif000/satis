import React from 'react'
import a from './Sec.module.css'
import { Button } from 'react-bootstrap'
import Anim from './anim/Anim'

function Sec() {
  return (
    <div className={a.sec}>
        <div className="container">
            <div className={a.father}>

                <div className={a.box}>
                    <h1 className={a.title}>Быть стройной и здоровой не модно, это – необходимость</h1>
                    <p className={a.text}>SATIS - первый корректор пищевого поведения</p>
                    <Button id={a.btn}><h1 className={a.btn_text}>Подробнее</h1></Button>
                </div>

                <Anim/>
            </div>
        </div>
    </div>
  )
}

export default Sec
