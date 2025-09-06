import { FaPlayCircle } from "react-icons/fa"


const Hero = () => {
    return (
        <section className="px-10 py-10 lg:px-20 text-white bg-black/10 bg-[url('/src\assets\images\hero.jpg')] bg-cover bg-no-repeat bg-blend-overlay w-screen h-screen" id="hero">
            <div className="translate-y-1/3 md:translate-y-1/2 max-w-2xl flex flex-col gap-8 z-10">
                <div className="bg-gray-300 text-black py-4 px-6 rounded-full font-semibold shadow-lg w-fit">Professional Cleaning Services</div>

                <h1 className="text-3xl md:text-6xl font-bold">Effortless Cleaning, <br /> Exceptional Results</h1>

                <p className="font-sm text-sm md:text-xl max-w-10/12">From homes to offices, we deliver spotless results with precision and care—so you can focus on what matters most.</p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-left sm:text-left">
                    <button className="bg-amber-300 text-black py-4 px-6 rounded-full font-semibold shadow-md cursor-pointer">Book Your Cleaning</button>

                    <button className="bg-transparent py-4 px-6 rounded-full font-semibold shadow-sm flex items-center gap-1.5 ring ring-transparent hover:ring-amber-300 cursor-pointer transition">
                        <FaPlayCircle size={20} className="fill-amber-300" /> Watch Demo
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero