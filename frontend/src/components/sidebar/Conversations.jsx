import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";

export default function Conversations(){
    const {loading, conversations} = useGetConversations()


    return(
        <div className={"py-2 flex flex-col overflow-auto"}>

            {conversations.map((conversation, index)=>(
                <Conversation
                    key={conversation._id}
                    conversation = {conversation}
                    lastIndex = {index === conversations.length - 1 }
                />
            ))}

            {loading? <span className={"loading loading-spinner"}></span>:
            null
            }

        </div>
    )
}
