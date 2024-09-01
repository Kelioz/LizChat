import {IoSearchSharp} from "react-icons/io5";

export default function Searchinput(){
    return(
        <form className={"flex items-center gap-2"}>
            <input type="text" placeholder={"search"} className={"input input-bordered rounded-full"}/>
            <button className={"bt btn-circle bg-sky-500 text-white flex items-center justify-center"}>
                <IoSearchSharp className={"w-6 h-6 outline-none "}/>
            </button>
        </form>
    )
}
