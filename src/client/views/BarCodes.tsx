// @ts-nocheck

import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const Barcode = require('react-barcode');

const BarCodes: React.FC<BarCodesProps> = (props) => {

    const [number, setNumber] = useState<any[]>([])
    const [howMany, setHowmany] = useState<any>(0)
    const randomNum = []
    const getCode = async () => {
        for (let i = 0; i < howMany; i++) {
            let num = (Math.floor(Math.random() * Math.floor(100000000000)))
            randomNum.push(num)
        }
        setNumber(randomNum)
    }


    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-5">
                <div className="col-10">
                    <h2 className="display-4 text-center text-primary">Barcods</h2>
                    <input
                        placeholder="0"
                        type="number"
                        value={howMany}
                        onChange={e => setHowmany(e.target.value)}
                        className="form-control mt-5"
                    />
                    <small id="emailHelp" className="form-text text-muted">Please enter the amont of bardcodes.</small>
                </div>
            </section>
            <div className="row justify-content-center">
                <button
                    onClick={() => getCode()}
                    className="btn btn-danger">
                    Generate Code</button>
            </div>
            <hr />
            <div className="row justify-content-center pl-md-5">
                {number.map(repo => (
                    <div key={repo} className="col-4">
                        <div >
                            <Barcode value={`${repo}`} />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

interface BarCodesProps { }

export default BarCodes;