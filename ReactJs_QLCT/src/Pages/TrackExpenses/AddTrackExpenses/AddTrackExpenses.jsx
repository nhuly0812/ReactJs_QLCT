import { useNavigate } from 'react-router-dom';
import InputTrackExpenses from './InputAddTrackExpenses/InputTrackExpenses';
import { useState } from 'react';
import { createJob } from '../../../services/jobs';

function AddTrackExpenses({ jobs, setJobs }) {
  const [job, setJob] = useState({});
  const navigate = useNavigate();

  const addExpenses = async () => {
    const data = await createJob(job, "http://localhost:5000/TrackExpenses")
    setJobs([...jobs, data]);
    navigate('/tableTrackExpenses'); 
  };

  return (
    <div className='bg-white w-[550px] h-[550px] flex flex-col justify-center items-center shadow-md shadow-gray-400 rounded-2xl'>
      <h1 className="font-bold text-2xl text-[#308BEB] mb-5">ADD EXPENSES</h1>
      <InputTrackExpenses setJob={setJob} />
      <button
        className="border-2 px-3 py-2 w-[350px] mt-5 rounded-lg bg-[#308BEB] text-white flex justify-center shadow-md hover:bg-[#2677c7]"
        onClick={addExpenses}
      >
        ADD
      </button>
    </div>
  );
}

export default AddTrackExpenses;
