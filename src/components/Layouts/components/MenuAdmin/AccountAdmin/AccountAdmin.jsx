import img from '../../../../../../public/images/hinh.jpg';

function AccountAdmin() {
  return (
    <div>
        
<div className='flex justify-center my-5 '>
         <div className='flex-col text-center'>
            
         <img src={img} className="rounded-full border-4 w-[200px] h-[200px] flex justify-center shadow-lg" />
      
      <h1 className='font-bold text-lg text-white my-3'>Nguyen Nhu Ly</h1>
         </div>
            </div>
    </div>
  )
}

export default AccountAdmin