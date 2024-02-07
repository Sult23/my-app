import style from './Form.module.scss'
import bg from '../../assets/img/form-bg.png'
import person from '../../assets/img/icons/form-person.svg'
import bag from '../../assets/img/icons/form-bag.svg'
import phone from '../../assets/img/icons/form-phone.svg'
import mail from '../../assets/img/icons/form-mail.svg'
import arrow from '../../assets/img/icons/arrow-right.svg'

const Form = () => {
  return (
    <div>
      <h1 className={style.title}>Давайте работать вместе</h1>
      <h4 className="subtitle">
        Разработаем план и добьемся реального эффекта. Давайте сделаем это
        масштабно!
      </h4>
      <div className={style.inner}>
        <div className={style.form}>
          <h4 className={style.subtitle}>Ваши контакты</h4>
          <div className={style.box}>
            <img src={person} />
            <input placeholder="Имя" className={style.input} />
          </div>
          <div className={style.box}>
            <img src={bag} />
            <input placeholder="Компания" className={style.input} />
          </div>
          <div className={style.box}>
            <img src={phone} />
            <input placeholder="Номер телефона" className={style.input} />
          </div>
          <div className={style.box}>
            <img src={mail} />
            <input placeholder="Электронная почта" className={style.input} />
          </div>
          <a href="#" className={style.link}>
            Отправить
            <img src={arrow} className={style.icon} />
          </a>
        </div>
        <img src={bg} className={style.img} />
      </div>
    </div>
  )
}

export default Form
