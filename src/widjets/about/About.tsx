import style from './About.module.scss'
import bg from '../../assets/img/about-bg.png'
import logo from '../../assets/img/about-logo.png'
import Popup from '../../components/popup/Popup'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const popupData = [
    {
      id: 1,
      year: '2023-...',
      text: `${t('about.content')}`,
    },
    {
      id: 2,
      year: '2023-2022',
      text: `${t('about.content')}`,
    },
    {
      id: 3,
      year: '2022-2021',
      text: `${t('about.content')}`,
    },
  ]

  return (
    <div>
      <h1 className="title">{t('about.title')}</h1>
      <h4 className="subtitle">{t('about.subtitle')}</h4>
      <div className={style.inner}>
        <img src={bg} className={style.img} />
        <div className={style.box}>
          <div className={style.inner}>
            <div className={style.inner__content}>
              <div className={style.box}>
                <h2 className={style.title}>60+</h2>
                <p className={style.text}>{t('about.text1')}</p>
              </div>
              <div className={style.box}>
                <h2 className={style.title}>90+</h2>
                <p className={style.text}>{t('about.text2')}</p>
              </div>
              <div className={style.box}>
                <h2 className={style.title}>12</h2>
                <p className={style.text}>{t('about.text3')}</p>
              </div>
            </div>
            <img src={logo} className={style.logo} />
          </div>
          {popupData.map((popup) => (
            <Popup key={popup.id} year={popup.year} text={popup.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
