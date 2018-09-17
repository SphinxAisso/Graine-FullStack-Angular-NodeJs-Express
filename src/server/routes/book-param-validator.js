/**
 * Created by sam on 29/12/2016.
 *
 * Validation des paramètres des requêtes
 */
import Joi from 'joi';

export default {

    // POST PUT /api/books
    createBook: {
        body: {
            title: Joi.string().required(),
            author: Joi.string().required(),
            resume: Joi.string().required()
        }
    }
};