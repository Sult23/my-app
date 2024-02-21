import React from 'react'
import style from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__content}>
        <div className={style.preloader__first}></div>
        <div className={style.preloader__second}></div>
        <div className={style.preloader__third}></div>
      </div>
    </div>
  )
}

export default Loader
