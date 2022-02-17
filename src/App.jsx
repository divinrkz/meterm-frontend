import React,{Fragment} from 'react';
import {Navbar} from './components';
import {
	Routes, Route, Link, Outlet, Router
  } from "react-router-dom";

import {BuyingPage, CheckingPage} from './pages'

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path="/purchase" element={<BuyingPage />}/>
				<Route path="/check" element={<CheckingPage />}/>
			</Routes>
		</React.Fragment>	
	);
}



export default App;
