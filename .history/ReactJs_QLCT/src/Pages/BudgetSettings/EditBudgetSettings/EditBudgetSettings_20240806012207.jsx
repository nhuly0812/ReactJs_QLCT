import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InputEditBudgetSettings from './InputEditBudgetSettings/InputEditBudgetSettings';
import { getJobs, updateJobs } from '../../../services/jobs';

function EditBudgetSettings() {
    //tạo state lưu trữ và cập nhật ngân sách được lấy từ server
    const [job, setJob] = useState({});
    //điều hướng người dùng
    const navigate = useNavigate();
    //dùng useParams để lấy tham số id từ url
    const { id } = useParams();

    //dùng useEffect để 
    useEffect(() => {
        const fetchBudgetSetting = async () => {
            try {
                const data = await getJobs(`http://localhost:5000/budgetSettings/${id}`);
                setJob(data);
            } catch (error) {
                console.error('Error fetching budget setting:', error);
            }
        };

        fetchBudgetSetting();
    }, [id]);

    const updateBudget = async () => {
        try {
         await updateJobs(job,`http://localhost:5000/budgetSettings/${id}`);

            navigate('/tableBudgetSettings');
        } catch (error) {
            console.error('Error updating budget setting:', error);
        }
    };

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="bg-white w-[550px] h-[550px] flex flex-col justify-center items-center shadow-md shadow-gray-400 rounded-2xl">
                <h1 className="font-bold text-2xl text-[#308BEB] mb-5">EDIT BUDGET</h1>
                <InputEditBudgetSettings job={job} setJob={setJob} />
                <button 
                    className="border-2 px-3 py-2 w-[350px] mt-5 rounded-lg bg-[#308BEB] text-white flex justify-center shadow-md hover:bg-[#2677c7]"
                    onClick={updateBudget}
                >
                    UPDATE
                </button>
            </div>
        </div>
    );
}

export default EditBudgetSettings;
