import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';

import config from './config';
import routes from './routes';

const app = express();

app.set('env', config.env);

app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(logger(config.env));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (config.secure) {
    app.use(expressJwt({secret: config.jwtSecret}).unless({path: ['/', '/api']}));
}

app.use('/', routes);

// Attrape toutes les routes inexistantes et génère une erreur
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Centralisation des erreurs. En prod, ne retourne pas la stacktrace
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: config.env === 'dev' ? err : {}
    });
});

export default app;

