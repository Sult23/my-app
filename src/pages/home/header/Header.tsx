import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import clsx from 'clsx'
import logo from '../../../assets/img/icons/logo-icon.svg'
import close from '../../../assets/img/icons/close-icon.svg'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <div className={style.header}>
      <div className={style.inner}>
        <div className={style.box}>
          <Link to="/" className={style.logo}>
            <img src={logo} className={style.logo__img} />
            Xeno Xetrum
          </Link>
          <ul
            className={clsx({
              [style.nav]: true,
              [style.active]: open === true,
            })}
          >
            <img
              src={close}
              className={style.close}
              onClick={() => setOpen(false)}
            />
            <Link to="#">
              <li className={style.nav__item}>{t('main.about')}</li>
            </Link>
            <Link to="#">
              <li className={style.nav__item}>{t('main.contacts')}</li>
            </Link>
            <Link to="#">
              <li className={style.nav__item}>{t('main.team')}</li>
            </Link>
            <Link to="/services">
              <li className={style.nav__item}>{t('main.services')}</li>
            </Link>
            <Link to="#">
              <li className={style.nav__item}>{t('main.portfolio')}</li>
            </Link>
          </ul>
          <div className={style.burger} onClick={() => setOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
