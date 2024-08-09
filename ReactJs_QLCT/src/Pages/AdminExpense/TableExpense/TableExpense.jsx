import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../../../services/jobs';
function TableExpense() {
    const [jobs, setJobs] = useState([]);
    const fetchjob = async () => {
        try {
            const data = await getJobs(`http://localhost:5000/TrackExpenses`);
            return data;
        } catch (error) {
            console.error('Error fetching budget setting:', error);
        }
    };

    useEffect(() => {
        const getjob = async () => {
            try {
                const tableServer = await fetchjob();
                setJobs(tableServer);
            } catch (error) {
                console.error('Error fetching budget settings:', error);
            }
        };

        getjob();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/TrackExpenses/${id}`, { method: 'DELETE' });
            setJobs(jobs.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting budget setting:', error);
        }
    };

    return (
        <div className={` mt-5 `}>
            <div className="flex justify-center pb-4">
                <table className="w-5/6 bg-white text-center shadow-md ">
                <tbody>

                    <tr className="h-14 border-b-2 text-[#308BEB]">
                        <th>ID</th>
                        <th>status</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>date</th>
                    </tr>
                    {jobs.map((item) => (
                        <tr key={item.id} className="h-16">
                            <td>{item.id}</td>

                            <td>{item.status}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.date}</td>
                            <td>
                                <Link to="#">
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
    );
}

export default TableExpense;
//
