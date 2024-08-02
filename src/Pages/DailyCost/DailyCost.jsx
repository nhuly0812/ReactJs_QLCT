import Categogy from "./Category/Categogy"
import Total from "./Total/Total"

function DailyCost() {
  const dataTotal1 =[
    {
        title: 'Highest Category',
        types: <i className='fa-brands fa-shopify   text-2xl'></i>
    },
]
const dataTotal2 =[
    {
        title: 'Total Money',
        types: '1.695$'
    },
]
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Total data={dataTotal1}/>
      <Total data={dataTotal2}/>

      <Categogy/>
    </div>
  )
}

export default DailyCost