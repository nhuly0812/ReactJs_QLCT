import hinh from '../../../../public/images/hinh.jpg'
function ImgAccount() {
  const icons =[{
    icon: "fa-brands fa-facebook",
    styleBg: 'text-[#186AAD]'
  },
  {
    icon: "fa-brands fa-github",
    styleBg: ''

  },
  {
    icon: "fa-brands fa-telegram",
    styleBg: 'text-[#308BEB]'

  }

]

  return (
    <div className='w-[400px] h-[500px] bg-[#308BEB] flex justify-center items-center p-5'>
      <div className='flex flex-col '>
        <img src={hinh} className='w-[250px] h-[250px] rounded-full border-4 shadow-lg'/>
        <p className='text-white text-center my-6 text-xl'>Nguyen Nhu Ly</p>

        <div className='flex justify-center w-[250px] h-11 bg-white items-center shadow-gray-700 shadow-md'>
          {icons.map((item, index)=>(
            <i key={index} className={`${item.icon} mx-3 text-xl ${item.styleBg}`}></i>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ImgAccount