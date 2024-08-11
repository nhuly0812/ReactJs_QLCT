import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJobs, deleteJobs } from '../../../services/jobs';
function TableTrackExpenses({ style }) {

    const [jobs, setJobs] = useState([]);

   
   // Sử dụng useEffect để gọi hàm getJobs
useEffect(() => {
    const getTrackExpenses = async () => {
      try {
        // Gọi hàm getJobs với URL tương ứng
        const tableServer = await getJobs('http://localhost:5000/TrackExpenses');
        setJobs(tableServer);
      } catch (error) {
        console.error('Error fetching track expenses:', error);
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
                                <th>Category</th>
                                <th>Budget</th>
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
                                    <td>{item.category}</td>
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
