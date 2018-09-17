/**
 * Created by sam on 29/12/2016.
 *
 * Décrit un objet Book
 */

export class Book {

    _id: string;
    title: string;
    author: string;
    resume: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || '';
        this.title = obj && obj.title || '';
        this.author = obj && obj.author || '';
        this.resume = obj && obj.resume || '';
    }
}
