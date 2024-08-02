import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../../../services/jobs';
function TableUser() {
    // const dataTableUser = [
    //     { id: 0, name: 'Lynn@fpt.edu.vn', display: 'Present' },
    //     { id: 1, name: 'Khoinn@fpt.edu.vn', display: 'Present' },
    //     { id: 2, name: 'Tamnn@fpt.edu.vn', display: 'Present' },
    //     { id: 3, name: 'Ninnn@fpt.edu.vn', display: 'Present' },
    // ];
    const  [user,setUser] = useState([]);
    const fetchUser = async ()=>{
        try {
            const data = await fetchJobs(`http://localhost:5000/user`);
            return data;
        } catch (error) {
            console.error('Error fetching budget setting:', error);
        }
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const tableServer = await fetchUser();
                setUser(tableServer);
            } catch (error) {
                console.error('Error fetching budget settings:', error);
            }
        };

        getUser();
    }, []);

    const handleDelete = async (id) => {
        try{
        await fetch(`http://localhost:5000/user/${id}`,
             { method: 'DELETE' });
        setUser(user.filter((item) => item.id !== id));
        }catch (error) {
            console.error('Error deleting budget setting:', error);
        }
    };

    return (
        <div className={` mt-5`}>
            <div className="flex justify-center pb-4">
                <table className="w-5/6 bg-white text-center shadow-md ">
                    <tr className='h-14 border-b-2 text-[#308BEB]'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Display</th>
                        <th></th>
                    </tr>
                    {user.map((item) => (
                        <tr key={item.id} 
                        className='h-16'>
                            <td>{item.id}</td>

                            <td>{item.email}</td>
                            <td>
                                <Link to="#">
                                    <button>
                                        <i className="fa-solid fa-pen-to-square text-blue-500 mx-1"></i>
                                    </button>
                                </Link>
                                <button onClick={()=> handleDelete(item.id)}>
                                    <i className="fa-solid fa-trash text-red-500 mx-1"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default TableUser;
// 