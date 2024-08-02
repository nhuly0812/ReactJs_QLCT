import AccountAdmin from "./AccountAdmin/AccountAdmin";
import Nav from "./Nav/Nav";

function MenuAdmin() {
    return (
        <div className="w-1/4 bg-[#308BEB] flex justify-center shadow-lg shadow-[#308BEB]">
           <div>
           <AccountAdmin/>
           <Nav/>
           </div>
        </div>
    );
}

export default MenuAdmin;
