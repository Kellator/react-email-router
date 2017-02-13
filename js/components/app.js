import React from 'react';

export default function App(props) {
	console.log(props.children);
	return (
		<div> 
			<h1>
				Mailboxes
			</h1>
			<div>
				{props.children}
			</div>
		</div>
	);
};