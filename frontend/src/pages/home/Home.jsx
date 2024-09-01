import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";


export default function Home(){
    return(
        <div className={"flex sm:[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"}>
            <Sidebar />
            <MessageContainer />
        </div>
    )

}
