import {BsSend} from "react-icons/bs";
import {useState} from "react";
import useSendMessage from "../../hooks/useSendMessage.js";

export default function MessageInput(){
    const [message, setMessage] = useState("")
    const {loading, sendMessage} = useSendMessage()
   async function handleSubmit(event){
       event.preventDefault()
       if (!message) return
       await sendMessage(message)
       setMessage("")
    }
    return(
        <form className={"px-4 my-3"}>
            <div className={'w-full relative '}>
                <input
                    type="text"
                    placeholder={"Send message"}
                    className={'border text-sm rounded-lg block w-full p-2.5  text-white bg-gray-700 border-gray-600'}
                    value={message}
                    onChange={event => {setMessage(event.target.value)}}
                />
                <button onClick={handleSubmit} type={"submit"} className={"absolute inset-y-0 end-0 flex items-center pe-3"}>
                    {loading? <span className={"loading, loading-spinner"}></span>: <BsSend />}
                </button>
            </div>
        </form>
    )
}
