import server from './server/server';
import { connect } from './db/mongodb';
// import 'babel-polyfill';

const PORT = process.env.PORT || 8000;
connect();
server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});


