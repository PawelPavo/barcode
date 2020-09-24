import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
const crypto = require('crypto');
const Barcode = require('react-barcode');

const CreateOffer: React.FC<CreateOfferProps> = (props) => {
    const history = useHistory();

    const location = useLocation<{ msg: string }>();

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [number, setNumber] = useState<string>()
    const getCode = async () => {
        try {
            crypto.randomBytes(4, (err: string, buf: any) => {
                const barcode = (buf.toString('hex'))
                setNumber(barcode)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const generate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();



        history.push('/');
    }


    return (
        <main>
            <Navbar />

            <section className="row justify-content-center my-5">

                <form className="form-group border-primary rounded-lg-success">

                    <div className="shadow p-4 mx-8 bg-white">
                        <h3 className="text-center"> Create Offer </h3>

                        <label>Marketing Offer Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control my-5" />

                        <label>Marketing Offer Description</label>
                        <input value={description} onChange={e => setDescription(e.target.value)} className="form-control my-5" />

                        <label>Promotion Type</label>
                        <input value={type} onChange={e => setType(e.target.value)} className="form-control my-5" />

                        <button onClick={generate} className="btn">Generate Bar Codes</button>

                        <button onClick={() => history.push('/')} className="btn">Go Back</button>

                    </div>
                </form>
            </section>
            <div className="row justify-content-center">
                <button
                    onClick={() => getCode()}
                    className="btn btn-danger">
                    Generate Code</button>
            </div>
            <div className="row justify-content-center">
                <Barcode value={`${number}`} />
            </div>
        </main >



    );

}


interface CreateOfferProps {

}


export default CreateOffer;