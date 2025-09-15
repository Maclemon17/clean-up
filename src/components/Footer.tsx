import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6"


const Footer = () => {
    return (
        <footer className="px-5 py-10 md:px-10 bg-black text-white mt-30">
            <div className="grid grid-cols-2 gap-y-15 md:grid-cols-4 pt-5 mb-24 justify-items-center md:justify-items-start">
                <div className="">
                    <ul className="grid gap-3 md:gap-6 text-lg md:text-xl">
                        <li className="hover:text-amber-300 transition"><a href="">Home</a></li>
                        <li className="hover:text-amber-300 transition"><a href="">About</a></li>
                        <li className="hover:text-amber-300 transition"><a href="">Contact</a></li>
                        <li className="hover:text-amber-300 transition"><a href="">Projects</a></li>
                    </ul>
                </div>

                <div className="">
                    <ul className="grid gap-3 md:gap-6 text-lg md:text-xl">
                        <li className="hover:text-amber-300 transition"><a href="">Get Quote</a></li>
                        <li className="hover:text-amber-300 transition"><a href="">Services</a></li>
                        <li className="hover:text-amber-300 transition"><a href="">Teams</a></li>
                        <li className="hover:text-amber-300 transition"><a href=""></a></li>
                    </ul>
                </div>

                <div className="col-span-2 justify-self-stretch md:justify-self-end-saf min-w-9/12">
                    <h3 className="font-normal text-xl md:text-2xl">Join Our Newsletter to Stay Up to date.</h3>

                    <div className="my-4 flex items-center justify-between bg-white rounded-full p-1 w-full">
                        <input type="text" id="email"
                            placeholder="Enter your email to subscribe..."
                            className="flex-1 py-4 pl-10 bg-white rounded-full text-black focus:outline-none focus:ring-2 focus:ring-amber-300"
                        />
                        <button className="py-4 px-5 w-6/12 md:w-3/12 text-white rounded-full bg-black">Get Started</button>
                    </div>

                    <div className="flex items-center gap-4 pl-12" id="social-links">
                        <p>Follow us</p>
                        <FaSquareXTwitter size={24} />
                        <FaLinkedin size={24} />
                        <FaSquareInstagram size={24} />
                        <FaSquareFacebook size={24} />
                    </div>
                </div>
            </div>

            <h3 className="font-bold text-white text-7xl md:text-9xl text-center">Clean Up.</h3>
        </footer>
    )
}

export default Footer