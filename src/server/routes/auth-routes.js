/**
 * Created by sam on 29/12/2016.
 */
import express from 'express';
import validate from 'express-validation';

import validator from './auth-param-validator';
import authCtrl from '../controllers/auth-controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/login')
    .post(validate(validator.login), authCtrl.login);

router.route('/random-number')
    .get(authCtrl.getRandomNumber);

export default router;