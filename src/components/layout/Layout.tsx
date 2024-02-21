import About from '../../widjets/about/About'
import Form from '../../widjets/form/Form'
import Main from '../../widjets/main/Main'
import Portfolio from '../../widjets/portfolio/Portfolio'
import Responsibilities from '../../widjets/responsibilities/Responsibilities'
import Services from '../../widjets/services/Services'
import style from './Layout.module.scss'

const Layout = () => {
  return (
    <>
      <div className={style.bg}>
        <div className="wrapper">
          <Main />
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <About />
          <Responsibilities />
          <Services />
          <Portfolio />
          <Form />
        </div>
      </div>
    </>
  )
}

export default Layout
