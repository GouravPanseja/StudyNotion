import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar({isLoggedIn, setIsLoggedIn}){

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/" >
                <img src={logo} width={160} height={32} loading='lazy'></img>
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-richblack-100'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>


            {/* Login-Signup-LogOut-Dashboard */}

            <div className='flex items-center gap-x-4'>  {/*  conditionally rendering Login and signup buttons when not logged in and other two when logged in  */}

                { !isLoggedIn &&                    
                    <Link to="/login" className='bg-richblack-800 text-richblack-100 py-[6px] px-[12px] rounded-[8px] border border-richblack-700'>
                            <button> Login</button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup" className='bg-richblack-800 text-richblack-100 py-[6px] px-[12px] rounded-[8px] border border-richblack-700'>
                        <button> Signup</button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/" onClick={()=>{ 
                        console.log(isLoggedIn)
                        setIsLoggedIn(false);
                        toast.warning("Logged Out")

                    }}   className='bg-richblack-800 text-richblack-100 py-[6px] px-[12px] rounded-[8px] border border-richblack-700 '>
                        <button> Logout</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard" className='bg-richblack-800 text-richblack-100 py-[6px] px-[12px] rounded-[8px] border border-richblack-700'>
                        <button> Dashboard</button>
                    </Link>
                }              
                
                
            </div>
        </div>
    )
}