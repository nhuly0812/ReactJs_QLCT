import AddBudgetSettings from './AddBudgetSettings/AddBudgetSettings';


function BudgetSettings() {
    return (
        <div className="w-full h-screen flex flex-col justify-center bg-gray-100">
            <div className="flex w-full justify-center my-5">
                <div className=" flex justify-end my-5">
                    <AddBudgetSettings />
                </div>
              
            </div>
        </div>
    );
}

export default BudgetSettings;
