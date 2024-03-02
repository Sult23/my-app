import style from './Services.module.scss'
import Administration from './administration/Administration'
import Design from './design/Design'
import Header from './header/Header'
import Optimization from './optimization/Optmization'
import Web from './web/Web'

const Services = () => {
  return (
    <>
      <div className={style.bg}>
        <div className="wrapper">
          <Header />
          <h1 className={style.title}>Услуги</h1>
          <div className="container">
            <Web />
            <Optimization />
            <Design />
            <Administration />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
