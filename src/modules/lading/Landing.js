import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Article from './Article';

import './Styles.css';
/*eslint-disable jsx-a11y/anchor-is-valid*/
class Landing extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron d-flex justify-content-center flex-column text-center">
					<h1 className="display-4">Hola JS!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content
						out within the larger container.
					</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>
				{/* Key fitures */}
				<div className="row">
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
				</div>
				<div className="row">
					{/* Best Articles */}
					<div className="col-md-6">
						<h2>Articles Highlights</h2>
						<div className="overflow-y">
							<Article />
							<Article />
							<Article />
							<Article />
						</div>
					</div>
					<div className="col-md-6">
						<h2>Open Source</h2>
						<div className="overflow-y">
							<Article />
							<Article />
							<Article />
							<Article />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {};

export default Landing;
