import React, { useEffect, useState } from 'react';
import Chart from './Chart/Chart'; // Đảm bảo đường dẫn chính xác
import { getJobs } from '../../services/jobs';

const CostOverview = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getJobs('http://localhost:5000/TrackExpenses');
        console.log('Dữ liệu nhận được:', data); 
        setExpenses(data); 
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
  
    fetchExpenses(); 
  }, []);
  

  return (
    <div className=''>
      <Chart expenses={expenses} />
    </div>
  );
};

export default CostOverview;
