/**
 * Created by sam on 29/12/2016.
 *
 * Gestion des routes liées aux schémas
 */

import express from 'express';
import validate from 'express-validation';

import bookCtrl from '../controllers/book-controller';
import validator from './book-param-validator';

const router = express.Router();

router.route('/')
    .get(bookCtrl.list)
    .post(validate(validator.createBook), bookCtrl.create)
    .put(validate(validator.createBook), bookCtrl.update);

router.route('/id/:bookId')
    .get(bookCtrl.load);

router.route('/generate')
    .get(bookCtrl.generate);

export default router;