/**
 * Created by sam on 29/12/2016.
 *
 * Configuration spécifique à l'environnement
 */

const conf = {
    dev: {
        env: 'dev',
        secure: false,
        jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
    },
    prod: {
        env: 'prod',
        secure: true,
        jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
    }
};

const env = process.env.ENV || 'dev';
const config = conf[env] || conf.dev;

export default  config;