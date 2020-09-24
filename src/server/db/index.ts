import * as mysql from 'mysql';
import config from '../config';
import categories from './queries/categories';
import offers from './queries/offers';

//sql connection

const pool = mysql.createPool(config.mysql);

//query helper function

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);

        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

export default {

    categories,
    offers
}