import Tempelate from "../components/Tempelate"
import signupImg from "../assets/signup.png"


export default function Signup({setIsLoggedIn}){

    return(
        
        <Tempelate
            title="Join the millions learning to code with studyNotion for free"
            desc1="Build skills for today,tomorrow, and beyond"
            desc2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}


