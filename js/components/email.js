//contains individual email information
import React from 'react';

export default function Email(props) {
	console.log(props);
	return (
		<div>
			<strong>
				<h1>{props.title}</h1>
			</strong>
			&nbsp;
			<h3>from:  {props.from}</h3>
			<h3>to:  {props.to}</h3>
			<p>{props.content}</p>
		</div>
	);
}