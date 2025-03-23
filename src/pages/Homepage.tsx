import { Link } from "react-router-dom"


function Homepage() {
    return (
        <div className="w-full h-screen flex flex-col gap-3.5">
            <nav className="px-5 py-3 flex flex-row items-center justify-evenly">
                <h2 className="text-4xl font-medium">Ma<span className="text-4xl text-yellow-400">ti</span>ko!</h2>
                <div className="flex flex-row items-center gap-2.5">
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">sports</Link>
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">concerts</Link>
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">theatre</Link>
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">tech events</Link>
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">sell</Link>
                    <Link to="" className="py-1 px-3 bg-gray-200 rounded-3xl border cursor-pointer">my tickets</Link>
                </div>
            </nav>
            
                <input type="search" placeholder="Search for events" 
                className="border border-gray-300 text-gray-600 rounded-4xl py-2 px-3 w-1/2 mx-auto shadow h-14"
                />
            
        </div>
    )
}

export default Homepage