import { ChangeEvent, useState } from 'react'
import style from './LocaleSwitcher.module.scss'
import i18n from '../../../i18n'

const LocaleSwitcher = () => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <select className={style.select} value={language} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="sr">Serbian</option>
    </select>
  )
}

export default LocaleSwitcher
