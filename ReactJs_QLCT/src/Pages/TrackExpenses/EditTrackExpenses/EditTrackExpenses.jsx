import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InputEditTrackExpenses from './InputEditTrackExpenses/InputEditTrackExpenses';
import { getJobs, updateJobs } from '../../../services/jobs';
import { useNavigate } from 'react-router-dom';

function EditTrackExpenses() {
    const [job, setJob] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchTrackExpenses = async () => {
            try {
                const data = await getJobs(`http://localhost:5000/TrackExpenses/${id}`);
                setJob(data);
            } catch (error) {
                console.error('Error fetching budget setting:', error);
            }
        };

        fetchTrackExpenses();
    }, [id]);

    const updateTrackExpenses = async () => {
        try {
            await updateJobs(job, `http://localhost:5000/TrackExpenses/${id}`);
            navigate('/tableTrackExpenses');
        } catch (error) {
            console.error('Error updating budget setting:', error);
        }

        // try {
        //     const res = await fetch(`http://localhost:5000/TrackExpenses/${id}`, {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(job),
        //     });

        //     if (res.ok) {
        //         navigate('/tableTrackExpenses');
        //     } else {
        //         console.error('Failed to update budget setting:', res.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error updating budget setting:', error);
        // }
    };

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="bg-white w-[550px] h-[550px] flex flex-col justify-center items-center shadow-md shadow-gray-400 rounded-2xl">
                <h1 className="font-bold text-2xl text-[#308BEB] mb-5">EDIT EXPENSES</h1>
                <InputEditTrackExpenses job={job} setJob={setJob} />
                <button
                    className="border-2 px-3 py-2 w-[350px] mt-5 rounded-lg bg-[#308BEB] text-white flex justify-center shadow-md hover:bg-[#2677c7]"
                    onClick={updateTrackExpenses}
                >
                    UPDATE
                </button>
            </div>
        </div>
    );
}

export default EditTrackExpenses;
