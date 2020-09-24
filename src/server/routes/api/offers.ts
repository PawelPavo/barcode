import * as express from 'express';
import * as passport from 'passport';
import * as path from 'path';
import db from '../../db';

const router = express.Router();

//get route

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [offer] = await db.offers.one(id);
            res.json(offer);

        } else {
            const offers = await db.offers.all();
            res.json(offers);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get offers route failed.', error })

    }

});



export default router;