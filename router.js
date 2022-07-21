const sgMail = require('@sendgrid/mail');
require('dotenv').config();
exports.message = function (req, res, next) {
	const doorStatus = req.query.door;
	let door = `Door has been ${doorStatus}`;
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: 'skynet-aaaag7dz7p45f2amg57ikknouu@sourcetoad.slack.com', // Change to your recipient
		from: 'jerred.wernke@sourcetoad.com', // Change to your verified sender
		subject: 'Fridage',
		text: door,
		html: `<strong>${door}</strong>`,
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
};
