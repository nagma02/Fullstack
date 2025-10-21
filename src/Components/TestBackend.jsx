import { useState, useEffect } from 'react'
import axios from 'axios'

function TestBackend() {
    const [status, setStatus] = useState('Testing backend connection...')
    const [backendData, setBackendData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        testBackendConnection()
    }, [])

    const testBackendConnection = async () => {
        try {
            // Test 1: Basic connection
            const response = await axios.get('http://localhost:5000/')
            setStatus('✅ Backend Connected!')
            setBackendData(response.data)

            // Test 2: Get images
            const imagesResponse = await axios.get('http://localhost:5000/api/images')
            console.log('Images from backend:', imagesResponse.data)

        } catch (err) {
            setStatus('❌ Backend connection failed!')
            setError(err.message)
            console.error('Backend Error:', err)
        }
    }

    const testSignup = async () => {
        try {
            const testUser = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'test123'
            }
            const response = await axios.post('http://localhost:5000/api/auth/signup', testUser)
            alert('Signup Test: ' + response.data.message)
        } catch (err) {
            alert('Signup Error: ' + err.response?.data?.message || err.message)
        }
    }

    const testLogin = async () => {
        try {
            const testUser = {
                username: 'testuser',
                password: 'test123'
            }
            const response = await axios.post('http://localhost:5000/api/auth/login', testUser)
            alert('Login Test: ' + response.data.message)
        } catch (err) {
            alert('Login Error: ' + err.response?.data?.message || err.message)
        }
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>🔧 Backend Test Page</h1>
            
            <div style={{ 
                padding: '20px', 
                backgroundColor: status.includes('✅') ? '#d4edda' : '#f8d7da',
                border: '1px solid',
                borderColor: status.includes('✅') ? '#c3e6cb' : '#f5c6cb',
                borderRadius: '5px',
                marginBottom: '20px'
            }}>
                <h2>{status}</h2>
                {backendData && (
                    <p>Backend Response: {JSON.stringify(backendData)}</p>
                )}
                {error && (
                    <p style={{ color: 'red' }}>Error: {error}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>Manual Tests:</h3>
                <button 
                    onClick={testSignup}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Test Signup
                </button>
                
                <button 
                    onClick={testLogin}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Test Login
                </button>
                
                <button 
                    onClick={testBackendConnection}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Retry Connection
                </button>
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
                <h3>Instructions:</h3>
                <ol>
                    <li>Make sure backend is running: <code>cd backend && node server.js</code></li>
                    <li>Backend should be on: <strong>http://localhost:5000</strong></li>
                    <li>Click "Test Signup" to create a test user</li>
                    <li>Click "Test Login" to login with test user</li>
                    <li>Check browser console (F12) for detailed logs</li>
                </ol>
            </div>
        </div>
    )
}

export default TestBackend
