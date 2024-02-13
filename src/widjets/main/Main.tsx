import Header from '../../components/header/Header'
import style from './Main.module.scss'
import arrow from '../../assets/img/icons/arrow-right-black.svg'
import figure from '../../assets/img/header-img.png'
import person from '../../assets/img/icons/person-icon.svg'
import LocaleSwitcher from '../../components/ui/localeSwitcher/LocaleSwitcher'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t } = useTranslation()
  return (
    <div className={style.inner}>
      <div className="container">
        <Header />
      </div>
      <img src={figure} className={style.img} />
      <div className={style.content}>
        <span className={style.border1}></span>
        <span className={style.border2}></span>
        <span className={style.border3}></span>
        <span className={style.border4}></span>
        <LocaleSwitcher />
        <h1 className={style.title}>
          <span>Xeno</span>
          <br />
          Xetrum
        </h1>
        <div className={style.box}>
          <a className={style.link} href="#">
            {t('main.calculate')} <img src={arrow} className={style.icon} />
          </a>
          <a className={style.link__2} href="#">
            {t('main.cabinet')}
            <img src={person} className={style.icon} />
          </a>
        </div>
        <p className={style.text}>{t('main.text')}</p>
      </div>
    </div>
  )
}

export default Main
