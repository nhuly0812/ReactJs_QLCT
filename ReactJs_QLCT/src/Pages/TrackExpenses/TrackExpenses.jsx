import  { useState } from 'react';
import AddTrackExpenses from './AddTrackExpenses/AddTrackExpenses';

function TrackExpenses() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-full h-auto shadow-lg flex justify-center items-center">
        <AddTrackExpenses jobs={jobs} setJobs={setJobs} />
      </div>
    </div>
  );
}

export default TrackExpenses;
