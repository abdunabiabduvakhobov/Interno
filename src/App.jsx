
import { About, Articles, Bedroom, BraendImg, Just, Main, PlanProject, Success, Wanna } from "./components"
import { Header } from "./components/header"
import { Projects } from "./components/braend-img/projects"
import { News } from "./components/braend-img/News.JSX"
import { Footer } from "./components/footer"




function App() {



  return (
    <>
      <Header />
      <main>
        <Main />
        <PlanProject />
        <About />
        <Just />
        <BraendImg />
        <Projects />
        <News />
        <Success />
        <Articles />
        <Wanna />
        <Bedroom />
      </main>
      <Footer />
    </>
  )
}

export default App
