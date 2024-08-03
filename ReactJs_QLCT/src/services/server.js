// server.js hoặc authController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './models/User'; // Giả sử bạn có một mô hình User

const JWT_SECRET = 'your_secret_key'; // Sử dụng khóa bí mật mạnh mẽ
import bcrypt from 'bcrypt';


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
};

// services/authService.js

export const createUser = async (user, url) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        if (!res.ok) {
            throw new Error(`Lỗi khi tạo người dùng: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        throw error;
    }
};
