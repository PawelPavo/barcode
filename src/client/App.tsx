import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import CreateOffer from './views/CreateOffer';
import Login from './views/Login';
import BarCodes from './views/BarCodes';


const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route exact path='/createoffer'>
						<CreateOffer />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/barcodes'>
						<BarCodes />
					</Route>


			</Switch>
		</BrowserRouter>

	);
}

interface AppProps {

			}

export default App;