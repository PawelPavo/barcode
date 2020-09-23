import * as React from 'react';
import {useState, useEffect } from 'react';

const Login: React.FC<LoginProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h2 className="display-1 text-center text-primary">Login Page</h2>
                </div>
            </section>
         
        </main>
    );
}

interface LoginProps {}

export default Login;