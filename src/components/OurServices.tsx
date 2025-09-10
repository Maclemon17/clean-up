import { LiaHomeSolid } from "react-icons/lia"
import { PiBroomFill, PiBuildingOfficeFill, PiSprayBottleFill } from "react-icons/pi"

const OurServices = () => {

    const services = [
        {
            icon: <LiaHomeSolid size={40} />,
            title: "Home Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
            icon: <PiBuildingOfficeFill size={40} />,
            title: "Office Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
            icon: <PiSprayBottleFill size={40} />,
            title: "Deep Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
            icon: <PiBroomFill size={40} />,
            title: "Post-Construction Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
    ]

    return (
        <section className="px-10 py-16 lg:px-20 overflow-x-hidden">
            <h2 className="text-4xl font-bold text-center mb-16 mt-3">Our Services</h2>

            {/* SERVICES CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 mb-6">
                {
                    services.map((service, id) => (
                        <div key={id} className="bg-gray-200 p-6 rounded-2xl shadow-md">
                            <div className="mb-8">{service.icon}</div>
                            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                            <p className="font-medium text">{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default OurServices