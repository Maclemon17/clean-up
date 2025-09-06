import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"



const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);


    const toggleNav = () => {
        setOpenNav(!openNav);
    }

    return (
        <header className="px-10 py-6 lg:px-16 fixed bg-transparent text-white z-10 w-full">
            <div className="flex items-center justify-between">
                <div className="">
                    <span>Clean <br />UP </span>

                </div>

                {/* <div> */}
                <nav>
                    <ul className="hidden md:flex items-center gap-12 font-medium">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                {/* </div> */}

                <button className="hidden md:block bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:bg-amber-300 cursor-pointer transition">Book Your Cleaning</button>

                {/* NAV ICON */}
                <div className="md:hidden cursor-pointer">
                    {openNav ? (
                        <FiX size={24} onClick={toggleNav} />
                    ) : (
                        <FiMenu size={24} onClick={toggleNav} />
                    )}
                </div>
            </div>

            <div className={`${openNav ? "translate-x-0" : "-translate-x-full hidden"} md:hidden flex flex-col text-center gap-10 absolute top-20 left-10 right-10 p-10  h-fit bg-amber-300 text-xl rounded-2xl`}>
                <nav>
                    <ul className="flex flex-col items-center gap-6 text-[16px] font-semibold text-gray cursor-pointer transition">
                        <li className="hover:text-black"><a href="/">Home</a></li>
                        <li className="hover:text-black"><a href="/">Services</a></li>
                        <li className="hover:text-black"><a href="/">About</a></li>
                        <li className="hover:text-black"><a href="/">Projects</a></li>
                        <li className="hover:text-black"><a href="/">Contact</a></li>
                    </ul>
                </nav>

                <hr className="text-grayish-violet opacity-50" />

                <div className="flex flex-col items-center gap-6 text-grayish-violet text-[16px] font-semibold transition">
                    <button className="bg-white w-full text-black py-4 px-6 rounded-full font-semibold shadow-lg hover:shadow-2xl cursor-pointer transition">Book Your Cleaning</button>

                </div>
            </div>
        </header>
    )
}

export default Navbar