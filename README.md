# MERN Stack E-commerce Website

This project is a full-stack e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates payment gateways like Stripe and Razorpay. This project was developed by following the tutorial from [GreatStackDev](https://www.youtube.com/@GreatStackDev).

## Features

- **Frontend:** Built using React.js with product browsing, filtering, and sorting capabilities. Users can select product variants and add items to their cart.
- **User Authentication:** User login and order history.
- **Admin Dashboard:** Allows admins to manage products (add, delete, update), track orders, and view store data.
- **Payment Integration:** Customers can choose between Cash on Delivery (COD), Stripe, or Razorpay for online payments.
- **Backend:** Node.js and Express.js for the backend, managing user accounts, orders, and product data stored in MongoDB.
- **Deployment:** Deployed using Vercel for easy access and scalability.

## Technologies Used

- **Frontend:** 
  - React.js (with Hooks and Context API)
  - CSS and Figma design assets
- **Backend:** 
  - Node.js
  - Express.js
  - MongoDB (for database management)
  - Stripe & Razorpay (for payment gateways)
- **Deployment:** 
  - Vercel

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-ecommerce.git
   cd mern-ecommerce
2. Install the required dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
3. Create a `.env` file in the `backend` directory with your MongoDB, Stripe, and Razorpay credentials:

   ```bash
   MONGO_URI=your-mongodb-uri
   STRIPE_SECRET_KEY=your-stripe-secret-key
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-key-secret
4. Start the development server for both the frontend and backend:

   - Frontend (React):

     ```bash
     cd frontend
     npm start dev
     ```

   - Admin Panel (Node.js):

     ```bash
     cd backend
     npm start dev
     ```
     
    - Backend (Node.js):

     ```bash
     cd backend
     npm start server
     ```

5. Open the project at `http://localhost:5173` for the frontend and `http://localhost:5174/` for the admin panel.

## Deployment

To deploy the project on Vercel:

1. Create a Vercel account and link your GitHub repository.
2. Add your environment variables (MongoDB URI, Stripe, and Razorpay credentials) in the Vercel project settings.
3. Deploy the project by following the guide [here](https://github.com/GreatStackDev/note...).

## Live Demo

Check out the live version of the project: [ForeverBuy](https://foreverbuy.in)

## Credits

- This project was created by following the [GreatStackDev](https://www.youtube.com/@GreatStackDev) tutorial:  
  [Learn how to Build and Deploy Full Stack E-commerce Website](https://www.youtube.com/watch?v=your-tutorial-link).
- Design assets are provided in the tutorial.

## License

This project is open source and available under the [MIT License](LICENSE).
