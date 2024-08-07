import React, { useState, useEffect } from 'react';
import CostOverview from '../../CostOverview/CostOverview';
import Money from './Money/Money';
import { getJobs } from '../../../services/jobs.js'; // Đảm bảo bạn nhập đúng đường dẫn tới hàm getJobs


function Transactions() {
  const [budgetSettings, setBudgetSettings] = useState([]);

  const fetchBudgetSettings = async () => {
    try {
      // Sử dụng getJobs để lấy dữ liệu từ API
      const data = await getJobs('http://localhost:5000/budgetSettings');
      // Cập nhật state với dữ liệu nhận được
      setBudgetSettings(data);
    } catch (error) {
      console.error('Error fetching budget settings:', error);
    }
  };

  useEffect(() => {
    fetchBudgetSettings();
  }, []);

  // Group budgetSettings by category and calculate total for each category
  const categorizedBudgets = budgetSettings.reduce((acc, budget) => {
    const category = budget.category || 'Unknown'; // Use 'Unknown' if category is missing
    if (!acc[category]) {
      acc[category] = { total: 0, bgColor: '' }; // Initialize the category
    }
    acc[category].total += parseFloat(budget.budget);
    return acc;
  }, {});

  // Example colors for categories, you may want to customize or fetch these from somewhere
  const categoryColors = {
    Food: 'bg-red-500',
    Transportation: 'bg-pink-500',
    Shopping: 'bg-green-500',
    Entertainment: 'bg-yellow-500',
    Unknown: 'bg-gray-500'
  };

  // Convert categorizedBudgets object to an array
  const data = Object.keys(categorizedBudgets).map(category => ({
    title: category,
    total: categorizedBudgets[category].total,
    bgColor: categoryColors[category] || 'bg-gray-500'
  }));

  return (
    <div className='bg-white shadow-lg'>
      <div className='h-16 flex items-center pl-3 border-b-2'>
        <h2 className='font-bold text-[#308BEB]'>Transactions</h2>
      </div>
      <div className='flex p-5'>
        <div className='w-2/4 grid grid-cols-2 gap-4'>
          {data.map((item, index) => (
            <Money
              key={index}
              bgColor={item.bgColor}
              total={item.total}
              title={item.title}
            />
          ))}
        </div>
        <div className='w-2/4 m-2'>
          <CostOverview />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
