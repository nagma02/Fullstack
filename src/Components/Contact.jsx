import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Contact.css'

function Contact() {
    // Form data ko store karne ke liye
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    // Loading aur messages ke liye
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState('')

    // Input change handle karna
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Form submit karna
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatusMessage('')
        
        try {
            // Backend ko data bhejenge
            const response = await axios.post('http://localhost:5000/api/contact', formData)
            
            if (response.data.success) {
                setStatusMessage(response.data.message)
                // Form ko clear kar denge
                setFormData({ name: '', email: '', message: '' })
            }
        } catch (error) {
            setStatusMessage('Message send karne mein error aaya. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            
            <div className="contact-content">
                <p>If you have any questions, feel free to reach out to us!</p>
                
                {/* Contact Information */}
                <ul>
                    <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
                    <li>Phone: <a href="tel:+911234567890">+91 123-456-7890</a></li>
                    <li>Address: Mumbai, Maharashtra, India</li>
                </ul>
                
                {/* Contact Form */}
                <div style={{ marginTop: '30px' }}>
                    <h2>Send us a message</h2>
                    
                    {/* Success/Error message */}
                    {statusMessage && (
                        <p style={{ 
                            color: statusMessage.includes('received') ? 'green' : 'red',
                            marginBottom: '15px'
                        }}>
                            {statusMessage}
                        </p>
                    )}
                    
                    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '10px',
                                fontSize: '16px'
                            }}
                        />
                        
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '10px',
                                fontSize: '16px'
                            }}
                        />
                        
                        <textarea 
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '10px',
                                fontSize: '16px',
                                resize: 'vertical'
                            }}
                        />
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                backgroundColor: loading ? '#ccc' : '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px'
                            }}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="nav-links">
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/admin" style={{ 
                    color: '#ff6b6b', 
                    fontWeight: 'bold'
                }}>🔧 Admin Panel</Link></p>
            </div>
        </div>
    )
}

export default Contact;