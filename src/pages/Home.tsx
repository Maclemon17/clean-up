import GetQuote from "../components/GetQuote"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OurServices from "../components/OurServices"
import OurTeam from "../components/OurTeam"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OurServices />
            <WhyChooseUs />
            <OurTeam />
            <GetQuote />
            <Testimonials />
        </>
    )
}

export default Home