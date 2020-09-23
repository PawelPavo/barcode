import * as React from 'react';
import {useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC<HomeProps> = (props) => {
    return (
        <main className="container">
             <Navbar />
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h2 className="display-1 text-center text-primary">Home Page</h2>
                   {/* Display a table view of all existing marketing offers. */}
                </div>
            </section>
         
        </main>
    );
}

interface HomeProps {}

export default Home;