import style from './Responsibilities.module.scss'
import strategy from '../../assets/img/strategy-bg.png'
import grow from '../../assets/img/grow-bg.png'
import development from '../../assets/img/development-bg.png'
import arrow from '../../assets/img/icons/arrow-right.svg'
import { useTranslation } from 'react-i18next'
import { useScroll } from '../../utils/ScrollContext'

const Responsibilities = () => {
  const { scroll } = useScroll()
  const { t } = useTranslation()
  const boxData = [
    {
      title: `${t('responses.strategy')}`,
      text: `${t('responses.strategy_text')}`,
      img: strategy,
    },
    {
      title: `${t('responses.grow')}`,
      text: `${t('responses.grow_text')}`,
      img: grow,
    },
    {
      title: `${t('responses.development')}`,
      text: `${t('responses.development_text')}`,
      img: development,
    },
  ]

  return (
    <>
      {scroll <= 1160 ? null : (
        <div className={style.resp}>
          <h1 className="title">{t('responses.title')}</h1>
          <h4 className="subtitle">{t('responses.subtitle')}</h4>
          {boxData.map((box) => (
            <div className={style.inner} key={box.title}>
              <img src={`${box.img}`} className={style.img} />
              <h2 className={style.title}>{box.title}</h2>
              <p className={style.text}>{box.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Responsibilities
