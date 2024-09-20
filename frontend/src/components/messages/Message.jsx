import {useAuthContext} from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.js";
import {extracTime} from "../../../../backend/utils/extracTime.js";

export default function Message({message}){
    const {authUser}=useAuthContext()
    const {selectedConversation}=useConversation()
    const fromME = message.senderId === authUser._id
    const chatClassName = fromME ? 'chat-end' : 'chat-start'
    const profilePic = fromME ? authUser.profilePic: selectedConversation.profilePic
    const bubbleBgColor = fromME? "bg-blue-500": ""
    const formatedTime = extracTime(message.createdAt)


    return(
        <div className={`chat ${chatClassName}`}>
            <div className={"chat-image avatar"}>
                <div className={"w-10 rounded-full"}>
                    <img src={profilePic} alt="user-icon"/>
                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
            <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center "}>{formatedTime}</div>
        </div>
    )
}
