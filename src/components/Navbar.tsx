


const Navbar = () => {
    return (
        <header className="px-10 py-6 lg:px-16 fixed bg-transparent text-white z-10 w-full">
            <div className="flex items-center justify-between">
                <div className="">
                    <span>Clean <br />UP </span>

                </div>

                {/* <div> */}
                <nav>
                    <ul className="flex items-center gap-12 font-medium">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                {/* </div> */}

                <button className="bg-white text-black py-4 px-6 rounded-full font-semibold shadow-lg">Book Your Cleaning</button>
            </div>
        </header>
    )
}

export default Navbar