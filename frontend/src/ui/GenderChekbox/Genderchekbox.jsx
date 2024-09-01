export default function Genderchekbox(){
    return(
        <div className={"flex"}>
            <div className={"form-control"}>
                <label className={"label gap-3 cursor-pointer"}>
                    <span className={"label-text"}>Male</span>
                    <input type="radio" name="radio-3" className="radio radio-secondary"  />
                </label>
            </div>
            <div className={"form-control"}>
                <label className={"label gap-3 cursor-pointer"}>
                    <span className={"label-text"}>Male</span>
                    <input type="radio" name="radio-3" className="radio radio-secondary"  />
                </label>
            </div>
            <div className={"form-control"}>
                <label className={"label gap-3 cursor-pointer"}>
                    <span className={"label-text"}>Helicopter</span>
                    <input type="radio" name="radio-3" className="radio radio-secondary"  />
                </label>
            </div>
        </div>
    )
}
