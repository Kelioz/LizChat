import Genderchekbox from "../../ui/GenderChekbox/Genderchekbox.jsx";

const Signup = () =>{
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
                        <input type="text" placeholder="John Doe" className={"w-full input input-bordered h-10"} />
                    </div>
                    <div>
                        <label className={"label p-2"} >
                            <span className={"text-base label-text"}>Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className={"w-full input input-bordered h-10"} />
                    </div>
                    <div>
                        <label className={"label "} >
                            <span className={"text-base label-text"}>Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className={"w-full input input-bordered h-10"} />
                    </div>
                    <div>
                        <label className={"label "} >
                            <span className={"text-base label-text"}>Password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className={"w-full input input-bordered h-10"} />
                    </div>
                    <Genderchekbox />


                    <a href="#" className={"text-sm hover:underline hover:text-blue-600 mt-2 inline-block"}>
                        Already have an account?
                    </a>

                    <div>
                        <button className="btn btn-outline btn-secondary btn-block mt-2 ">Sign up</button>
                    </div>

                </form>


            </div>

        </div>
    )
}
export default Signup
