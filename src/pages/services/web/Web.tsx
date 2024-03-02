import style from './Web.module.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Web = () => {
  const webData = [
    { text: 'Cервис / SaaS-решение', link: '#' },
    { text: 'Сайт-каталог', link: '#' },
    { text: 'Интернет-магазин', link: '#' },
    { text: 'Корпоративный сайт', link: '#' },
    { text: 'Сайт - визитка', link: '#' },
    { text: 'Лендинг', link: '#' },
  ]

  return (
    <>
      <h1 className="title">Разработка веб-сайтов и мобильных приложений</h1>
      <h4 className="subtitle">
        Мы предлагаем полный цикл разработки сайтов любой сложности. Наша
        команда профессионалов создаст уникальный дизайн и функционал,
        подходящий именно для вашего бизнеса.
      </h4>
      <div className={style.content}>
        {webData.map((el) => (
          <Link to={el.link} className={style.box} key={el.text}>
            <p className={style.text}>{el.text}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="120"
              height="120"
              fill="rgba(255,255,255,1)"
              className={clsx({
                ['ri-arrow-right-s-line']: true,
                [style.icon]: true,
              })}
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Web
