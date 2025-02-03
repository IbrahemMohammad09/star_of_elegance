import Title from "../components/sharedComponents/Title"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import HeroAbout from "../sections/HeroAbout"
import MainTitle from "../components/sharedComponents/MainTitle"
const About =() =>{
    return(
        <div>
            <MainTitle title={"About us"} />
            <Navbar/>
            <Title/>
            <HeroAbout/>
            <Footer/>
        </div>
    )
}
export default About