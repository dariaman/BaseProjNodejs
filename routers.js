import express from 'express';

const router = express.Router();

router.get('/ipbytoken', (req, res, next) => { res.status(200).send("200 ipbytoken") });

export default router;
