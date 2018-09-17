/**
 * Created by sam on 29/12/2016.
 *
 * Validation des paramètres des requêtes
 */
import Joi from 'joi';

export default {

    // POST /api/auth/login
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};