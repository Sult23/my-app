import About from './about/About'
import Form from './form/Form'
import Main from './main/Main'
import Portfolio from './portfolio/Portfolio'
import Responsibilities from './responsibilities/Responsibilities'
import style from './Home.module.scss'
import Service from './service/Service'

const Home = () => {
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
          <Service />
          <Portfolio />
          <Form />
        </div>
      </div>
    </>
  )
}

export default Home
