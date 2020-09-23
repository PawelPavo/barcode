import * as React from 'react';
import {useState, useEffect } from 'react';

const BarCodes: React.FC<BarCodesProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h2 className="display-1 text-center text-primary">BarCodes Page</h2>
                    {/* Display bar codes on this page? */}
                </div>
            </section>
         
        </main>
    );
}

interface BarCodesProps {}

export default BarCodes;