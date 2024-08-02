import {Link} from 'react-router-dom'
import hinh from '../../../../../../public/images/hinh.jpg'
function Round({ props }) {
  if (props == "image") {
    return (
      <div className="flex items-center pl-2">
       <Link to='/account'>
       <img className="w-10 h-10 rounded-full border-2" src={hinh} />
       </Link>
        <p className="font-bold p-2">Ly</p>
      </div>
    );
  } else {
    return (
      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center ">
        <i className="fa-solid fa-bell"></i>
      </div>
    );
  }
}

export default Round;
