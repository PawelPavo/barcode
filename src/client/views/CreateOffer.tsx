import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const offers = [
    {
        "name": "BOGO",
        "SKU": 123
    },
    {
        "name": "10%OFF",
        "SKU": 456
    },
    {
        "name": "FREE-DAY-PASS",
        "SKU": 789
    },
]

const CreateOffer: React.FC<CreateOfferProps> = (props) => {
    const history = useHistory();
    const location = useLocation<{ msg: string }>();
    const [name, setName] = useState<string>('');
    const [keycode, setKeycode] = useState<string>('');
    const [newOffer, setNewOffer] = useState<{}>({name, keycode})

    const generate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            setNewOffer({name, keycode})
            console.log(newOffer)
        } catch (error) {
            
        }
        history.push('/createoffer');
    }


    return (
        <main>
            <Navbar />

            <section className="row justify-content-center my-5">
                <form className="form-group border-primary rounded-lg-success">
                    <div className="form-group">
                        <label>Offers</label>
                        <select
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}>
                            {offers.map(offer => (
                                <option>{offer.name} SKU:{offer.SKU}</option>
                            ))}
                        </select>
                    </div>
                    <div className="shadow p-4 mx-8 bg-white">
                        <h3 className="text-center"> Create Offer </h3>
                        <label>Key Code</label>
                        <input
                            value={keycode}
                            onChange={e => setKeycode(e.target.value)}
                            className="form-control" />

                        <label>Promotion Type</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control" />
                        <button onClick={generate} className="btn btn-outline-secondary mt-3 btn-block">Generate Offer</button>

                    </div>
                </form>
            </section>
            <div className="row justify-content-center">
                <Link to="/barcodes">
                    <button className="btn btn-primary">Go To Barcode</button>
                </Link>
            </div>
        </main >



    );

}


interface CreateOfferProps {

}


export default CreateOffer;