import NavBar from "./NavBar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Products"
import WhyChooseGt from "./WhyChooseGt"
import Ecosystem from "./Ecosystem"
import Faqs from "./Faqs"
import Contact from "./Contact"
import Footer from "./Footer"
const Homepage = () => {
  return (
    <div>
    <NavBar/>
    <div className="w-11/12 mx-auto p-1">
      <Hero/>
      <About/>
      <Projects/>
      <WhyChooseGt/>
      <Ecosystem/>
      <Faqs/>
      <Contact/>
    </div>
    <Footer/>
    </div>
  )
}

export default Homepage