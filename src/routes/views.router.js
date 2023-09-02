import express from 'express';
import { getProducts } from './products.routes.js';

const router = express.Router ();

router.get('/',(req,res)=>
{
    res.render('index', {})
});

router.get('/realtimeproducts', (req, res) => {
    const products = getProducts(); 
    res.render('realTimeProducts', { products });
  });

export default router;