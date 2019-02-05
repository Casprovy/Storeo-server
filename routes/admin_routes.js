import express from 'express';
import admin from './adminImports';
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';
import errorMiddleware from '../Middlewares/errorHandler';

const router = express.Router();

// Login
router.get('/login', admin.userLogin);

// Signup
router.post('/signup', admin.userSignup);

router.use(authMiddleware);
router.use(gateMiddleware);

// Products
router.post('/products', admin.postNewProduct);
router.get('/products', admin.getAllProducts);
router.get('/products/:productId', admin.getProductById);
router.get('/products/cat/:categoryId', admin.getProductsByCategoryId);
router.delete('/products/:productId', admin.deleteProductById);
router.put('/products/:productId', admin.updateProduct);

// Orders
router.get('/orders', admin.getAllOrders);

// Categories
router.get('/categories', admin.getAllCategories);
router.post('/categories', errorMiddleware, admin.postNewCategory);
router.put('/categories/:categoryId', admin.updateCategory);
router.delete('/categories/:categoryId', admin.deleteCategory);

module.exports = router;
