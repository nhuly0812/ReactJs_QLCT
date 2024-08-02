import Chart from './Chart/Chart'

function CostOverview() {
  const expenses = [
    { status: 'Completed', name: 'Groceries', amount: 100, date: '2024-07-01' },
    { status: 'Pending', name: 'Rent', amount: 500, date: '2024-07-03' },
    { status: 'Completed', name: 'Utilities', amount: 150, date: '2024-07-05' },
    { status: 'Pending', name: 'Entertainment', amount: 200, date: '2024-07-06' },
  ];
  return (
    <div className=''>
      <Chart expenses={expenses} />
    </div>
  )
}

export default CostOverview