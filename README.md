*******************Ecom-APP-AFG***********************8
An eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to view products, register/login, add products to a cart, and manage orders with secure JWT authentication. Admins have control over product management, while users enjoy a seamless shopping experience with product browsing, cart functionality, and order tracking.

****Features
User Authentication: Secure login and registration with JWT.
Admin Management: Admins can add, update, and remove products.
Product Catalog: Browse a list of products and view detailed product pages.
Shopping Cart: Add items to a cart with quantity and size options.
Order Management: Place orders and view order history.
Image Uploading: Uses Cloudinary to store product images.
Search Functionality: Easily search for products in the catalog.
Contact Information: Accessible contact details for support.


**************Project Structure
***Frontend

**React Components: Manages views for the home page, product catalog, product details, shopping cart, and contact page.
State Management: Uses Context API and hooks to handle state.
Styling: Styled with Tailwind CSS and React Toastify for notifications.

***Backend

controllers/ - Contains logic for handling requests related to products, users, and orders.
models/ - Defines MongoDB schemas for products, users, and orders.
routes/ - Manages API endpoints for product, user, and order-related operations.
middleware/ - Includes middleware for file uploads (Multer) and JWT verification.
cloud.js - Configures Cloudinary for image storage.
index.js - Main server file, sets up the Express app and connects to MongoDB.


*****Technologies Used

Frontend: React, React Router, Tailwind CSS, Context API, Axios, React Toastify
Backend: Node.js, Express.js
Database: MongoDB
File Uploads: Cloudinary
Authentication: JWT (JSON Web Tokens)
Deployment: MongoDB, Express, React, Node.js

***Getting Started

Node.js and npm
MongoDB database URI
Cloudinary account for image uploads

***Installation

1. **Clone the repository**:
   ```bash
   git clone(for the Front-End) https://github.com/fareedmirzay/Ecommerce_MERN_APP-frontend.git
    git clone(for the Backend-End) https://github.com/fareedmirzay/Ecommerce_MERN_APP-backend.git

