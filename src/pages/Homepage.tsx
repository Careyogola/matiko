import { Link } from "react-router-dom"
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


function Homepage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="mx-5">
            <nav className="py-4 flex flex-row items-center justify-between border-b">
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
                    <div className="flex flex-row items-center gap-2 border bg-blue-300 rounded px-4 py-1 cursor-pointer">
                    <IoPersonCircle />
                    <Link to="/login">Login</Link>
                    </div>
                </div>
                
            </nav>
            </div>
            <div className="bg-blue-500">
            <div className="flex flex-col gap-3 mx-5 justify-start py-4">
                <h2 className="text-4xl font-medium text-gray-200 mt-5">Let's Book Your Tickets</h2>
                <p className="text-gray-200 font-medium">Discover your favorite entertainment right here</p>
            
                <input type="search" placeholder="Search for events" 
                className="border border-gray-300 text-gray-600 bg-white rounded py-2 px-3 w-1/2  shadow h-14 mb-5"
                />
            </div>
            </div>

            <div className="flex flex-row mx-5 mt-5 justify-between">
                <h2 className="text-4xl font-normal">What's happening <span className="text-blue-400 text-4xl font-normal">this month</span></h2>
                <div className="flex flex-row gap-4">
                    <button className="border border-blue-300 rounded-3xl py-2 px-4 text-blue-400 cursor-pointer">This month</button>
                    <button className="border border-gray-300 rounded-3xl py-2 px-4 hover:bg-blue-100 text-gray-950 cursor-pointer">Next month</button>
                </div>
            </div>

            {/* tickets sections */}
            <div className="flex flex-row overflow-x-auto mx-5 mt-5">
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

            </div>
            
        </div>
    )
}

export default Homepage