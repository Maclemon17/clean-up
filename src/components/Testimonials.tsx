import nicki from '../assets/images/nicki.jpg';
import david from '../assets/images/david.jpg';
import sarah from '../assets/images/sarah.jpg';

const Testimonials = () => {

    const testimonials = [
        {
            avatar: nicki,
            name: "Nicki",
            feedback: "I can't say how happy I am with the cleaning service. They are thorough, dependable, and trustworthy. I would recommend them to anyone looking for quality cleaning services"
        },
        {
            avatar: david,
            name: "David",
            feedback: "Outstanding service! The team arrived on time, were professional, and left my office spotless. Their attention to detail is impressive. Will definitely book again."
        },
        {
            avatar: sarah,
            name: "Sarah",
            feedback: "Fantastic cleaning service! They transformed my home and saved me so much time. The staff is friendly, professional, and reliable. Highly recommend!"
        },
    ]

    return (
        <section className="py-10 px-10 md:px-20">
            <h2 className="text-4xl font-bold text-center ">What Our Clients Says About Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {
                    testimonials.map((testimonial, id) => (
                        <div key={id} className="p-6 bg-gray-100 rounded-2xl shadow-md flex flex-col items-center text-center gap-4">
                            <img src={testimonial.avatar}
                                alt={testimonial.name}
                                className='w-24 h-24 object-cover rounded-full shadow-lg'
                            />
                            <h3 className="font-bold text-2xl">{testimonial.name}</h3>

                            <p className="text-lg font-normal">&#8220;{testimonial.feedback}&#8221;</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials