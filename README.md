# BookLovers — Your Personal Digital Library

A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using BetterAuth, Next.js, and MongoDB.

## 🛠️ Built With

| Technology | Purpose |
| :--- | :--- |
| **Next.js** | Core framework and server-side rendering |
| **BetterAuth** | Secure authentication and social login (Google) |
| **MongoDB** | NoSQL database for users and book data |
| **Tailwind CSS + DaisyUI** | Styling, theme components, and responsiveness |
| **React-Toastify + SwiperJS** | Real-time user feedback and notifications |

## 🔑 Key Features

### 1. Secure Authentication & Private Routes
Integrated BetterAuth ensures that sensitive areas like the **User Profile** and **Borrowing Logic** are protected. Guest users are automatically redirected to login when trying to access private content.

### 2. Personalized User Profile
Users can update their display name and profile image via an interactive modal. The UI updates instantly across the site, including a dynamic Navbar that reflects the user's login state and identity.

### 3. Dynamic Book Management
Explore a vast collection of books with detailed pages showing descriptions, authors, and categories. The system supports real-time data fetching from MongoDB to ensure book availability is always accurate.

### 4. Responsive & Modern UI
Built with a mobile-first approach, the platform features clean layouts, elegant modals, and a custom navigation bar that adapts perfectly to any screen size.

## 🚦 Getting Started


1. **Live Url:**
   ```bash
   
    https://book-lovers-tan.vercel.app