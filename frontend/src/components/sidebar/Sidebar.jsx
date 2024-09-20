import SearchInput from "../../ui/Searchinput/SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import useConversation from "../../zustand/useConversation.js";


export default function Sidebar(){
    const {selectedConversation} = useConversation()
    return(
        <>
                <div className={"border-r border-slate-500 flex flex-col md:min-w-[150px] lg:min-w-[350px]"}>
                    <SearchInput />
                    <div className={"divider px-3"}></div>
                    <Conversations />
                    <LogoutButton />
                </div>


        </>
    )
}
