import TableBudgetSettings from "../../BudgetSettings/TableBudgetSettings/TableBudgetSettings";
import TableTrackExpenses from "../../TrackExpenses/TableTrackExpenses/TableTrackExpenses";

function Tables() {
    return (
        <div className="flex justify-center gap-5 w-full]">
            <TableTrackExpenses style='w-[50%] gap-5 mt-5 '/>
            <TableBudgetSettings styte='w-[50%] h-[50%]  '/>
        </div>
    );
}

export default Tables;
