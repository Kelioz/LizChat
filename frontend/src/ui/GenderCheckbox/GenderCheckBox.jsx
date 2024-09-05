export default function GenderCheckBox({onCheckBoxChange, selectedgender}){
    return(
        <div className={"flex"}>
            <div className={"form-control"}>
                <label className={`label gap-3 cursor-pointer ${selectedgender === "male" ? "selected" : ""}`}>
                    <span className={"label-text"}>Male</span>
                    <input type="radio"
                           name="radio-3"
                           className="radio radio-secondary"
                           checked={selectedgender === "male"}
                           onChange={()=>{onCheckBoxChange("male")}}
                    />
                </label>
            </div>
            <div className={"form-control"}>
                <label className={`label gap-3 cursor-pointer ${selectedgender === "female" ? "selected" : ""}` }>
                    <span className={"label-text"}>Female</span>
                    <input
                        type="radio"
                        name="radio-3"
                        className="radio radio-secondary"
                        checked={selectedgender === "female"}
                        onChange={()=>{onCheckBoxChange("female")}}
                    />
                </label>
            </div>
            <div className={"form-control"}>
                <label className={`label gap-3 cursor-pointer ${selectedgender === "helicopter" ? "selected" : ""}` }>
                    <span className={"label-text"}>Helicopter</span>
                    <input
                        type="radio"
                        name="radio-3"
                        className="radio radio-secondary"
                        checked={selectedgender === "helicopter"}
                        onChange={()=>{onCheckBoxChange("helicopter")}}
                    />
                </label>
            </div>
        </div>
    )
}
