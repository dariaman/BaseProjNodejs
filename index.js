import express from 'express';
// import bodyParser from "body-parser";
import router from './routers.js';
import logger from './src/middleware/log_req_mdl.js';
import Telegraf from 'telegraf'
// const Telegraf = require('telegraf');


const app = express();
app.use(express.json());
// app.use(bodyParser.json());

// app.use(logger);

const bot = new Telegraf('1682183242:AAHMXFumj1VjccH9Tf72un0PETCMT0na4_8');
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})


app.use('/', router);

app.use(function (req, res, next) {
    console.log('=========================================================================')
    console.log(req.headers)
    console.log(req.originalUrl)
    console.log(req.body)
    console.log(req.query)
    console.log(req.params)
    console.log('=========================================================================')
    next()
})

app.use(function (req, res, next) { res.status(404).send("404 Not Found") })
app.listen(5000, '0.0.0.0', () => { console.log(`Server started on port 5000`); });
