import hinh from "../../../../../public/images/hinh.jpg";
import Item from "./Item/Item";

function Menu() {
  
const listItem = [
  { id: 1, name: 'Home', path: '/', icon: 'fa-solid fa-house' },
  { id: 2, name: 'Track Expenses', path: '/trackExpenses', icon: 'fa-solid fa-coins' },
  { id: 3, name: 'Budget Settings', path: '/budgetSettings', icon: 'fa-solid fa-sack-dollar' },
  { id: 4, name: 'Cost Overview', path: '/costOverview', icon: 'fa-solid fa-chart-simple' },
  { id: 5, name: 'Daily Cost', path: '/dailyCost', icon: 'fa-solid fa-repeat' },
  { id: 6, name: 'Setting', path: '/setting', icon: 'fa-solid fa-gear' },

];

  return (
    <div className="w-1/4 min-h-screen bg-white text-[#1277E4] border-r-2">
      <div className="flex border-b-2 h-20  items-center">
        <div className="w-14 h-14 ml-5 border-4 rounded-full">
          <img className="w-full h-full rounded-full" src={hinh} />
        </div>
        <h2 className="pl-3 font-bold text-lg">Expense management</h2>
      </div>

      <div className="w-72 mt-5 ml-10">
          <div className=''>
          {listItem.map((item,index)=>(
            <Item key={index} link={item.path} icon={item.icon} title={item.name}></Item>
          ))}
          </div>
        
      </div>
    </div>
  );
}

export default Menu;
