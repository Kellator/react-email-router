import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';


export default function EmailListContainer() {
	console.log(EMAILS.inbox);
	return (
		<EmailList emails={EMAILS} />
	)
};
		// <EmailList>
		// 	<div className="inbox-emails" emails={EMAILS.inbox}/>
		// 	<div className="spam-emails" emails={EMAILS.spam}/>
		// </EmailList>