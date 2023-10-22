import express from 'express'
	import productCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	router.route('/api/product') 
	.get(productCtrl.list)//get all products
	.post(productCtrl.create) //add new product
	.delete(productCtrl.removeAll); //remove all product

	// Get a product by ID, update a product by ID, remove a product by ID
	router.route('/api/product/:productId') 
	.get(productCtrl.read) //get product by id
	.put(productCtrl.update)  // update product by id
	.delete(productCtrl.remove); // remove product by id

	//get product by name cotaining "kw"
	router.route('/api/product/search')
	.get(productCtrl.findByName); //find products by name

	//middleware to resolve 'productId in routes
	router.param('productId', productCtrl.productByID);
	
// router.route('/api/users').post(userCtrl.create) 
// router.route('/api/users').get(userCtrl.list)
// router.param('userId', userCtrl.userByID)
// router.route('/api/users/:userId').get(userCtrl.read)
// router.route('/api/users/:userId').put(userCtrl.update)
// router.route('/api/users/:userId').delete(userCtrl.remove)




    
    
	export default router
