import { FC, useState } from 'react'
import style from './Popup.module.scss'
import clsx from 'clsx'

interface IPopup {
  year: string
  text: string
}

const Popup: FC<IPopup> = ({ year, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={style.popup}>
      <div className={style.popup__box} onClick={() => setIsOpen(!isOpen)}>
        <h4 className={style.subtitle}>{year}</h4>
        <span className={style.dot}></span>
      </div>
      <p
        className={clsx({
          [style.popup__text]: true,
          [style.active]: isOpen === true,
        })}
      >
        {text}
      </p>
    </div>
  )
}

export default Popup
