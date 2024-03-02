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
        <h4
          className={clsx({
            [style.subtitle]: true,
            [style.subtitle__active]: isOpen === true,
          })}
        >
          {year}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff73"
          className={clsx({
            [style.icon]: true,
            [style.icon__reverse]: isOpen === true,
          })}
        >
          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
        </svg>
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
