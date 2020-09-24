import { Router } from 'express';
import offersRouter from './offers';
import categoriesRouter from './categories';
 

const router = Router();


router.use('/offers', offersRouter);
router.use('/categories', categoriesRouter);
 


export default router;