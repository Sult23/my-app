import arrow from '../../assets/img/icons/arrow-right.svg'
import style from './Services.module.scss'

const Services = () => {
  const servicesData = [
    {
      number: '01',
      title: 'Разработка веб-сайтов и мобильных приложений',
      link: '#',
    },
    {
      number: '02',
      title: 'Оптимизация пользовательского интерфейса',
      link: '#',
    },
    {
      number: '03',
      title: 'Графический дизайн и иллюстрации',
      link: '#',
    },
    {
      number: '04',
      title: 'Администрирование и сопровождение',
      link: '#',
    },
  ]

  return (
    <div>
      <h1 className="title">Услуги</h1>
      <h4 className="subtitle">
        Мы предлагаем широкий спектр услуг по веб-дизайну, включая:
      </h4>
      <div className={style.inner}>
        {servicesData.map((service) => (
          <div className={style.box} key={service.title}>
            <h4 className={style.title}>{service.number}</h4>
            <p className={style.text}>{service.title}</p>
            <a href={service.link} className={style.link}>
              Выбрать
              <img src={arrow} className={style.icon} />
            </a>
          </div>
        ))}
      </div>
      <a href="#" className={style.link}>
        Показать все услуги
        <img src={arrow} className={style.icon} />
      </a>
    </div>
  )
}

export default Services
