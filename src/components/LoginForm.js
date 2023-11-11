import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {useState,React} from 'react'
import {Link, useLinkClickHandler,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


export default function({setIsLoggedIn}){

    const [showPassword,setShowPassword] = useState(false);  // made state variable so that every time the EYE button will be clicked we its value can be toggled and latter in the code can get updated on re-rendering

    const navigate= useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    const iconStyle={
        fontSize:"20px",
        fill:"#AFB2BF",
        position:"relative",
        top:"4px"
        
    }

    function changeHandler(event){
        
        setFormData((prevData)=>{
            return{
            ...prevData,
            [event.target.name]:event.target.value
        }}
        )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);    // this needs to be present before the navigate command so that ProtedRoute can work

        toast.success("logedIn");
        console.log(formData)
        navigate("/dashboard")


    }
    return(

        <form onSubmit={submitHandler} 
        className="flex flex-col w-full gap-y-4 mt-6">

            <label className="w-full "> 
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                    Email Address 
                    <sup className="text-pink-200">*</sup>
                </p>   {/* Another way to add label */}
                <input
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter email address"
                    required
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full border-b-2 border-gray-700"
                />
            </label> 

            <label className="w-full relative"> 
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                    Password 
                    <sup className="text-pink-200" >*</sup>
                </p> 
                <input
                    type={showPassword? "text": "password"}    
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    placeholder="Enter password"
                    required
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full border-b-2 border-gray-700"
                />

                <span onClick={()=> setShowPassword((prev)=> !prev) }
                  className="absolute right-3 top-[38px] cursor-pointer"  >                                                           {/* toggling between values */}   {/* Propper form with Brackets ----> onClick= { ()=>{ setShowPassword( (prev)=>{!prev} )} }   */ }

                    { showPassword ? (<AiOutlineEyeInvisible style={iconStyle}  />) : (<AiOutlineEye style={iconStyle}/>)   }

                </span>


                <Link to="#">               {/* to remain on the same page, essentially doing nothing */}
                    <p className="text-xs mt-1 text-blue-100 text-right "> Forgot Password</p>
                </Link>
            </label>  

            <button 
            className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Sign In</button>  

        </form>
    );
}