import demix from '../../assets/img/portfolio-bg.png'
import arrow from '../../assets/img/icons/arrow-right.svg'
import style from './Slider.module.scss'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { FC } from 'react'
// import Slider from 'react-slick'

interface ISlider {
  step: number
}

const Slider: FC<ISlider> = (props) => {
  const { t } = useTranslation()
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const sliderData = [
    {
      id: 1,
      img: demix,
      text: `${t('portfolio.text')}`,
      comment: `${t('portfolio.content')}`,
    },
    {
      id: 2,
      img: demix,
      text: `${t('portfolio.text')}`,
      comment: `${t('portfolio.content')}`,
    },
    {
      id: 3,
      img: demix,
      text: `${t('portfolio.text')}`,
      comment: `${t('portfolio.content')}`,
    },
    {
      id: 4,
      img: demix,
      text: `${t('portfolio.text')}`,
      comment: `${t('portfolio.content')}`,
    },
  ]
  const portfolioData = [
    { title: 'НА 24%', text: `${t('portfolio.box1')}` },
    { title: 'НА 47%', text: `${t('portfolio.box2')}` },
    { title: 'НА 33%', text: `${t('portfolio.box3')}` },
    { title: 'НА 100%', text: `${t('portfolio.box4')}` },
  ]
  return (
    <>
      {/* <Slider {...settings}> */}
      {sliderData.map((slider) => (
        <div
          key={slider.id}
          className={clsx({
            [style.slider]: true,
            [style.active]: props.step === slider.id,
          })}
        >
          <div className={style.inner}>
            <img src={slider.img} className={style.img} />
            <p className={style.adaptive__text}>{slider.text}</p>
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
          <p className={style.text}>{slider.comment}</p>
        </div>
      ))}
      {/* </Slider> */}
    </>
  )
}

export default Slider
