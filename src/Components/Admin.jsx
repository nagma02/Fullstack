import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Admin.css'

function Admin() {
    const [users, setUsers] = useState([])
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAllData()
    }, [])

    // Saara data backend se fetch karenge
    const fetchAllData = async () => {
        try {
            // Users fetch karna (backend mein route add karna padega)
            const usersResponse = await axios.get('http://localhost:5000/api/users')
            setUsers(usersResponse.data.users || [])

            // Contact messages fetch karna
            const contactsResponse = await axios.get('http://localhost:5000/api/contacts')
            setContacts(contactsResponse.data.contacts || [])

        } catch (error) {
            console.error('Data fetch error:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div style={{ padding: '20px' }}>Loading admin data...</div>
    }

    return (
        <div className="admin-panel" style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>🔧 Admin Panel</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Yaha tumhe saara backend data dikhega
            </p>

            {/* Users Section */}
            <div style={{ marginBottom: '40px' }}>
                <h2>👥 Registered Users ({users.length})</h2>
                {users.length === 0 ? (
                    <p style={{ color: '#999' }}>Abhi tak koi user signup nahi kiya</p>
                ) : (
                    <table style={{ 
                        width: '100%', 
                        borderCollapse: 'collapse',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Username</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '12px' }}>{user.id}</td>
                                    <td style={{ padding: '12px' }}>{user.username}</td>
                                    <td style={{ padding: '12px' }}>{user.email}</td>
                                    <td style={{ padding: '12px' }}>{user.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Contact Messages Section */}
            <div style={{ marginBottom: '40px' }}>
                <h2>💌 Contact Messages ({contacts.length})</h2>
                {contacts.length === 0 ? (
                    <p style={{ color: '#999' }}>Abhi tak koi message nahi aaya</p>
                ) : (
                    <div>
                        {contacts.map((contact) => (
                            <div 
                                key={contact.id} 
                                style={{ 
                                    backgroundColor: 'white',
                                    padding: '15px',
                                    marginBottom: '15px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    marginBottom: '10px'
                                }}>
                                    <strong style={{ color: '#007bff' }}>
                                        {contact.name}
                                    </strong>
                                    <span style={{ color: '#999', fontSize: '14px' }}>
                                        {new Date(contact.date).toLocaleString('hi-IN')}
                                    </span>
                                </div>
                                <p style={{ margin: '5px 0', color: '#666' }}>
                                    📧 Email: {contact.email}
                                </p>
                                <p style={{ 
                                    margin: '10px 0',
                                    padding: '10px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '5px',
                                    borderLeft: '3px solid #007bff'
                                }}>
                                    {contact.message}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Refresh Button */}
            <button 
                onClick={fetchAllData}
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                🔄 Refresh Data
            </button>

            <div style={{ 
                marginTop: '30px',
                padding: '15px',
                backgroundColor: '#fff3cd',
                borderRadius: '5px',
                border: '1px solid #ffc107'
            }}>
                <h3>⚠️ Important Note:</h3>
                <p>Yeh data <strong>backend/server.js</strong> ki memory mein store hai.</p>
                <p>Agar server restart hoga to saara data <strong>delete</strong> ho jayega.</p>
                <p>Real project mein <strong>Database</strong> (MongoDB/PostgreSQL) use karna chahiye.</p>
            </div>

            {/* Navigation Links */}
            <div style={{ 
                marginTop: '30px',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h3>📍 Navigation</h3>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/home" style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#007bff', 
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px'
                    }}>
                        🏠 Home
                    </Link>
                    <Link to="/contact" style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#28a745', 
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px'
                    }}>
                        📧 Contact
                    </Link>
                    <Link to="/about" style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#17a2b8', 
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px'
                    }}>
                        ℹ️ About
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Admin
