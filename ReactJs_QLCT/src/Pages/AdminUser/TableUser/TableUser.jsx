import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJobs,deleteJobs} from '../../../services/jobs';
function TableUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getJobs(`http://localhost:5000/user`);
                setUser(data);
            } catch (error) {
                console.error('Error fetching budget setting:', error);
            }
        };
    
        fetchUser();
    }, []);
    

    const handleDelete = async (id) => {
        try {
            await deleteJobs(user, setUser, id, `http://localhost:5000/user/${id}`);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    

    return (
        <div className={` mt-5`}>
            <div className="flex justify-center pb-4">
                <table className="w-5/6 bg-white text-center shadow-md ">
                <tbody>

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
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default TableUser;
// 