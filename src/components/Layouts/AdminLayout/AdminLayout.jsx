import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import MenuAdmin from '../components/MenuAdmin/MenuAdmin';

function AdminLayout({ children, title }) {
    console.log(title);
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <MenuAdmin />
            <div className="w-full">
                <HeaderAdmin title={title} />
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
