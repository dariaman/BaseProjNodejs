import express from 'express';
import router from './routers.js';

const app = express();

app.use('/', router);

app.use(function (req, res, next) { res.status(404).send("404 Not Found") })
app.listen(5000, '0.0.0.0', () => { console.log(`Server started on port 5000`); });
