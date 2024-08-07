import React, { useEffect, useState } from 'react';
import Chart from './Chart/Chart'; // Đảm bảo đường dẫn chính xác
import { getJobs } from '../../services/jobs';

const CostOverview = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // Sử dụng getJobs để lấy dữ liệu từ API
        const data = await getJobs('http://localhost:5000/TrackExpenses');
        console.log('Dữ liệu nhận được:', data); // Xem dữ liệu nhận được
        setExpenses(data); // Cập nhật state với dữ liệu
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
  
    fetchExpenses(); // Gọi hàm để lấy dữ liệu
  }, []);
  

  return (
    <div className=''>
      <Chart expenses={expenses} />
    </div>
  );
};

export default CostOverview;
