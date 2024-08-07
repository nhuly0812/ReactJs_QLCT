import { toast } from 'react-toastify';

export const login = async (email, password, navigate) => {
    try {
        if (!email) {
            toast.error('Please enter an email');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Invalid email format');
            return;
        }

        if (!password) {
            toast.error('Please enter a password');
            return;
        }

        const res = await fetch(`http://localhost:5000/user`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch users: ${res.statusText}`);
        }

        const users = await res.json();

        // Tìm người dùng với email khớp
        const user = users.find(user => user.email === email);

        if (!user) {
            toast.error('Email is not registered');
            return;
        }

        // Kiểm tra mật khẩu
        if (user.password !== password) {
            toast.error('Incorrect password');
            return;
        }

        // Nếu email và mật khẩu đúng
        toast.success('Login successful');
        navigate('/'); 
    } catch (err) {
        console.error('Fetch error:', err);
        toast.error('Login failed due to: ' + err.message);
    }
};


export const createUser = async (user, url) => {
    try {
        const { email, password, confirm } = user;

        if (!email) {
            toast.error('Please enter an email');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Invalid email format');
            return;
        }

        if (!password) {
            toast.error('Please enter an password');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        if (!confirm) {
            toast.error('Please confirm the password');
            return;
        } else if (confirm !== password) {
            toast.error('Password mismatch');
            return;
        }

        // Gọi API để tạo người dùng
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error(`Failed to create user: ${res.statusText}`);
        }

        const data = await res.json();
        toast.success('Đăng ký thành công');
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        toast.error('Đăng ký thất bại do: ' + error.message);
        throw error;
    }
};



