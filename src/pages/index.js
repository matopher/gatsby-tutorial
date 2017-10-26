import React from 'react';
import Link from 'gatsby-link';

export default () => (
	<div style={{ color: '#333', margin: '3rem auto', maxWidth: 600 }}>
		<h1>Hello Gatsby</h1>
		<p>Still schwifty</p>

		<div>
			<h1>Richard Hamming on Luck</h1>
			<div>
				<p>
					From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
						You and Your Research
					</a>”.
				</p>
				<blockquote>
					<p>
						There is indeed an element of luck, and no, there isn’t. The
						prepared mind sooner or later finds something important and does it.
						So yes, it is luck.{' '}
						<em>
							The particular thing you do is luck, but that you do something is
							not.
						</em>
					</p>
				</blockquote>
			</div>
			<p>Posted April 09, 2011</p>
		</div>

		<img src="http://lorempixel.com/400/200/" alt="" />
		<br />
		<Link to="/page-2/">Go to Page 2</Link>
		<br />
		<Link to="/counter/">Counter</Link>
	</div>
);
