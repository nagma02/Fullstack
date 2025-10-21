import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-content">
                <p className="intro">Welcome to our premium shirt collection! We are dedicated to providing high-quality, stylish shirts for every occasion.</p>
                
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>Founded with a passion for fashion, we bring you the finest collection of shirts that combine comfort, style, and quality. From casual to formal, we have something for everyone.</p>
                </div>

                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Premium quality fabrics</li>
                        <li>Latest fashion trends</li>
                        <li>Affordable prices</li>
                        <li>Fast delivery</li>
                        <li>Easy returns & exchanges</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>To make fashion accessible to everyone while maintaining the highest standards of quality and customer satisfaction.</p>
                </div>
            </div>

            <div className="nav-links">
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
                <p><Link to="/admin" style={{ 
                    color: '#ff6b6b', 
                    fontWeight: 'bold'
                }}>🔧 Admin Panel</Link></p>
                <p><Link to="/">Logout</Link></p>
            </div>
        </div>
    )
}

export default About;