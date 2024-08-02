
import CostOverview from '../../CostOverview/CostOverview';
import Money from './Money/Money'

const data = [
  { price: 100, title: 'Food', bgColor: 'bg-red-500' },
  { price: 200, title: 'Transportation	', bgColor: ' bg-pink-500' },
  { price: 300, title: 'Shopping', bgColor: 'bg-green-500' },
  { price: 400, title: 'Entertainment', bgColor: 'bg-yellow-500' },
];
function Transactions() {

  return (
    <div className=' bg-white shadow-lg '>
    <div className='h-16 flex items-center pl-3 border-b-2 '>
        <h2 className='font-bold text-[#308BEB]  '>Transactions</h2>
    </div>
        <div className='flex p-5'>
        <div className='w-2/4 grid grid-cols-2 gap-4'>
           {data.map((item,index)=>(
            <Money key={index} bgColor={item.bgColor} price={item.price} title={item.title}/>
           ))}
        </div>
       <div className='w-2/4 m-2'>
        <CostOverview/>
       </div>
    </div>
    </div>
  )
}

export default Transactions