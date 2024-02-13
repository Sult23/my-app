import style from './Header.module.scss'
import logo from '../../assets/img/icons/logo-icon.svg'
import { useTranslation } from 'react-i18next'
const Header = () => {
  const { t } = useTranslation()

  return (
    <div className={style.header}>
      <div className={style.inner}>
        <div className={style.box}>
          <a className={style.logo}>
            <img src={logo} className={style.logo__img} />
            Xeno Xetrum
          </a>
          <ul className={style.nav}>
            <a href="#">
              <li className={style.nav__item}>{t('main.about')}</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>{t('main.contacts')}</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>{t('main.team')}</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>{t('main.services')}</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>{t('main.portfolio')}</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
