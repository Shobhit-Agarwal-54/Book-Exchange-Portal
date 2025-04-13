# 📚 Peer-to-Peer Book Exchange Portal

A full-stack web application that connects **book owners** and **book seekers**, enabling a seamless way to exchange books across different cities. Built with **Next.js**, **React**, **JavaScript**, **Prisma**, and **NeonDB**.

---

## 🚀 Features

### 👤 User Roles
- **Book Owner**: Can list books for exchange.
- **Book Seeker**: Can browse all listings.    

### Features Implemented (IN WORKING MODE)

### 🔐 Authentication & Profile Management
- Sign up with:
  - Name
  - Mobile Number
  - Email
  - Password 
  - Role: Owner / Seeker
- Login with Email + Password.
- Role-based redirection to dashboard (Owner / Seeker).

### 📚 Book Listings (For Owners)
- Add new book listings with:
  - Title *(required)*
  - Author *(required)*
  - Genre *(optional)*
  - City / Location
  - Contact Email or Phone

### 🔍 Browsing & Search
- All users (owners & seekers) can browse listings.
- Listings display:
  - Title, Author, Owner's Email, Location, Genre, Status
- Filter/Search by:
  - Title
  - Location
  - Author
  - Genre
  - Owner's Email
  - Listing Status

### 📥 Export
- Download book listings as a **CSV file**.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **Next.js** | Full-stack React framework |
| **React.js** | Frontend UI |
| **Prisma ORM** | Database interaction |
| **NeonDB** | Postgres-based cloud database |
| **CSV Export** | Download listings feature |

---

## 🧠 AI Tools Used

- **ChatGPT** (for idea validation, code snippets, and debugging)
- **Claude** (for content refinement and logic assistance)

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shobhit-Agarwal-54/Book-Exchange-Portal
cd book-exchange-portal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file and add your NeonDB database URL.
Example:
DATABASE_URL=`Your NeonDB Database URL`
### 4. Run the development server

```bash
npm run dev
```

---

## 📂 Project Structure

```
/app           → Next.js routes and pages
/components    → Reusable UI components
/prisma        → Prisma schema and client
/utils         → Utility functions
```

---

## 💬 Contact
Email Id:shobhitagarwal2003@gmail.com
Feel free to reach out if you have suggestions or want to collaborate!

---


