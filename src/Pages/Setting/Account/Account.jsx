import img from '../../../../public/images/hinh.jpg';
function Account() {
    return (
        <div className="bg-white flex justify-center items-center h-[300px] my-5 border-2 rounded-2xl shadow-xl">
            <div
                className="flex flex-col items-center
                     "
            >
                <img src={img} className="w-[180px] h-[180px] rounded-full border-2 border-[#308BEB] shadow-sm shadow-[#308BEB]" />
                <h1 className=" text-2xl my-3 text-[#308BEB] font-bold ">Nguyen Nhu Ly</h1>
            </div>

        </div>
    );
}

export default Account;
