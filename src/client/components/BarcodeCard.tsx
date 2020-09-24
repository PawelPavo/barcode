import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
const crypto = require('crypto');
const Barcode = require('react-barcode');

const BarcodeCard: React.FC<BarcodeCardProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-10">
                    <div className="row justify-content-center">
                        {/* <Barcode value={`${number}`} /> */}
                    </div>
                </div>
            </section>

        </main>
    );
}

interface BarcodeCardProps { }

export default BarcodeCard;