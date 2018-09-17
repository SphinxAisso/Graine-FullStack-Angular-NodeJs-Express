/**
 * Created by sam on 29/12/2016.
 *
 * Contrôleur des livres. S'appuie sur le model pour répondre aux requêtes
 */

import Book from '../models/book-model';

import {booksExamples} from './books-examples';
/**
 * Charge un livre à partir de son id
 * @param req
 * @param res
 * @param next
 * @param id
 */
function load(req, res, next, id) {
    Book.get(id)
        .then((book) => {
            req.book = book;
            return next();
        })
        .catch(e => next(e));
}

/**
 * Liste tous les livres
 * @param req
 * @param res
 * @param next
 */
function list(req, res, next) {
    const {limit = 50, skip = 0} = req.query;
    Book.list({limit, skip})
        .then(books => res.json(books))
        .catch(e => next(e));
}

/**
 * Création d'un livre
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {
    console.log('req.body :', req.body);
    Book.create(req.body)
        .then(savedBook => res.json(savedBook))
        .catch(e => next(e));
}

/**
 * Mise à jour d'un livre
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    Book.update(req.body)
        .then(savedBook => res.json(savedBook))
        .catch(e => next(e));
}

/**
 * Génération de livres
 * @param req
 * @param res
 * @param next
 */
function generate(req, res, next) {
    console.log('generate example books');

    // schemasExamples
    Book.create(booksExamples)
        .then(savedBook => res.json(savedBook))
        .catch(e => next(e));
}

export default {load, list, create, update, generate};