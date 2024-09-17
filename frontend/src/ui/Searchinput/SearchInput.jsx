import {IoSearchSharp} from "react-icons/io5";
import {useState} from "react";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

export default function SearchInput(){
    const [search, setSearch] = useState("")
    const {setSelectedConversation} = useConversation()

    const {conversations, setConversations}=useGetConversations()

    function handleSubmit(event){
        event.preventDefault()
        if (!search) return
        if (search.length < 3) toast.error("Search term must be at least 3 characters long")

        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

        if (conversation){
            setSelectedConversation(conversation)
            setSearch("")
        }else toast.error("no such user found")
    }

    return(
        <form className={"flex items-center gap-2"} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={"search"}
                className={"input input-bordered rounded-full w-3/4"}
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <button className={"bt btn-circle bg-sky-500 text-white flex items-center justify-center"}>
                <IoSearchSharp className={"w-6 h-6 outline-none "}/>
            </button>
        </form>
    )
}
