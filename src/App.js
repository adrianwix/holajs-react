import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

// Layout
import Navbar from './modules/navbar/Navbar';

// Pages
import Landing from './modules/lading/Landing';
import Footer from './modules/footer/Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<div className="container-fluid">
						<Route path="/" component={Landing} />
						{/*<Route exact path="/register" component={Register} />*/}
						{/*<Route exact path="/login" component={Login} />*/}
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
