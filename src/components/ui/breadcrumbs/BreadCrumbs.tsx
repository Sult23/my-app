import { FC } from 'react'
import style from './BreadCrumbs.module.scss'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs: FC = () => {
  const location = useLocation()
  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`
      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className={style.breadcrumbs}>
      <Link to="/" className={style.link}>
        Главная
      </Link>
      <span className={style.dot}>/</span>
      <div className={style.active}>{crumbs}</div>
    </div>
  )
}

export default Breadcrumbs
