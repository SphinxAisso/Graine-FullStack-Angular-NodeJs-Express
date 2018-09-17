/**
 * Created by sam on 29/12/2016.
 *
 * DAO des livres
 */

import Datastore from 'nedb';

const db = new Datastore({filename: 'db/books.db', autoload: true});

db.ensureIndex({fieldName: 'title', unique: true}, err => {
    if (err) {
        console.error('Error indexing books DB:', err);
    }
});

/**
 * Liste les livres
 * @returns {Promise|Promise<T>}
 */
function list({}) {
    console.log('List books');
    return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if (err) {
                console.log('List books error');
                reject(err);
            } else {
                console.log('List books docs:', docs);
                resolve(docs);
            }
        });
    });
}

/**
 * Cherche un livre à partir de son id
 * @param id
 * @returns {Promise|Promise<T>}
 */
function get(id) {
    console.log('get book, id:', id);
    return new Promise((resolve, reject) => {
        db.findOne({_id: id}, (err, doc) => {
            if (err) {
                console.log('get book error');
                reject(err);
            } else {
                console.log('get book doc:', doc);
                resolve(doc);
            }
        });
    });
}

/**
 * Crée un ou plusieurs livres
 * @param book
 * @returns {Promise|Promise<T>}
 */
function create(book) {
    console.log('create book');
    return new Promise((resolve, reject) => {
        db.insert(book, (err, newDoc) => {
            if (err) {
                console.log('create book error');
                reject(err);
            } else {
                console.log('create book OK:', newDoc);
                resolve(newDoc);
            }
        });
    });
}

/**
 * Met à jour un livre
 * @param book
 * @returns {Promise|Promise<T>}
 */
function update(book) {
    console.log('update book');
    return new Promise((resolve, reject) => {
        db.update({_id: book._id}, book, {}, (err, newDoc) => {
            if (err) {
                console.log('update book error');
                reject(err);
            } else {
                console.log('update book OK:', newDoc);
                resolve(newDoc);
            }
        });
    });
}

export default {list, get, create, update};
