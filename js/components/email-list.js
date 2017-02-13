//renders list of inbox emails
import React from 'react';
import Email from './email';

export default function EmailList(props) {
	console.log(props);
	const emails = Object.keys(props.emails.inbox).map((emailId, index) => {
		const email = props.emails.inbox[emailId];
		return (
			<li key={index}>
				<Email id={email.id} from={email.from} to={email.to} content={email.content} title={email.title} />
			</li>
		);
	});
	const spamMails = Object.keys(props.emails.spam).map((emailId, index) => {
		const spamMail = props.emails.spam[emailId];
		return (
			<li key={index}>
				<Email id={spamMail.id} from={spamMail.from} to={spamMail.to} content={spamMail.content} title={spamMail.title} />
			</li>
		);
	});

	return (
		<div>
			<ul className="inbox-emails">
				{emails}
			</ul>
			<ul className="spam-emails">
				{spamMails}
			</ul>
		</div>
	);
}