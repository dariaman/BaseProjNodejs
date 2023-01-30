import mongoose from 'mongoose';

var logReqSchema = new mongoose.Schema({
    req_ip: String,
    req_remote: String,
    req_x_forward: String,

    req_param: String,
    req_query: String,
    req_formdata: String,
    req_body: String,
    req_originalUrl: String,

    req_header: String,
    req_date: Date,
});

// export default () => mongoose.model('request_api_log', logReqSchema);
export default logReqSchema;