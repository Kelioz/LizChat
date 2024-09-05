import {Link} from "react-router-dom";
import {useState} from "react";
import GenderCheckBox from "../../ui/GenderCheckbox/GenderCheckBox.jsx";
import useSignUp from "../../hooks/useSignUp.js";



const Signup = () =>{
    const [fullName, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gender,setGender] = useState()

    const {loading, signup} = useSignUp()

    function handleCheckbox(gender){
        setGender(gender)
    }
    async function handleSubmit(event){
        event.preventDefault()
        await signup({fullName, username, password, confirmPassword, gender})
    }


    return(
        <div className={'flex flex-col items-center justify-center min-w-96  max-w-auto '}>
            <div className={'w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-300'}>
                    Sign up
                    <span className={"text-blue-500"}> LizChat</span>
                </h1>

                <form action="">
                    <div>
                        <label className={"label p-2"} >
                            <span className={"text-base label-text"}>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className={"w-full input input-bordered h-10"}
                            value={fullName}
                            onChange={event => {setFullname(event.target.value)}}
                        />
                    </div>
                    <div>
                        <label className={"label p-2"} >
                            <span className={"text-base label-text"}>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className={"w-full input input-bordered h-10"}
                            value={username}
                            onChange={event => {setUsername(event.target.value)}}
                        />
                    </div>
                    <div>
                        <label className={"label "} >
                            <span className={"text-base label-text"}>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className={"w-full input input-bordered h-10"}
                            value={password}
                            onChange={event => {setPassword(event.target.value)}}
                        />
                    </div>
                    <div>
                        <label className={"label "} >
                            <span className={"text-base label-text"}>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className={"w-full input input-bordered h-10"}
                            value={confirmPassword}
                            onChange={event => {setConfirmPassword(event.target.value)}}
                        />
                    </div>
                    <GenderCheckBox onCheckBoxChange={handleCheckbox} selectedgender={gender} />


                    <Link to="/login" className={"text-sm hover:underline hover:text-blue-600 mt-2 inline-block"}>
                        Already have an account?
                    </Link>

                    <div>
                        <button onClick={handleSubmit} disabled={loading}  className="btn btn-outline btn-secondary btn-block mt-2 ">
                            {loading ? <span className={"loading loading-spinner"}></span>: <span>Signup</span>}
                        </button>
                    </div>

                </form>


            </div>

        </div>
    )
}
export default Signup
