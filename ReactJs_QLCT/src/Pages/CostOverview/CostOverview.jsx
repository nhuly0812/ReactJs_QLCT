import React, { useEffect, useState } from 'react';
import Chart from './Chart/Chart'; // Đảm bảo đường dẫn chính xác

const CostOverview = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/TrackExpenses')
      .then(response => response.json())
      .then(data => {
        console.log('Dữ liệu nhận được:', data); // Xem dữ liệu nhận được
        setExpenses(data); // Cập nhật state với dữ liệu
      })
      .catch(error => console.error('Lỗi khi lấy dữ liệu:', error));
  }, []);

  return (
    <div className=''>
      <Chart expenses={expenses} />
    </div>
  );
};

export default CostOverview;
