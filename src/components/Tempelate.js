import frameImage from '../assets/frame.png'
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc"

export default function ({title,desc1,desc2, image,formtype,setIsLoggedIn}){
    
    console.log(formtype)
    return(
        <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

           <div className='max-w-[450px] w-11/12'>
                <h1 className='text-richblack-5 font-semibold text-[1.975rem] leading-[2.375rem] tracking-wide '>
                {title}
                </h1>

                <p className='text-[1.025rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-100 italic' ><i></i>{desc2}</span>
                </p>

                {  
                    (formtype==="login") ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>): (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>

                    <div className='h-[1px] bg-richblack-700 w-full'></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] bg-richblack-700 w-full'></div>

                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2
                mt-6'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>    {/* !!! shouldn't it be dependent on the page type */}
                </button>

            </div> 

            <div className='relative w-11/12 max-w-[400px]'>
                
                {/* width and height given in the img are of no use as they are fixed in the parent's max-width */}
                <img src={frameImage}
                     alt="Pattern"
                     width="530px"   
                     height="480px"
                     loading="lazy"

                />
                <img src={image}
                     alt="Students"
                     width="530px"
                     height="470px"
                     loading="lazy"
                     className='absolute -top-4 right-4'
                />

            </div>
        </div>
        

    );
}