import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../../skeletons/MessageSkeleton.jsx";
import {useEffect, useRef} from "react";

export default function Messages(){
    const {messages, loading}=useGetMessages()
    console.log(loading)
    const lastMessageRef = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behavior:"smooth"})

        },100)
    },[messages])


    return(
        <div className={"px-4 flex-1 overflow-auto"}>
            {!loading && messages.length > 0 && messages.map((message)=>(
                <div key={message._id}
                    ref={lastMessageRef}
                >
                    <Message   message={message}/>
                </div>
                )) }

            {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx} />)}
            { messages.length === 0 &&(
                <p className={"text-center"}>send a message to start the conversation</p>
            )}
        </div>
    )
}
