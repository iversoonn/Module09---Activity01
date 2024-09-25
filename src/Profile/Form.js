import React, {useState} from "react";
import './Form.css'

function Forms({ user, onUpdate }) {
    const [formData, setFormData] = useState({ 
        name: user.name, 
        email: user.email, 
        username: user.username 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form className="mang-inasal-form" onSubmit={handleSubmit}>
            <label className="form-label">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
            </label>

            <label className="form-label">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
            </label>

            <label className="form-label">
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" />
            </label>

            <button type="submit" className="form-button">Update Profile</button>
        </form>
    );
}

export default Forms;