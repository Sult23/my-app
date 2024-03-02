import style from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/icons/logo-icon.svg'
import Breadcrumbs from '../../../components/ui/breadcrumbs/BreadCrumbs'
import close from '../../../assets/img/icons/close-icon.svg'
import LocaleSwitcher from '../../../components/ui/localeSwitcher/LocaleSwitcher'
import { useState } from 'react'
import clsx from 'clsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={style.header}>
      <div className={style.box}>
        <Link className={style.logo} to="/">
          <img src={logo} />
          <h4 className={style.logo__title}>Xeno Xetrum</h4>
        </Link>
        <ul
          className={clsx({
            [style.nav]: true,
            [style.active]: isOpen === true,
          })}
        >
          <img
            src={close}
            className={style.close}
            onClick={() => setIsOpen(false)}
          />
          <li className={style.nav__item}>
            <Link className={style.nav__link} to="">
              О нас
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link className={style.nav__link} to="">
              Контакты
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link className={style.nav__link} to="">
              Команда
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link className={style.nav__link} to="">
              Услуги
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link className={style.nav__link} to="">
              Портфолио
            </Link>
          </li>
        </ul>
      </div>
      <Breadcrumbs />
      <div className={style.locale}>
        <LocaleSwitcher />
      </div>
      <div className={style.burger} onClick={() => setIsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header
