import { Link } from "react-router-dom";

function Nav() {
    const dataNav = [
        { icon: 'fa-solid fa-house', name: 'Home Admin', path: '/admin' },
        { icon: 'fa-solid fa-user-gear', name: 'User management', path: '/adminUser' },
        { icon: 'fa-solid fa-money-check-dollar', name: 'Expense management', path: '/adminExpense' },
    ];
    return (
        <div className="text-white max-w-[300px]  ">
            {dataNav.map((item, index) => (
                <ul key={index}>
                   <Link to={item.path}> <li className="h-10 flex items-center gap-5 px-3 py-2 hover:bg-white hover:text-[#308BEB] ">
                        <i className={item.icon}></i> {item.name}
                    </li></Link>
                </ul>
            ))}
        </div>
    );
}

export default Nav;
