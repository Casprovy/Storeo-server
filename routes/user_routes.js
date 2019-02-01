import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import userSignup from '../Controllers/UserControllers/userSignup';
import userLogin from '../Controllers/UserControllers/userLogin';
import insertAddress from '../Controllers/UserControllers/insertAddress';
import getAOrdersFromUser from '../Controllers/UserControllers/getOrdersFromUser';
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

//  Products
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);

// Categories
router.get('/categories', getAllCategories);

// Orders
router.post('/orders', authMiddleware, gateMiddleware, postNewOrder);

// Signup
router.post('/signup', userSignup);

// Login
router.get('/login', userLogin);

// Add Address
router.post('/address', authMiddleware, gateMiddleware, insertAddress);

//  Previous Orders
router.get('/orders', authMiddleware, gateMiddleware, getAOrdersFromUser);

// SEARCH
// post /search


module.exports = router;
