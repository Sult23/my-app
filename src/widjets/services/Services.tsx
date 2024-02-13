import { useTranslation } from 'react-i18next'
import arrow from '../../assets/img/icons/arrow-right.svg'
import style from './Services.module.scss'

const Services = () => {
  const { t } = useTranslation()
  const servicesData = [
    {
      number: '01',
      title: `${t('services.1block')}`,
      link: '#',
    },
    {
      number: '02',
      title: `${t('services.2block')}`,
      link: '#',
    },
    {
      number: '03',
      title: `${t('services.3block')}`,
      link: '#',
    },
    {
      number: '04',
      title: `${t('services.4block')}`,
      link: '#',
    },
  ]

  return (
    <div>
      <h1 className="title">{t('services.title')}</h1>
      <h4 className="subtitle">{t('services.subtitle')}</h4>
      <div className={style.inner}>
        {servicesData.map((service) => (
          <div className={style.box} key={service.title}>
            <h4 className={style.title}>{service.number}</h4>
            <p className={style.text}>{service.title}</p>
            <a href={service.link} className={style.link}>
              {t('services.link')}
              <img src={arrow} className={style.icon} />
            </a>
          </div>
        ))}
      </div>
      <a href="#" className={style.link}>
        {t('services.btn')}
        <img src={arrow} className={style.icon} />
      </a>
    </div>
  )
}

export default Services
