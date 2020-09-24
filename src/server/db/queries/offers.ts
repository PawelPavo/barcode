import { Query } from '../index';

//get all

const all = () => Query ('SELECT offers.*, offer_categories.name from offers JOIN offer_categories on offer_categories.id=offers.offer_categoryid;');



export default {
    all,
   

}