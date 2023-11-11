import Tempelate from "../components/Tempelate"
import loginImg from "../assets/login.png"


export default function Login({setIsLoggedIn}){

    return(
        <Tempelate
            title="Welcome Back"
            desc1="Build skills for today,tomorrow, and beyond"
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}