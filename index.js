require('dotenv').config();
var express = require('express');
var app = express();
const sgMail = require('@sendgrid/mail');
const bodyParser = require("body-parser");
app.listen(process.env.PORT_WEB || 50000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/message', function (req, res, next) {
	const message = req.body.message;

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: 'skynet-aaaag7dz7p45f2amg57ikknouu@sourcetoad.slack.com', // Change to your recipient
		from: 'jerred.wernke@sourcetoad.com', // Change to your verified sender
		subject: 'Fridage',
		text: message,
		html: `<strong>${message}</strong>`,
	}
	sgMail
	.send(msg)
	.then(() => {
		res.status(200).json({
			status: 'sent message'
		})
	})
	.catch((error) => {
		res.status(error.status).json({
			status: error.message
		})
	})
});
