import { Query } from '../index';
import { NONAME } from 'dns';

//get all

const all = () => Query ('SELECT * from offer_categories');

//get one

const one = (id: number) => Query ('SELECT * from offer_categories WHERE id = ?', [id]);

//insert one

const insert =(id: number, name:string) => {
    return Query ('INSERT offer_categories (id, name) VALUES (?, ?)', [id, name]);
    } 


//edit

const edit = (id: number, name: string ) => Query ('UPDATE offer_categories SET name = ? WHERE id = ?', [name, id]);


export default {
    all,
    one,
    insert,
    edit

}