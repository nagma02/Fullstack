import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate()

    // Form submit karna - Signup page par jayega
    const handleSubmit = (e) => {
        e.preventDefault();
        // Login button click karne par signup page par jayenge
        navigate('/signup');
    }

    return (
        <div className="login">
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username or Email" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;