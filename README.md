# 🔐 Detecting Data Leaks Using SQL Injection

A secure web-based system designed to detect and prevent SQL Injection attacks while protecting sensitive user data using encryption and multi-layer security techniques.

---

## 📌 Project Overview

This project demonstrates a lightweight cloud-ready security system that protects applications from SQL Injection attacks and prevents data leaks.

The system includes:

- SQL Injection Detection
- AES-256 Style Encryption Simulation
- Capability Code Access Control
- Double-Layer Security Protocol
- Attack Logging System
- Lightweight Web Interface

---

# 🚀 Features

## ✅ SQL Injection Detection
The system detects malicious SQL patterns such as:

- `' OR 1=1 --`
- `UNION SELECT`
- `DROP TABLE`
- Comment-based injections

and blocks them instantly.

---

## 🔐 AES-256 Encryption Simulation
Sensitive user credentials are encrypted before storage using a frontend AES-256 style simulation.

Example:
```javascript
encryptData("admin123")
```

---

## 🛡 Double Layer Security

### Layer 1:
SQL keyword and pattern detection using Regex.

### Layer 2:
Special character filtering to prevent unsafe input execution.

---

## 🔑 Capability Code Mechanism
The system uses a capability-based authorization mechanism to control secure server access.

Example:
```javascript
const capabilityCode = "SECURE_ACCESS_2026";
```

---

## 📋 Attack Logging
Every SQL Injection attempt is logged and displayed in the interface for monitoring.

---

## 🌐 Cloud Ready & Lightweight
- Runs directly in browser
- No heavy backend required
- Easy deployment on:
  - GitHub Pages
  - Netlify
  - Vercel

---

# 📂 Project Structure

```plaintext
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Regex Security Validation
- Encryption Simulation

---

# ▶ How to Run

## Step 1:
Download or clone the repository.

```bash
git clone https://github.com/your-username/sql-injection-detection.git
```

## Step 2:
Open the project folder.

## Step 3:
Run `index.html` in any modern browser.

---

# 🧪 Test SQL Injection Inputs

Try entering these malicious inputs:

```sql
' OR 1=1 --
```

```sql
DROP TABLE users;
```

```sql
UNION SELECT password FROM users;
```

The system will automatically detect and block them.

---

# 📸 Sample Output

## ✅ Valid Login
```plaintext
Secure Login Successful!
```

## ❌ SQL Injection Attempt
```plaintext
SQL Injection Attempt Blocked!
```

---

# 🔒 Security Concepts Used

| Security Feature | Purpose |
|---|---|
| AES Encryption | Protect sensitive data |
| Regex Validation | Detect SQL attacks |
| Capability Code | Secure access control |
| Input Filtering | Prevent malicious execution |
| Attack Logging | Monitor suspicious activity |

---

# 📈 Future Enhancements

- Real AES-256 Encryption Integration
- Backend Database Connection
- Node.js + MySQL Support
- JWT Authentication
- Admin Dashboard
- Cloud Database Security

---

# 👨‍💻 Author

Developed by Sachin G
