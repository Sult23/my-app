import demix from '../../assets/img/portfolio-bg.png'
import style from './Portfolio.module.scss'
import arrow from '../../assets/img/icons/arrow-right.svg'
import vectorLeft from '../../assets/img/icons/vector-left.svg'
import vectorRight from '../../assets/img/icons/vector-right.svg'

const Portfolio = () => {
  const portfolioData = [
    { title: 'НА 24%', text: 'Повысилась продажа товаров' },
    { title: 'НА 47%', text: 'Повысилась конверсия в магазинах' },
    { title: 'НА 33%', text: 'Повысилась узнаваемость бренда' },
    { title: 'НА 100%', text: 'Клиенты оставлись довольны' },
  ]

  return (
    <div>
      <h1 className="title">Портфолио</h1>
      <h4 className="subtitle">Мы работали с такими брендами, как:</h4>
      <div className={style.slider}>
        <div className={style.inner}>
          <img src={demix} className={style.img} />
          <div className={style.inner__content}>
            {portfolioData.map((el) => (
              <div key={el.text}>
                <h2 className={style.title}>{el.title}</h2>
                <p className={style.text}>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p className={style.text}>
          Провели ребрендинг дизайна карточек технологий. Повысели узнаваемость
          бренда.
        </p>
        <a href="#" className={style.link}>
          Смотреть кейс полностью <img src={arrow} className={style.icon} />
        </a>
        <h2 className={style.title}>ОТЗЫВ</h2>
        <p className={style.text}>
          "Я недавно приобрел карточки для товаров от Demix и они превзошли все
          мои ожидания! Качество изготовления на высочайшем уровне, каждая
          карточка аккуратно и четко выполнена. Они стали настоящей находкой для
          моего бизнеса, облегчив процесс организации товаров и улучшив внешний
          вид. Благодаря карточкам от Demix, я смог легко управлять своими
          запасами, улучшить отчетность и повысить эффективность работы. Они
          просты в использовании и многофункциональны, что делает их идеальным
          выбором для предпринимателей, таких как я.
        </p>
        <p className={style.teext}>
          Я рекомендую карточки для товаров от Demix всем, кто ищет надежное и
          качественное решение для улучшения своего бизнеса!"
        </p>
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
  )
}

export default Portfolio
