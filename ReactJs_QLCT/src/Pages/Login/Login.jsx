import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemInput from './ItemInput/ItemInput';
import { login } from '../../services/account';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS cho Toastify


// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate();

// const ProceedLogin = async (e) => {
//     e.preventDefault();
//     // await login(email, password, navigate);
//     if (validate()) {
//         // console.log('proceed');
//         fetch('http://localhost:5000/user' + email)
//             .then((res) => {
//                 return res.json();
//             })
//             .then((res) => {
//                 console.log(res);
//                 if (Object.keys(res).length === 0) {
//                     toast.error('Please enter valid email');
//                 } else {
//                     if (res.password === password) {
//                         toast.success('success');
//                         navigate('/');
//                     } else {
//                         toast.error('Please enter valid credentials');
//                     }
//                 }
//             })
//             .catch((err) => {
//                 toast.error('login failed' + err.message);
//             });
//     }
// };

// const validate = () => {
//     let result = true;
//     if (email === '' || email === null) {
//         result = false;
//         toast.warning('Please email');
//     }
//     if (password === '' || password === null) {
//         result = false;
//         toast.warning('Please password');
//     }
//     return result;
// };


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const ProceedLogin = async (e) => {
        e.preventDefault();
        await login(email, password, navigate);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-2/5 h-screen flex justify-center">
                <div className="flex-col flex justify-center">
                    <h1 className="font-bold text-4xl flex justify-center pt-5 pb-5">Login</h1>
                    <ItemInput type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <ItemInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Link to="" className="text-sm text-[#308BEB] mb-4">
                        Forgot password?
                    </Link>
                    <button className='bg-[#308BEB] text-white font-bold border-2 rounded-lg w-80 px-4 py-3'
                    onClick={ProceedLogin}>Login</button>
                    <span className="text-sm flex justify-center ">
                        Do not have an account?{' '}
                        <Link to="/register" className="text-[#308BEB]">
                            {' '}
                            Register{' '}
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;
