import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

function Singup() {
    const navigate = useNavigate()
    
    // Form data ko store karne ke liye
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    
    // Loading aur messages ke liye
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // Input change handle karna
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Form submit karna
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setMessage('')
        
        try {
            // Backend ko data bhejenge
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData)
            
            if (response.data.success) {
                setMessage(response.data.message)
                // 2 second baad home page par jayenge
                setTimeout(() => {
                    navigate('/home');
                }, 2000)
            }
        } catch (error) {
            // Agar error aaye to dikhaenge
            setMessage(error.response?.data?.message || 'Signup failed! Kuch galat ho gaya.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='Singup'>
            <h1>Sign Up</h1>
            
            {/* Success/Error message dikhana */}
            {message && (
                <p style={{ 
                    color: message.includes('successful') ? 'green' : 'red',
                    marginBottom: '10px'
                }}>
                    {message}
                </p>
            )}
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    )
}

export default Singup