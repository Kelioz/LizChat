import Searchinput from "../../ui/Searchinput/Searchinput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";


export default function Sidebar(){
    return(
        <div className={"border-r border-slate-500 p-4 flex flex-col"}>
            <Searchinput />
            <div className={"divider px-3"}></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}
