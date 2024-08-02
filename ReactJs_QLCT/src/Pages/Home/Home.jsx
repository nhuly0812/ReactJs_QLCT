
import { Link } from 'react-router-dom';
import Tables from './Tables/Tables';
import Transactions from './Transactions/Transactions';

function Home() {
    return (
        <div className="m-5">
            <Transactions></Transactions>
           <Tables/>
           <Link to={'/FinancialReport'}>hehe</Link>
        </div>
    );
}

export default Home;
