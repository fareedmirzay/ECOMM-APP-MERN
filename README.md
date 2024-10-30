# Ecom-APP-AFG

An eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). The application provides users with the ability to view products, register/login, add products (for admins only), and manage user sessions with JWT authentication.

## Features

- **User Authentication**: Secure login and registration with JWT.
- **Admin Management**: Admins can add, update, and remove products.
- **Product Display**: Users can view a list of products and single product details.
- **Image Uploading**: Uses Cloudinary to store product images.
- **Shopping Cart**: Cart management feature for users.

## Project Structure

- **Backend**
  - `controllers/` - Contains logic for handling requests related to products and users.
  - `models/` - Defines MongoDB schemas for products and users.
  - `routes/` - Manages API endpoints for product and user-related operations.
  - `middleware/` - Contains middleware for handling file uploads (Multer).
  - `cloud.js` - Sets up Cloudinary for image storage.
  - `index.js` - Main server file, sets up Express app and connects to MongoDB.

## Technologies Used

- **Frontend**: React 
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Uploads**: Cloudinary
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: MongoDB, Express, React, Node.js

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database URI
- Cloudinary account for image uploads

### Installation

1. **Clone the repository**:
   ```bash
   git clone(for the Front-End) https://github.com/fareedmirzay/Ecommerce_MERN_APP-frontend.git
    git clone(for the Backend-End) https://github.com/fareedmirzay/Ecommerce_MERN_APP-backend.git

