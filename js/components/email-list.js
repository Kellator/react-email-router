//rendes list of emails
import React from 'react';
import Email from './email';

export default function EmailList(props) {
	console.log(props);
	const emails = Object.keys(props.emails.inbox).map((emailId, index) => {
		const inboxMail = props.emails.inbox[emailId];
		console.log(props.emails.inbox);
		return (
			<li key={index}>
			<Email id={inboxMail.id} from={inboxMail.from} to={inboxMail.to} content={inboxMail.content} />
			</li>
		);
	});

	return (
		<ul>
			{emails}
		</ul>
	);
}