import proCleaners from '../assets/images/people-cleaning-office.jpg';

const GetQuote = () => {
    return (
        <section className="px-10 py-10 lg:px-20" id="get-quote">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-3">

                <div className="p-10 flex flex-col justify-between gap-8 lg:gap-24 bg-gray-100 rounded-4xl shadow-2xl group">
                    <h2 className="text-2xl md:text-4xl font-bold">Get a Free Quote</h2>

                    <div className="">
                        <h3 className="font-semibold text-sm md:text-2xl">PROFESSIONAL • AFFORDABLE • RELIABLE</h3>

                        <p className="font-medium text-xl md:text-4xl mt-4 mb-4">Spotless Living Starts Here</p>

                        <button className="bg-white text-lg md:text-xl font-medium py-4 px-6 rounded-4xl shadow-2xl cursor-pointer">Get Free Quote</button>
                    </div>


                </div>


                <div className="relative overflow-hidden rounded-4xl shadow-2xl group cursor-pointer">
                    <img
                        src={proCleaners}
                        alt="Professional cleaner"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* <!-- Dark Overlay --> */}
                    <div className="absolute inset-0 bg-black/40"></div>


                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl md:text-4xl font-bold mb-2">100% Satisfaction Guarantee</h3>
                        <p className="text-sm md:text-lg opacity-90 max-w-md">We stand behind every clean. If you're not completely satisfied, we'll make it right.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetQuote