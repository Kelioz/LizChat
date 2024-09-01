export default function Message(){
    return(
        <div className={"chat chat-end"}>
            <div className={"chat-image avatar"}>
                <div className={"w-10 rounded-full"}>
                    <img src="https://avatars.mds.yandex.net/i?id=ea6ae9f4f4073e7668274cbd2843f755_l-5176960-images-thumbs&n=13" alt="user-icon"/>
                </div>
            </div>

            <div className={"chat-bubble text-white bg-blue-500"}>Hi! whtatokp</div>
            <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>12:42</div>
        </div>
    )
}
