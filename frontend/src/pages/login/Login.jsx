import {Link} from "react-router-dom";
import {useState} from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () =>{
    const [useName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin()

    const handleSubmit = async (event)=>{
        event.preventDefault()
        await login(useName, password)
    }



    return(
        <div className={'flex flex-col items-center justify-center min-w-96  max-w-auto '  } >
            <div className={'w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-300'}>
                    Login
                    <span className={"text-blue-500"}> LizChat</span>
                </h1>

                <form action="">
                    <div>
                        <label className={"label p-2"} >
                            <span className={"text-base label-text"}>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className={"w-full input input-bordered h-10"}
                            value={useName}
                            onChange={event =>{setUserName(event.target.value)}}
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
                            onChange={event=>{setPassword(event.target.value)}}
                        />
                    </div>
                    <Link to="/signup" className={"text-sm hover:underline hover:text-blue-600 mt-2 inline-block"}>
                        {"Dont't"}have an account
                    </Link>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-outline btn-secondary btn-block mt-2 ">
                            {loading? <span className={"loading loading-spinner"}></span>: <span>Login</span>}
                        </button>
                    </div>

                </form>


            </div>

        </div>
    )
}
export default Login
