import jake from '../assets/images/jake.png';
import tina from '../assets/images/tina.png';
import people from '../assets/images/people-cleaning-building.jpg'

const OurTeam = () => {

    const teams = [
        {
            image: jake,
            name: "Jake",
            role: "Deep Cleaning Expert"
        },
        {
            image: tina,
            name: "Tina",
            role: "Office Cleaning Coordinator"
        },
        {
            image: people,
            name: "Maria",
            role: "Residential Cleaning Specialist"
        }
    ]

    return (
        <section className="py-20 px-10 lg:px-20">
            <h2 className="text-4xl font-bold text-center mb-16 mt-3">Meet Our Professional Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teams.map((team, id) => (
                    <div key={id} className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <div className="aspect-[6/5] overflow-hidden">
                            <img
                                src={team.image}
                                alt={team.name}
                                className="w-full h-full bg-gray-600 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>


                        <div className="absolute bg-white/30 w-full h-fit bottom-0 p-5 rounded-t-3xl text-white text-center">
                            <h3 className="text-lg font-bold">{team.name}</h3>
                            <p className="font-bold">{team.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurTeam