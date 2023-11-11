import {useNavigate} from 'react-router-dom';
import Login from "../pages/Login"
import {useEffect} from 'react'

export default function ProtectedRoute({children,isLoggedIn}){
        const navigate = useNavigate();

        //navigate to  login page if you are not signed in, AFTER the reload has occured when tried to access the dashboard manually by changing the Url

        // useEffect ensures that navigation can start only after the page has rendered compeletly
        // else it doesn't work properly
        
        useEffect(()=>{
            if(!isLoggedIn){
                navigate("/login")
            }        
        },[])
        

        return (isLoggedIn ? children : null )

}