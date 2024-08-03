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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error(`Failed to login: ${res.statusText}`);
        }

        const data = await res.json();

        if (data.token) {
            toast.success('Login successful');
            navigate('/'); // Chuyển hướng người dùng đến trang home sau khi đăng nhập thành công
        } else {
            toast.error('Invalid credentials');
        }
    } catch (err) {
        console.error('Fetch error:', err);
        toast.error('Login failed due to: ' + err.message);
    }
};

export const createUser = async (user, url) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!res.ok) {
            throw new Error(`Failed to create user: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
