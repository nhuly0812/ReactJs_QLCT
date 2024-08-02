import ItemAccount from "./ItemAccount/ItemAccount"

function ContentAccount() {
  return (
    <div className="w-[400px] h-[500px] bg-white flex justify-center items-center">
        <div className="">
            <h2 className="font-bold text-2xl h-24 flex justify-center items-center text-[#308BEB]">Information</h2>
            <ItemAccount/>
        </div>
    </div>
  )
}

export default ContentAccount