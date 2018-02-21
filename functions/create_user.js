const admin = require('firebase-admin');

module.exports = (req, res) => {
    // Verify the user provide a phone
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input' });
    }
    // Format the phone number to remove dashes and parens
    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    // Create new user account using that phone number
    // Respond to the user request, say the account was made
};
