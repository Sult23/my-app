import style from './About.module.scss'
import bg from '../../assets/img/about-bg.png'
import logo from '../../assets/img/about-logo.png'
import Popup from '../../components/popup/Popup'

const About = () => {
  const popupData = [
    {
      id: 1,
      year: '2023-...',
      text: `Xeno Xetrum  работает на digital-рынке с 2018 года. Мы начали с SEO-продвижения сайтов и контекстной рекламы, а сегодня разрабатываем и внедряем комплексные решения интернет-маркетинга, в том числе digital-стратегии.			Работать с таким разнообразием тематик и инструментов, неизменно достигая результата, способна только сильная команда. Штат агентства насчитывает более 700 сотрудников, в числе которых оптимизаторы, программисты, специалисты в области UX, SMM и управления репутацией, профессиональные редакторы.`,
    },
    {
      id: 2,
      year: '2023-2022',
      text: 'Xeno Xetrum  работает на digital-рынке с 2018 года. Мы начали с SEO-продвижения сайтов и контекстной рекламы, а сегодня разрабатываем и внедряем комплексные решения интернет-маркетинга, в том числе digital-стратегии.',
    },
    {
      id: 3,
      year: '2022-2021',
      text: 'Xeno Xetrum  работает на digital-рынке с 2018 года. Мы начали с SEO-продвижения сайтов и контекстной рекламы, а сегодня разрабатываем и внедряем комплексные решения интернет-маркетинга, в том числе digital-стратегии.',
    },
  ]

  return (
    <div>
      <h1 className="title">О нас</h1>
      <h4 className="subtitle">
        Мы строим качественно дизайн веб-сайтов и приложений более 5 лет
      </h4>
      <div className={style.inner}>
        <img src={bg} className={style.img} />
        <div className={style.box}>
          <div className={style.inner}>
            <div className={style.inner__content}>
              <div className={style.box}>
                <h2 className={style.title}>60+</h2>
                <p className={style.text}>Довольных клиентов</p>
              </div>
              <div className={style.box}>
                <h2 className={style.title}>90+</h2>
                <p className={style.text}>Довольных клиентов</p>
              </div>
              <div className={style.box}>
                <h2 className={style.title}>12</h2>
                <p className={style.text}>Лучших специалистов</p>
              </div>
            </div>
            <img src={logo} />
          </div>
          {popupData.map((popup) => (
            <Popup year={popup.year} text={popup.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
