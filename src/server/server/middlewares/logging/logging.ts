import * as morgan  from 'morgan';

const logger = morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms');

export default logger;
