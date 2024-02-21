import demix from '../../assets/img/portfolio-bg.png'
import style from './Portfolio.module.scss'
import arrow from '../../assets/img/icons/arrow-right.svg'
import vectorLeft from '../../assets/img/icons/vector-left.svg'
import vectorRight from '../../assets/img/icons/vector-right.svg'
import { useTranslation } from 'react-i18next'
import { useScroll } from '../../utils/ScrollContext'

const Portfolio = () => {
  const { t } = useTranslation()
  const { scroll } = useScroll()
  const portfolioData = [
    { title: 'НА 24%', text: `${t('portfolio.box1')}` },
    { title: 'НА 47%', text: `${t('portfolio.box2')}` },
    { title: 'НА 33%', text: `${t('portfolio.box3')}` },
    { title: 'НА 100%', text: `${t('portfolio.box4')}` },
  ]

  return (
    <>
      {scroll <= 3500 ? null : (
        <div className={style.portfolio}>
          <h1 className="title">{t('portfolio.title')}</h1>
          <h4 className="subtitle">{t('portfolio.subtitle')}</h4>
          <div className={style.slider}>
            <div className={style.inner}>
              <img src={demix} className={style.img} />
              <p className={style.adaptive__text}>{t('portfolio.text')}</p>
              <div className={style.inner__content}>
                {portfolioData.map((el) => (
                  <div key={el.text}>
                    <h2 className={style.title}>{el.title}</h2>
                    <p className={style.text}>{el.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className={style.text}>{t('portfolio.text')}</p>
            <a href="#" className={style.link}>
              {t('portfolio.btn')} <img src={arrow} className={style.icon} />
            </a>
            <h2 className={style.title}>{t('portfolio.comment')}</h2>
            <p className={style.text}>{t('portfolio.content')}</p>
          </div>
          <div className={style.box}>
            <img src={vectorLeft} className={style.vector__left} />
            <ul className={style.dots}>
              <li className={`${style.dots__item} && ${style.active}`}></li>
              <li className={style.dots__item}></li>
              <li className={style.dots__item}></li>
              <li className={style.dots__item}></li>
            </ul>
            <img src={vectorRight} className={style.vector__right} />
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
