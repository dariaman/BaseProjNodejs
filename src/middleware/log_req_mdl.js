import mongoose from 'mongoose';
import logReqSchema from '../model_schema/LogReqSchema.js'

export default async (req, res, next) => {
    main().catch(err => console.log(err));
    async function main() {
        mongoose.connect('mongodb://localhost:27017/logger_test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    mongoose.set('strictQuery', false);

    // const log = new LogReqSchema.model();
    let logging_req = new logReqSchema({
        req_param: req.params,
        req_query: req.query,
        // req_formdata: req.headers,
        req_body: req.body,
        req_originalUrl: req.originalUrl,
        req_header: req.headers
    });
    mongoose.model('request_api_log', logging_req)
    logging_req.save();
}