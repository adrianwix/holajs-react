import React from 'react';
import PropTypes from 'prop-types';

const NavbarToggler = ({ dataTarget }) => {
	return (
		<React.Fragment>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
		</React.Fragment>
	);
};

NavbarToggler.propTypes = {
	dataTarget: PropTypes.string.isRequired,
};

export default NavbarToggler;
