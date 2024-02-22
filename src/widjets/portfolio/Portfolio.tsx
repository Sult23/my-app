import vectorLeft from '../../assets/img/icons/vector-left.svg'
import vectorRight from '../../assets/img/icons/vector-right.svg'
import { useTranslation } from 'react-i18next'
import { useScroll } from '../../utils/ScrollContext'
import style from './Portfolio.module.scss'
import { FC, useState } from 'react'
import clsx from 'clsx'
import Sliders from '../../components/slider/Slider'

const Portfolio: FC = () => {
  const { t } = useTranslation()
  const { scroll, isVisible } = useScroll()
  const [step, setStep] = useState(1)
  const handleStepPrev = () => {
    if (step > 1) setStep(step - 1)
  }
  const handleStepNext = () => {
    if (step < 4) setStep(step + 1)
  }

  return (
    <>
      {scroll <= 3500 ? null : (
        <div className={style.portfolio}>
          <h1 className="title">{t('portfolio.title')}</h1>
          <h4 className="subtitle">{t('portfolio.subtitle')}</h4>
          <Sliders step={step} />
          <div className={style.box}>
            <img
              src={vectorLeft}
              className={style.vector__left}
              onClick={handleStepPrev}
            />
            <ul className={style.dots}>
              <li
                onClick={() => setStep(1)}
                className={clsx({
                  [style.dots__item]: true,
                  [style.active]: step === 1,
                })}
              ></li>
              <li
                onClick={() => setStep(2)}
                className={clsx({
                  [style.dots__item]: true,
                  [style.active]: step === 2,
                })}
              ></li>
              <li
                onClick={() => setStep(3)}
                className={clsx({
                  [style.dots__item]: true,
                  [style.active]: step === 3,
                })}
              ></li>
              <li
                onClick={() => setStep(4)}
                className={clsx({
                  [style.dots__item]: true,
                  [style.active]: step === 4,
                })}
              ></li>
            </ul>
            <img
              src={vectorRight}
              className={style.vector__right}
              onClick={handleStepNext}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
