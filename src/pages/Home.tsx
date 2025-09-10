import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OurServices from "../components/OurServices"
import OurTeam from "../components/OurTeam"
import WhyChooseUs from "../components/WhyChooseUs"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OurServices />
            <WhyChooseUs />
            <OurTeam />

        </>
    )
}

export default Home