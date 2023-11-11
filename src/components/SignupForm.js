import {React,useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';


export default function Signup({setIsLoggedIn}){
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType , setAccountType] = useState("student")

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",

    })

    

    const iconStyle={
        fontSize:"20px",
        fill:"#AFB2BF",
        
        
    }

    function changeHandler(event){

        setFormData((prevData)=>{

            return{
                ...prevData,
                [event.target.name]:event.target.value
            }   
        })  
    }

    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();

        if(formData.password != formData.confirmPassword){
            toast.error("Password doesn't match");
            return;
        }

        
        setIsLoggedIn(true);
        toast.success("Account Created");

        const finalData={
            ...formData, 
            AccountType:accountType
        }
        console.log("Account Details");
        console.log(finalData)
        navigate("/dashboard");


    }

    return(
        <div>
            {/* student-instructor toggle tab */}

            <div className='flex bg-richblack-800 p-1 gap-x-1 px-2 my-6 rounded-full max-w-max  text-richblack-5'>

                <button
                className={`${accountType==="student" ?  
                    "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200" } 
                    py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{ setAccountType("student")}}>
                    Student
                </button>

                <button
                    className={`${accountType==="instructor" ?  
                        "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200" } 
                        py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>{ setAccountType("instructor")}}>
                    Instructor
                </button>
            </div>



            <form onSubmit={submitHandler}>
                {/* first and last Name */}
                <div className='flex gap-7 mt-4'>
                    <label >
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] " >First Name 
                            <sup className="text-pink-200">*</sup></p>

                        <input
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-[110%] p-[12px] border-b-2 border-gray-700"
                        />
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                            Last Name <sup className="text-pink-200">*</sup></p>

                        <input
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-[110%] p-[12px]  border-b-2 border-gray-700"
                        />
                    </label>
                </div>

                <div className='mt-4'>
                    {/* email */}
                <label className='mt-4'>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Email Address 
                    <sup className="text-pink-200">*</sup></p>

                    <input
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email"
                        value={formData.email}
                        required
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full border-b-2 border-gray-700"/>
                </label>

                </div>
                
                
                {/* create and confirmPassword */}

                <div className='flex gap-4 mt-4'>
                    <label className='w-full relative'>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Create Password
                             <sup  className="text-pink-200">*</sup></p>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full border-b-2 border-gray-700"
                        />

                        <span onClick={()=> setShowPassword((prev)=> !prev) }
                         className="absolute right-3 top-[38px] cursor-pointer"> {/* toggling between values */}   {/* Propper form with Brackets ----> onClick= { ()=>{ setShowPassword( (prev)=>{!prev} )} }   */ }
                           
                            
                            { showPassword ? (<AiOutlineEyeInvisible style={iconStyle}/>) : (<AiOutlineEye style={iconStyle}/>)   }
                        </span>

                    </label>

                    <label className='w-full relative'>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Confirm Password <sup className="text-pink-200">*</sup></p>

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.confirmPassword}
                            required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full border-b-2 border-gray-700"
                        />

                        <span onClick={()=> setShowConfirmPassword((prev)=> !prev) }
                         className="absolute right-3 top-[38px] cursor-pointer"> 
                            { showConfirmPassword ? (<AiOutlineEyeInvisible style={iconStyle}/>) : (<AiOutlineEye style={iconStyle}/>)   }
                        </span>
                    </label>

                
                </div>
                <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"> Create Account</button>

            </form>
        </div>
    );

}