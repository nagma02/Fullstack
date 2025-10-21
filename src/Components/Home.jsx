import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'

function Home() {
    const navigate = useNavigate()
    
    // State for storing data
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // Page load hone par data fetch karenge
    useEffect(() => {
        // Logged in user ko check karenge
        const loggedUser = localStorage.getItem('user')
        if (loggedUser) {
            setUser(JSON.parse(loggedUser))
        }
        
        // Backend se images fetch karenge
        fetchImages()
    }, [])

    // Images ko backend se fetch karna
    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/images')
            if (response.data.success) {
                setImages(response.data.images)
            }
        } catch (error) {
            console.error('Images fetch karne mein error:', error)
        } finally {
            setLoading(false)
        }
    }

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        navigate('/login')
    }

    return (
        <div className="home">
            {/* User info dikhana agar logged in hai */}
            {user && (
                <div style={{ 
                    textAlign: 'right', 
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    marginBottom: '20px'
                }}>
                    <span>Welcome, <strong>{user.username}</strong>!</span>
                    <button 
                        onClick={handleLogout}
                        style={{
                            marginLeft: '15px',
                            padding: '5px 15px',
                            cursor: 'pointer'
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
            
            <h1>Welcome to the Home Page</h1>
            
            {/* Loading ya Gallery dikhana */}
            {loading ? (
                <p>Loading images...</p>
            ) : (
                <div className="gallery">
                    {images.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            )}
            
            <div className="nav-links">
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/admin" style={{ 
                    color: '#ff6b6b', 
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>🔧 Admin Panel</Link></p>
            </div>
        </div>
    )
}

export default Home;