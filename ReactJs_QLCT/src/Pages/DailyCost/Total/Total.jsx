
function Total({data}) {
  
  return (
    <div>
        <div className='w-[220px] h-[220px] bg-[#308BEB] flex justify-center items-center text-white rounded-full  shadow-md shadow-gray-500 ml-3'>
            {data.map((item, index)=>(
                <div key={index}>
            <h1 className='font-bold text-xl '>{item.title}</h1>
            <span className="text-xl">{item.types}</span>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Total