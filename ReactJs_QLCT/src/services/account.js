//services/authService.js
import { toast } from 'react-toastify';

export const login = async (email, password, navigate) => {
    console.log(email, password);
    try {
        if (!email) {
            toast.error('Please enter a email');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Invalid email format');
            return;
        }

        if (!password) {
            toast.error('Please enter a password');
            return;
        }
        console.log('Starting login process...');
        const res = await fetch(`http://localhost:5000/user/${email}`);
        // Kiểm tra phản hồi từ server
        if (!res.ok) {
            throw new Error(`Failed to fetch user: ${res.statusText}`);
        }
        const resp = await res.json();
        // Kiểm tra phản hồi từ API
        if (Object.keys(resp).length === 0) {
            toast.error('Please enter a valid email');
        } else if (resp.password !== password) {
            toast.error('Invalid credentials');
        } else {
            toast.success('Login successful');
            navigate('/');
        }
    } catch (err) {
                // Xử lý lỗi từ fetch hoặc các lỗi khác
        console.error('Fetch error:', err);
        toast.error('Login failed due to: ' + err.message);
    }
};

export const createUser = async (user, url) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!res.ok) {
            throw new Error(`Failed to create job: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error creating job:', error);
        throw error;
    }
};
