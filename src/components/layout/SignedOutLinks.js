import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/signup'>Signup</NavLink>
			</li>
			<li>
				<NavLink to='/signin'>Login</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
