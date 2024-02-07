import style from './Responsibilities.module.scss'
import strategy from '../../assets/img/strategy-bg.png'
import grow from '../../assets/img/grow-bg.png'
import development from '../../assets/img/development-bg.png'
import arrow from '../../assets/img/icons/arrow-right.svg'

const Responsibilities = () => {
  const boxData = [
    {
      title: 'СТРАТЕГИЯ',
      text: 'Поможем составить бизнес-план, разработаем стратегию развития продукта и превратим цели в реальность.',
      img: strategy,
    },
    {
      title: 'РОСТ',
      text: 'Проведем исследования и анализ Вашего продукта в digital, обновим Ваши web-ресурсы и скорректируем маркетинговую стратегию для увеличения эффективности бизнеса.',
      img: grow,
    },
    {
      title: 'Разработка',
      text: 'Разработаем продающий сайты или эффективное web-приложение, поможем автоматизировать бизнес-процессы и сделать интеграции с другими информационными системами.',
      img: development,
    },
  ]

  return (
    <div>
      <h1 className="title">Что мы делаем</h1>
      <h4 className="subtitle">
        Предоставляем полный спектр решений для Вашего бизнеса в digital "под
        ключ"
      </h4>
      {boxData.map((box) => (
        <div className={style.inner} key={box.title}>
          <img src={`${box.img}`} className={style.img} />
          <h2 className={style.title}>{box.title}</h2>
          <p className={style.text}>{box.text}</p>
          <a href="#" className={style.link}>
            Узнать больше
            <img src={arrow} className={style.icon} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Responsibilities
