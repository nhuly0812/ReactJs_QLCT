import {Link} from 'react-router-dom'


function Item({ icon, title, link }) {

  return (
    <div>
      <Link to={link} className="flex items-center  pl-5 rounded-xl w-full h-12 hover:bg-[#1277E4] hover:text-white ">
         <i className={icon}></i>
         <p className="pl-3 ">{title}</p>
      </Link>
    </div>
  );
}

export default Item;
