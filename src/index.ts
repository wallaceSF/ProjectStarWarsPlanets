import * as http from 'http';
import * as debug from 'debug';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as createError from 'http-errors';

import {RoutePlanet} from "./routes/RoutePlanet";

debug('ts-express:server');

function onError(error: NodeJS.ErrnoException): void {
    console.log('onError');
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch(error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    console.log('onListening');
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}

function normalizePort(val: number|string): number|string|boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

const port = normalizePort(process.env.PORT || 4000);
var app = express();

//middleware-pipe-----------------------------------------------
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//middleware-pipe-----------------------------------------------

//routes--------------------------------------------------------
const routePrv = new RoutePlanet(app);
routePrv.routes();
//routes--------------------------------------------------------

//errors--------------------------------------------------------
app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});
//errors--------------------------------------------------------

//up server-----------------------------------------------------
const server = http.createServer(app);
server.listen(port, function(){
    console.log("Express server listening on port " + port);
});
server.on('error', onError);
server.on('listening', onListening);
//up server-----------------------------------------------------


