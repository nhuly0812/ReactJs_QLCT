import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemInput from './ItemInput/ItemInput';
import { createUser } from '../../services/account';

function Register() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const addUser = async () => {
        try {
            console.log('Trying to create user:', user);
            const data = await createUser(user, 'http://localhost:5000/user');
            console.log('User created:', data);
            navigate('/login');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-2/5 h-screen flex justify-center">
                <div className="flex-col flex justify-center">
                    <h1 className="font-bold text-4xl flex justify-center pt-5 pb-5">Register</h1>
                    <ItemInput setUser={setUser} />
                    <button
                        onClick={addUser}
                        className='bg-[#308BEB] text-white font-bold border-2 rounded-lg w-80 px-4 py-3'
                    >
                        Register
                    </button>
                    <span className="text-sm flex justify-center ">
                        Have already an account?{' '}
                        <Link to="/login" className="text-[#308BEB]"> Login </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
