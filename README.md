# 🔒 security-kit

A lightweight, reusable middleware module for securing backend applications.  
Includes commonly needed utilities such as authentication protection, role-based access control, and global error handling.

> ⚡ Designed for Node.js + Express.js projects using ES Modules (import/export)

---

## 🚀 Features

- 🛡️ `protect` middleware for authenticated routes  
- 👮‍♂️ `admin` middleware for role-based access  
- ❌ Global error handler for cleaner API responses  
- ✅ Easy to integrate into any Express.js backend project

---

## 📦 Installation

```bash
npm install tesla77coded/security-kit
```

If you’re using it locally for now:

```bash
git clone https://github.com/tesla77coded/security-kit.git
```

Then copy it into your project and install dependencies:

```bash
npm install
```

---

## 🧪 Usage Example

Assume the folder structure:

```
my-app/
├── controllers/
├── routes/
├── middleware/
│   └── security-kit/
```

### 1. Protect Routes (Authentication)

```js
import { protect } from './middleware/security-kit/protect.js';

app.use('/api/private', protect, privateRoutes);
```

### 2. Role-Based Access (Admin)

```js
import { admin } from './middleware/security-kit/admin.js';

app.use('/api/admin', protect, admin, adminRoutes);
```

### 3. Global Error Handler

In your `app.js` or `server.js`:

```js
import errorHandler from './middleware/security-kit/errorHandler.js';

app.use(errorHandler);
```

---

## 🧩 Middleware Overview

| Middleware     | Purpose                          |
|----------------|----------------------------------|
| `protect`      | Verifies user JWT token          |
| `admin`        | Restricts access to admin users  |
| `errorHandler` | Centralized error formatting     |

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- JWT (JSON Web Tokens)

---

## 🤝 Contribution

Contributions are welcome!  
If you have a suggestion or bug fix, open a pull request or submit an issue.

---

## 📄 License

MIT © [tesla77coded](https://github.com/tesla77coded)

---

## 🔗 Related Projects

- [e-commBackend](https://github.com/tesla77coded/e-commBackend)
- [ToDoList](https://github.com/tesla77coded/ToDoList)
