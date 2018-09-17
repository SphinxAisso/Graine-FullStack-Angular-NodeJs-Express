/**
 * Created by sam on 29/12/2016.
 *
 * Contrôleur d'authentification
 */
import jwt from 'jsonwebtoken';

import config from '../config';

// User bouchon
const user = {
    username: 'toto',
    password: 'toto'
};

/**
 * Authentification, retourne un webtoken si OK
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
    // TODO Auth bouchon : remplacer par appel LDAP ou DB
    if (req.body.username === user.username && req.body.password === user.password) {
        const token = jwt.sign({username: user.username}, config.jwtSecret);
        return res.json({token: token, username: user.username});
    }

    const err = {status: 401, message: 'Erreur d\'authentification'};
    return next(err);
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
    // req.user is assigned by jwt middleware if valid token is provided
    return res.json({
        user: req.user,
        num: Math.random() * 100
    });
}

export default {login, getRandomNumber};