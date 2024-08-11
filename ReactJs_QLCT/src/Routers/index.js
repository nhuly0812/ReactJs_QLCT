import Account from '../Pages/Account/Accout';
import BudgetSettings from '../Pages/BudgetSettings/BudgetSettings';
import EditBudgetSettings from '../Pages/BudgetSettings/EditBudgetSettings/EditBudgetSettings';
import TableBudgetSettings from '../Pages/BudgetSettings/TableBudgetSettings/TableBudgetSettings';
import CostOverview from '../Pages/CostOverview/CostOverview';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Setting from '../Pages/Setting/Setting';
import EditTrackExpenses from '../Pages/TrackExpenses/EditTrackExpenses/EditTrackExpenses';
import TableTrackExpenses from '../Pages/TrackExpenses/TableTrackExpenses/TableTrackExpenses';
import TrackExpenses from '../Pages/TrackExpenses/TrackExpenses';
import { AdminLayout, LoginLayout } from '../components/Layouts';
import AdminPage from '../Pages/AdminPage/AdminPage';
import AdminUser from '../Pages/AdminUser/AdminUser';
import AdminExpense from '../Pages/AdminExpense/AdminExpense';

const publicRouter = [
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/register', component: Register, layout: LoginLayout },
];

const privateRouter = [
    { path: '/', component: Home },
    { path: '/trackExpenses', component: TrackExpenses },
    { path: '/budgetSettings', component: BudgetSettings },
    { path: '/costOverview', component: CostOverview },
    { path: '/setting', component: Setting },
    { path: '/account', component: Account },
    { path: '/admin', title: 'Home', component: AdminPage, layout: AdminLayout },
    { path: '/adminUser', title: 'User Management', component: AdminUser, layout: AdminLayout },
    { path: '/adminExpense', title: 'Expense Management', component: AdminExpense, layout: AdminLayout },
    { path: '/tableBudgetSettings', component: TableBudgetSettings },
    { path: '/editBudgetSettings/:id', component: EditBudgetSettings },
    { path: '/tableTrackExpenses', component: TableTrackExpenses },
    { path: '/editTrackExpenses/:id', component: EditTrackExpenses },
];

export { publicRouter, privateRouter };
