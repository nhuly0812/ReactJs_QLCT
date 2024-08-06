
import Tables from './Tables/Tables';
import Transactions from './Transactions/Transactions';

function Home() {
    return (
        <div className="m-5">
            <Transactions></Transactions>
           <Tables/>
        </div>
    );
}

export default Home;
