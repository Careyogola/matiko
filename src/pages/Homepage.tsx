import { Link } from "react-router-dom"
import { IoPersonCircle } from "react-icons/io5";


function Homepage() {
    return (
        <div className="w-full h-screen flex flex-col gap-3.5">
            <nav className="mx-5 py-4 flex flex-row items-center justify-between border-b">
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
            <div className="bg-blue-500">
            <div className="flex flex-col mx-5 gap-3justify-start py-4">
                <h2>Let's Book Your Tickets</h2>
                <p>Discover your favorite entertainment right here</p>
            
                <input type="search" placeholder="Search for events" 
                className="border border-gray-300 text-gray-600 rounded-4xl py-2 px-3 w-1/2  shadow h-14"
                />
            </div>
            </div>
        </div>
    )
}

export default Homepage