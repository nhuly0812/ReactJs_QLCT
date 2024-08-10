import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs,deleteJobs } from "../../../services/jobs";

function TableBudgetSettings({ styte }) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getBudgetSettings = async () => {
            try {
                const response = await fetch('http://localhost:5000/budgetSettings');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching budget settings:', error);
            }
        };

        getBudgetSettings(); 
    }, []);

// Xóa ngân sách
const handleDelete = async (id) => {
        try { 
            await deleteJobs(jobs, setJobs, id, `http://localhost:5000/budgetSettings/${id}`);
        } catch (error) {
            console.error('Error deleting track expense:', error);
        }
    };


    return (
        <div className={`bg-white gap-5 mt-5 ${styte} shadow-md`}>
            <div className="h-16 flex items-center pl-3 border-b-2">
                <h2 className="font-bold text-[#308BEB]">Budget Settings</h2>
            </div>
            <div className="flex justify-center pb-4">
                <table className="w-5/6">
                    <thead>
                        <tr className="h-14">
                            <th>Category</th>
                            <th>Budget</th>
                            <th>Note</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((item) => (
                            <tr key={item.id} className="h-12 text-center">
                                <td>{item.category}</td>
                                <td>${item.budget}</td>
                                <td>{item.note}</td>
                                <td>
                                    <Link to={`/editBudgetSettings/${item.id}`}>
                                        <button>
                                            <i className="fa-solid fa-pen-to-square text-blue-500 mx-1"></i>
                                        </button>
                                    </Link>
                                    <button onClick={() => 
                                    //truyền id muốn xóa vào handleDelete
                                    handleDelete(item.id)}>
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

export default TableBudgetSettings;
