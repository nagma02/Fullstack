# Backend Integration Guide 🚀

## Kya-kya add kiya gaya hai:

### ✅ Backend Server (Node.js + Express)
- **Location**: `/backend` folder
- Simple aur easy-to-understand code
- Koi database nahi - sirf arrays mein data store kiya hai (testing ke liye)

### ✅ Features Added:

#### 1. **User Signup** (`/api/auth/signup`)
- Naye users ko register kar sakte ho
- Email check hota hai (duplicate nahi hona chahiye)
- Success message milta hai

#### 2. **User Login** (`/api/auth/login`)
- Username ya email se login kar sakte ho
- Password verify hota hai
- Login ke baad user info localStorage mein save hota hai

#### 3. **Dynamic Image Gallery** (`/api/images`)
- Backend se images fetch hoti hain
- Naye images add kar sakte ho
- Loading state hai

#### 4. **Contact Form** (`/api/contact`)
- Message backend ko bhej sakte ho
- Success message milta hai
- Form automatically clear ho jata hai

---

## 🏃 Kaise Run Karein:

### Step 1: Backend Start Karo
```bash
cd backend
npm start
```
✅ Backend chalega: `http://localhost:5000`

### Step 2: Frontend Start Karo (Naya terminal kholo)
```bash
npm run dev
```
✅ Frontend chalega: `http://localhost:5173` (ya jo Vite dikhaye)

---

## 📝 Testing Kaise Karein:

### 1. Signup Test:
- `/signup` page par jao
- Username, Email, Password dalo
- "Sign Up" button click karo
- Success message dikhega aur home page par redirect ho jaoge

### 2. Login Test:
- Pehle signup karo
- Phir `/login` page par jao
- Username (ya email) aur password dalo
- Login ho jaoge aur home page par redirect ho jaoge
- Home page par tumhara naam dikhega

### 3. Logout Test:
- Home page par "Logout" button dikhega (agar logged in ho)
- Click karo to logout ho jaoge

### 4. Contact Form Test:
- `/contact` page par jao
- Form fill karo (Name, Email, Message)
- "Send Message" button click karo
- Success message dikhega

---

## 🔍 Backend Endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server check karne ke liye |
| POST | `/api/auth/signup` | Naya user register |
| POST | `/api/auth/login` | User login |
| GET | `/api/images` | Saari images fetch |
| POST | `/api/images` | Nayi image add |
| POST | `/api/contact` | Contact message send |
| GET | `/api/contacts` | Saare messages dekhne ke liye |

---

## 💡 Code Samajhne ke liye:

### Backend Code (`backend/server.js`):
- **Line 1-3**: Packages import kiye
- **Line 8-9**: Middleware setup (CORS aur JSON)
- **Line 12-15**: Data storage (arrays mein)
- **Line 20-30**: Signup route - naye users ko save karta hai
- **Line 33-50**: Login route - users ko verify karta hai
- **Line 53-58**: Images route - gallery ke liye
- **Line 61-76**: Contact route - messages store karta hai

### Frontend Components:
- **Signup.jsx**: Form se data leke backend ko POST request bhejta hai
- **Login.jsx**: Login karta hai aur user info localStorage mein save karta hai
- **Home.jsx**: Backend se images fetch karta hai aur user info dikhata hai
- **Contact.jsx**: Contact form submit karta hai backend ko

---

## 🎯 Important Concepts:

### 1. **useState**: Data ko store karne ke liye
```javascript
const [formData, setFormData] = useState({ username: '', email: '' })
```

### 2. **useEffect**: Page load hone par code run karne ke liye
```javascript
useEffect(() => {
    fetchImages() // Images fetch karenge
}, [])
```

### 3. **axios.post**: Backend ko data bhejne ke liye
```javascript
await axios.post('http://localhost:5000/api/auth/signup', formData)
```

### 4. **axios.get**: Backend se data lene ke liye
```javascript
await axios.get('http://localhost:5000/api/images')
```

### 5. **localStorage**: Browser mein data save karne ke liye
```javascript
localStorage.setItem('user', JSON.stringify(userData))
```

---

## 🛠️ Next Steps (Aage kya kar sakte ho):

1. **Real Database**: MongoDB ya PostgreSQL use kar sakte ho
2. **Password Encryption**: bcrypt use karke passwords encrypt karo
3. **JWT Tokens**: Proper authentication ke liye
4. **Image Upload**: Actual images upload karne ki functionality
5. **Validation**: Better form validation
6. **Error Handling**: More detailed error messages
7. **Styling**: Forms ko aur achha bana sakte ho

---

## 🐛 Troubleshooting:

### Backend nahi chal raha?
```bash
cd backend
npm install
npm start
```

### Frontend se backend connect nahi ho raha?
- Check karo backend chal raha hai ya nahi (`http://localhost:5000`)
- CORS error ho to backend mein CORS enable hai

### CORS Error?
Backend mein already `cors` package use kiya hai, so no problem!

---

## 📚 Learning Resources:

- **React Hooks**: useState, useEffect
- **Axios**: API calls ke liye
- **Express**: Backend framework
- **REST API**: API design patterns

---

Enjoy coding! 🎉 Questions ho to pooch lena!
