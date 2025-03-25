import { Link } from "react-router-dom"
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendar, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


function Homepage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="mx-5">
            <nav className="py-4 flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-2.5">
                <h2 className="text-4xl font-medium">Ma<span className="text-4xl text-yellow-400">ti</span>ko!</h2>
                    <Link to="" className="py-1 px-3  cursor-pointer">sports</Link>
                    <Link to="" className="py-1 px-3  cursor-pointer">concerts</Link>
                    <Link to="" className="py-1 px-3 cursor-pointer">theatre</Link>
                    <Link to="" className="py-1 px-3  cursor-pointer">tech events</Link>
                    <Link to="" className="py-1 px-3  cursor-pointer">sell</Link>
                    <Link to="" className="py-1 px-3  cursor-pointer">my tickets</Link>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <Link to="/signup">Register</Link>
                    <div className="flex flex-row items-center gap-2 border rounded-3xl px-4 py-1 cursor-pointer">
                    <IoPersonCircle />
                    <Link to="/login">Login</Link>
                    </div>
                </div>
                
            </nav>
            </div>
            <main className="mx-5  flex flex-col  max-w-screen">
            <div className="bg-blue-500 rounded">
            <div className="flex flex-col gap-3 mx-5 justify-start py-4">
                <h2 className="text-4xl font-medium text-gray-200 mt-5">Let's Book Your Tickets</h2>
                <p className="text-gray-200 font-medium">Discover your favorite entertainment right here</p>
            
                <input type="search" placeholder="Search for events" 
                className="border border-gray-300 text-gray-600 bg-white rounded py-2 px-3 w-1/2  shadow h-14 mb-5"
                />
            </div>
            </div>

            <div className="flex flex-row mt-5 justify-between">
                <h2 className="text-4xl font-normal">What's happening <span className="text-blue-400 text-4xl font-normal">this month</span></h2>
                <div className="flex flex-row gap-4">
                    <button className="border border-blue-300 rounded-3xl py-2 px-4 text-blue-400 cursor-pointer">This month</button>
                    <button className="border border-gray-300 rounded-3xl py-2 px-4 hover:bg-blue-100 text-gray-950 cursor-pointer">Next month</button>
                </div>
            </div>

            {/* tickets sections/card */}
            <div className="flex flex-row  mt-5 gap-4">
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Colombo Fair</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>U.O.E Chepkoilel</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Colombo Fair</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>U.O.E Chepkoilel</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Colombo Fair</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>U.O.E Chepkoilel</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Colombo Fair</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>U.O.E Chepkoilel</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Colombo Fair</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>U.O.E Chepkoilel</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                
                {/* end ... */}
            </div>
            {/* transfer tickets and reselll */}
            <div className="mt-5 bg-gray-800 rounded">
                <div className="m-10 flex flex-row items-center justify-between">
                    <div className="flex flex-col items-start gap-2">
                <h2 className="text-4xl text-gray-100 font-normal">Transfer & Resend Tickets</h2>
                <p className="text-gray-300">Get registered with MyTickets to transfer and receive E-Ticket(s).<br/> Spread the joy by seamlessly transferring tickets to friends and family.</p>
                <div className="flex flex-row gap-3">
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Resend e-Ticket</button>
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Transfer Ticket</button>
                </div>
                </div>
                </div>

            </div>
            </main>
            <div className="bg-gray-900 w-full text-gray-300  mt-5">
                <div className="m-5 grid grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium underline">Matiko!</h1>
                        <p>Matiko!, Sri Lanka's premier and most trusted online ticket partner, serves as the official marketplace providing a secure and safe platform for purchasing tickets to all entertainment events in Sri Lanka.
                        </p>
                        <div className="flex flex-row gap-2 ">
                            <FaFacebook size={24}/>
                            <FaInstagram size={24}/>
                            <FaTwitter size={24}/>
                            <FaLinkedin size={24}/>
                            <FaYoutube size={24}/>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaCcMastercard size={24}/>
                            <FaCcVisa size={24}/>
                            <FaCcPaypal size={24}/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium text-gray-300 underline">Useful Links</h1>
                        <h3>Events</h3>
                        <h3>MyTickets Deals</h3>
                        <h3>My Account</h3>
                        <h3>Refund Policy</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium text-gray-300 underline">About Us</h1>
                        <h3>Who we are?</h3>
                        <h3>FAQ</h3>
                        <h3>Contact us</h3>
                        
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium text-gray-300 underline">Contact</h1>
                        <div className="flex flex-row gap-2">
                            <FaWhatsapp size={24}/>
                            <h3>Whatsapp(Text-only-service)</h3>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaMailBulk size={24}/>
                            <h3>Support</h3>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="flex flex-col p-5">
                    <hr />
                    <div className="flex flex-row justify-between mt-3 text-gray-300">
                        <div className="flex flex-row gap-2">
                            
                            <h4>Privacy Policy |</h4>
                            <h4>Terms & Conditions |</h4>
                            <h4>Cookie Policy</h4>
                        </div>
                        <div className="flex flex-row gap-2">
                        <h4>Copyright {new Date().getFullYear()}</h4>
                        <h4> © Matiko!</h4>
                        <h4>All rights reserved</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage