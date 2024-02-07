import style from './Header.module.scss'
import logo from '../../assets/img/icons/logo-icon.svg'
const Header = () => {
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
              <li className={style.nav__item}>О нас</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>Контакты</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>Команда</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>Услуги</li>
            </a>
            <a href="#">
              <li className={style.nav__item}>Портфолио</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
