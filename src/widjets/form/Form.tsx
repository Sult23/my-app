import style from './Form.module.scss'
import bg from '../../assets/img/form-bg.png'
import person from '../../assets/img/icons/form-person.svg'
import bag from '../../assets/img/icons/form-bag.svg'
import phone from '../../assets/img/icons/form-phone.svg'
import mail from '../../assets/img/icons/form-mail.svg'
import arrow from '../../assets/img/icons/arrow-right.svg'
import { useTranslation } from 'react-i18next'
import { useScroll } from '../../utils/ScrollContext'

const Form = () => {
  const { t } = useTranslation()
  const { scroll } = useScroll()
  return (
    <>
      {scroll <= 4500 ? null : (
        <div className={style.lets}>
          <h1 className={style.title}>{t('form.title')}</h1>
          <h4 className="subtitle">{t('form.subtitle')}</h4>
          <div className={style.inner}>
            <div className={style.form}>
              <h4 className={style.subtitle}>{t('form.contacts')}</h4>
              <div className={style.box}>
                <img src={person} />
                <input
                  placeholder={`${t('form.name')}`}
                  className={style.input}
                />
              </div>
              <div className={style.box}>
                <img src={bag} />
                <input
                  placeholder={`${t('form.company')}`}
                  className={style.input}
                />
              </div>
              <div className={style.box}>
                <img src={phone} />
                <input
                  placeholder={`${t('form.phone')}`}
                  className={style.input}
                />
              </div>
              <div className={style.box}>
                <img src={mail} />
                <input
                  placeholder={`${t('form.mail')}`}
                  className={style.input}
                />
              </div>
              <a href="#" className={style.link}>
                {`${t('form.btn')}`}
                <img src={arrow} className={style.icon} />
              </a>
            </div>
            <img src={bg} className={style.img} />
          </div>
        </div>
      )}
    </>
  )
}

export default Form
