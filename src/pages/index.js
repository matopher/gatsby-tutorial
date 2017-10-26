import React from 'react';
import Link from 'gatsby-link';

export default () => (
	<div style={{ color: 'tomato' }}>
		<h1>Hello Gatsby</h1>
		<p>Still schwifty</p>
		<img src="http://lorempixel.com/400/200/" alt="" />
		<br />
		<Link to="/page-2/">Go to Page 2</Link>
		<Link to="/counter/">Counter</Link>
	</div>
);
