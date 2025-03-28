import { Link } from "react-router-dom"
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendar, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'


function Homepage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="mx-5">
            <nav className="py-4 flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-2.5">
                <h2 className="text-4xl font-medium">Ma<span className="text-4xl text-yellow-400">ti</span>ko!</h2>
                    <Link to="" className="py-1 px-3 hover:text-blue-300  cursor-pointer">Sports</Link>
                    <Link to="" className="py-1 px-3 hover:text-blue-300  cursor-pointer">Concerts</Link>
                    <Link to="" className="py-1 px-3 hover:text-blue-300 cursor-pointer">Theatre</Link>
                    <Link to="" className="py-1 px-3 hover:text-blue-300  cursor-pointer">Tech Events</Link>
                    <Link to="" className="py-1 px-3 hover:text-blue-300  cursor-pointer">Sell</Link>
                    <Link to="" className="py-1 px-3 hover:text-blue-300  cursor-pointer">My tickets</Link>

                    <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <TrashIcon className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <Link to="/signup" className="hover:text-blue-600">Register</Link>
                    <div className="flex flex-row items-center gap-2 border rounded-3xl px-4 py-1 hover:text-yellow-300 transition hover:bg-black cursor-pointer">
                    <IoPersonCircle />
                    <Link to="/login">Login</Link>
                    </div>
                </div>
                
            </nav>
            </div>
            <main className="mx-5  flex flex-col  max-w-screen">

            <div className="bg-black rounded">
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
                    <p>Quiver Kilimali</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./holi.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Holi Festival</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>Kitengela</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./wayo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Color Festival</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>Musium Hill Road</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./manuel.jpeg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Lakshapana Festival</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>20th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>Sarit City</p>
                    </div>
                    
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Buy Tickets</button>
                </div>
                <div className="flex flex-col items-start p-3 border gap-2 border-gray-300 rounded w-fit shadow">
                    <img src="./colombo.jpg" className="w-3xs rounded"/>
                    <h2 className="text-2xl font-normal ">Mashemeji derby</h2>
                    <div className="flex flex-row items-center gap-2">
                    <FaCalendar size={24}/>
                    <p>25th May 2025</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <MdLocationOn size={24}/>
                    <p>Nyayo Stadium</p>
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
                <p className="text-gray-300">Get registered with Matiko! to transfer and receive E-Ticket(s).<br/> Spread the joy by seamlessly transferring tickets to friends and family.</p>
                <div className="flex flex-row gap-3">
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Resend e-Ticket</button>
                    <button className="bg-blue-400 rounded py-2 px-4 text-white cursor-pointer">Transfer Ticket</button>
                </div>
                </div>
                </div>

            </div>
            </main>
            <div className="bg-gray-600 w-full text-gray-300  mt-5">
                <div className="m-5 grid grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-medium text-gray-300">Ma<span className="text-2xl text-yellow-400">ti</span>ko!</h1>
                        <p>Matiko!, Kenya's premier and most trusted online ticket partner, serves as the official marketplace providing a secure and safe platform for purchasing tickets to all entertainment events in Kenya
                        </p>
                        
                        <div className="flex flex-row gap-2 ">
                            <FaFacebook size={24} className="text-blue-900"/>
                            <FaInstagram size={24} className="text-red-600"/>
                            <FaXTwitter size={24} className="text-black"/>
                            <FaLinkedin size={24} className="text-blue-500"/>
                            <FaYoutube size={24} className="text-red-500"/>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaCcMastercard size={24} className="text-yellow-400"/>
                            <FaCcVisa size={24} className="text-white"/>
                            <FaCcPaypal size={24} className="text-blue-400"/> 
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-medium text-gray-300">Useful Links</h1>
                        <a href="#" className="">Events</a>
                        <a href="#">MyTickets Deals</a>
                        <a href="#">My Account</a>
                        <a href="#">Refund Policy</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-medium text-gray-300">About Us</h1>
                        <a href="#">Who we are?</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact us</a>
                        
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-medium text-gray-300">Contact</h1>
                        <div className="flex flex-row gap-2">
                            <FaWhatsapp size={24} color="green"/>
                            <a href="#">Whatsapp(Text-only-service)</a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaMailBulk size={24} color="blue"/>
                            <a href="#">Support</a>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="flex flex-col p-5">
                    <hr />
                    <div className="flex flex-row justify-between mt-3 text-gray-300">
                        <div className="flex flex-row gap-2">
                            
                            <h4><Link to="/privacy-policy">Privacy Policy</Link> |</h4>
                            <h4><Link to="/terms-and-conditions">Terms & Conditions</Link> |</h4>
                            <h4><Link to="/cookie-policy">Cookie Policy</Link></h4>
                            
                        </div>
                        <div className="flex flex-row gap-2">
                        <h4>Copyright {new Date().getFullYear()}</h4>
                        <h4> © Ma<span className="text-yellow-400">ti</span>ko!</h4>
                        <h4>All rights reserved</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage