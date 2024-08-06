import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemInput from './ItemInput/ItemInput';
import { createUser } from '../../services/account';

function Register() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const addUser = async () => {
        try {
            console.log('Đang cố gắng tạo người dùng:', user);
            const data = await createUser(user, 'http://localhost:5000/user');
    
            if (data) { // Kiểm tra nếu dữ liệu trả về hợp lệ
                console.log('Users have been created:', data);
                navigate('/login');
            } else {
                console.error("Create failed users, don't switch pages");
            }
        } catch (error) {
            console.error('Lỗi khi tạo người dùng:', error);
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
