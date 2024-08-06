import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs, deleteJobs } from '../../../services/jobs';
function TableTrackExpenses({ style }) {
 //tạo 1 state
    const [jobs, setJobs] = useState([]);
    //lấy dữ liệu 
    const fetchTrackExpenses = async () => {
        try {
            const data = await fetchJobs(`http://localhost:5000/TrackExpenses`);
            return data;
        } catch (error) {
            console.error('Error fetching budget setting:', error);
        }
    };
    //chỉ chạy một lần, ngay sau khi component được render lần đầu tiên.
    useEffect(() => {
        const getTrackExpenses = async () => {
            try {
                //lấy dữ liệu từ api và cập nhập jobs
                const tableServer = await fetchTrackExpenses();
                setJobs(tableServer);
            } catch (error) {
                console.error('Error fetching budget settings:', error);
            }
        };

        getTrackExpenses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteJobs(jobs, setJobs, id, `http://localhost:5000/TrackExpenses/${id}`);
        } catch (error) {
            console.error('Error deleting track expense:', error);
        }
    };

    return (
        <>
            <div className={`bg-white ${style} shadow-md`}>
                <div className="h-16 flex items-center pl-3 border-b-2">
                    <h2 className="font-bold text-[#308BEB]">Track Expenses</h2>
                </div>
                <div className="flex justify-center pb-4">
                    <table className="w-5/6">
                        <thead>
                            <tr className="h-14">
                                <th>Status</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((item) => (
                                <tr key={item.id} className="h-12 text-center">
                                    <td className={item.status === 'Completed' ? 'text-green-500' : 'text-red-500'}>
                                        {item.status}
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.amount}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Link to={`/editTrackExpenses/${item.id}`}>
                                            <button>
                                                <i className="fa-solid fa-pen-to-square text-blue-500 mx-1"></i>
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(item.id)}>
                                            <i className="fa-solid fa-trash text-red-500 mx-1"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TableTrackExpenses;
