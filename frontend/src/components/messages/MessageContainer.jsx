import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {TiMessages} from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import {useEffect} from "react";

export default function MessageContainer(){
    const {selectedConversation, setSelectedConversation} = useConversation()

    useEffect(()=>{
        return () =>{
            setSelectedConversation(null)
        }
    },[setSelectedConversation])

    return(
        <div className={"md:min-w-[450px] lg:min-w-[90rem] flex flex-col "}>
            {!selectedConversation?
                <NoChatSelected  />:
                <>
                    {/*header*/}
                    <div className={"bg-slate-500 px-4 py-2 mb-2  "}>
                        <span className={"label-text"}>To:</span>{""}
                        <span className={"text-gray-900 font-bold"}>{selectedConversation.fullName}</span>
                    </div>
                    <Messages/>
                    <MessageInput />
                </>
            }
        </div>
    )
}
function NoChatSelected(){
    return(
        <div className={'flex items-center justify-center lg:w-4/5 h-full'}>
            <div className={'px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center'}>
                <p>Welcome </p>
                <p>Select a chat to start </p>
                <TiMessages className={'text3x1 md:text-6xl text-center'}/>
            </div>
        </div>
    )
}
