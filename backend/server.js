// Simple Backend Server
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Frontend se connect karne ke liye
app.use(express.json()); // JSON data read karne ke liye

// ===== DATA STORAGE (Simple - Database ki jagah) =====
let users = []; // Users ko store karne ke liye
let images = [
    { id: 1, src: "scenic1.jpg", alt: "Casual Shirt" },
    { id: 2, src: "scenic2.jpg", alt: "Formal Shirt" },
    { id: 3, src: "scenic3.jpg", alt: "Denim Shirt" },
    { id: 4, src: "scenic4.jpg", alt: "White Shirt" },
    { id: 5, src: "scenic5.jpg", alt: "Polo Shirt" },
    { id: 6, src: "secnic6.jpg", alt: "Striped Shirt" },
    { id: 7, src: "secnic7.jpg", alt: "Checked Shirt" },
    { id: 8, src: "secnic8.jpg", alt: "Pattern Shirt" },
    { id: 9, src: "secnic9.jpg", alt: "Designer Shirt" }
];
let contacts = []; // Contact messages store karne ke liye

// ===== ROUTES =====

// 1. HOME - Server check karne ke liye
app.get('/', (req, res) => {
    res.json({ message: 'Backend Server chal raha hai! 🚀' });
});

// 2. SIGNUP - Naya user register karna
app.post('/api/auth/signup', (req, res) => {
    const { username, email, password } = req.body;
    
    // Check karenge ki user pehle se exist to nahi karta
    const userExists = users.find(user => user.email === email);
    
    if (userExists) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email already registered hai!' 
        });
    }
    
    // Naya user create karenge
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password // Real project mein password encrypt karna chahiye
    };
    
    users.push(newUser);
    
    res.status(201).json({ 
        success: true, 
        message: 'Signup successful! 🎉',
        user: { id: newUser.id, username: newUser.username, email: newUser.email }
    });
});

// 3. LOGIN - User ko login karana
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    // User ko find karenge
    const user = users.find(u => 
        (u.username === username || u.email === username) && u.password === password
    );
    
    if (!user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid username/email ya password!' 
        });
    }
    
    res.json({ 
        success: true, 
        message: 'Login successful! ✅',
        user: { id: user.id, username: user.username, email: user.email }
    });
});

// 4. IMAGES - Saari images fetch karna
app.get('/api/images', (req, res) => {
    res.json({ 
        success: true, 
        images: images 
    });
});

// 5. ADD IMAGE - Nayi image add karna
app.post('/api/images', (req, res) => {
    const { src, alt } = req.body;
    
    const newImage = {
        id: images.length + 1,
        src,
        alt
    };
    
    images.push(newImage);
    
    res.status(201).json({ 
        success: true, 
        message: 'Image added successfully!',
        image: newImage 
    });
});

// 6. CONTACT - Contact form submit karna
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    const newContact = {
        id: contacts.length + 1,
        name,
        email,
        message,
        date: new Date().toISOString()
    };
    
    contacts.push(newContact);
    
    res.status(201).json({ 
        success: true, 
        message: 'Message received! Hum jaldi reply karenge. 💌'
    });
});

// 7. GET ALL CONTACTS - Saare messages dekhna (Admin ke liye)
app.get('/api/contacts', (req, res) => {
    res.json({ 
        success: true, 
        contacts: contacts 
    });
});

// 8. GET ALL USERS - Saare users dekhna (Admin ke liye)
app.get('/api/users', (req, res) => {
    res.json({ 
        success: true, 
        users: users 
    });
});

// Server start karna
app.listen(PORT, () => {
    console.log(`🚀 Server chal raha hai: http://localhost:${PORT}`);
    console.log(`📝 Test karne ke liye: http://localhost:${PORT}`);
});
