import proCleaners from '../assets/images/people-cleaning-building.jpg';
import ecoFriendly from '../assets/images/cleaning-indoors.jpg';
import flexSchedule from '../assets/images/window-cleaning.jpg';

const WhyChooseUs = () => {
    return (
        <section className="py-10 px-10 lg:px-20">
            <div className="grid grid-cols-2 gap-24 mb-3">
                <h2 className="text-4xl font-bold">Why Choose Us</h2>
                <p className="text-lg font-medium">Whether it's your home, office or rental property. <br /> We make your space your space sparkle</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {/* LEFT - SINGLE */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img
                        src={proCleaners}
                        alt="Professional cleaner"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* <!-- Dark Overlay --> */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* <!-- Content Overlay --> */}
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Trusted Professionals</h3>
                        <p className="text-sm opacity-90 max-w-xs">Thoroughly vetted and trained cleaning professionals you can trust in your home</p>
                    </div>
                </div>

                {/* RIGHT - STACKED */}
                <div className="flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group ">
                        <img
                            src={ecoFriendly}
                            alt="Eco-Friendy Cleaners"
                            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* <!-- Dark Overlay --> */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* <!-- Content Overlay --> */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Eco-Friendly Products</h3>
                            <p className="text-sm opacity-90 max-w-xs">Safe for kids, pets, and the planet</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group ">
                        <img
                            src={flexSchedule}
                            alt="Flexible Scheduling"
                            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* <!-- Dark Overlay --> */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* <!-- Content Overlay --> */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Flexible Scheduling</h3>
                            <p className="text-sm opacity-90 max-w-xs">Weekly, bi-weekly, monthly, or one-time cleaning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs