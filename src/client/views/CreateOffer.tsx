import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';


const CreateOffer: React.FC<CreateOfferProps> = (props) => {
    const history = useHistory();

    const location = useLocation<{ msg: string }>();

    const [name, setName] = useState<string>('Buy $10 Get $10');
    const [description, setDescription] = useState<string>('Guest buys $10 of anything and gets $10 of anything.');
    const [type, setType] = useState<string>('BOGO');


    const generate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

      
        
        history.push('/');
    }


    return (
        <main>
            <Navbar />

            <section className="row justify-content-center my-5">

                <form className="form-group p-3 border-primary rounded-lg-success">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Create Offer </h3>

                        <label>Marketing Offer Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control my-2" />

                        <label>Marketing Offer Description</label>
                        <input value={description} onChange={e => setDescription(e.target.value)} className="form-control my-2" />

                        <label>Promotion Type</label>
                        <input value={type} onChange={e => setType(e.target.value)} className="form-control my-1" />

                        <button onClick={generate} className="btn">Generate Bar Codes</button>

                        <button onClick={() => history.push('/')} className="btn">Go Back</button>

                    </div>
                </form>
            </section>

        </main >



    );

}


interface CreateOfferProps {

}


export default CreateOffer;