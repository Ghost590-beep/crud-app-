//@desc Get all contacts
//@route GET/api/contacts
//@access public

const getContacts = (req, res) => {
	res.status(200).json({ message: "Get all contacts" });
};
//@desc Get  contact
//@route GET/api/contact/:id
//@access public

const getContact = (req, res) => {
	res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc create new contact
//@route POST/api/contacts
//@access public

const createContact = (req, res) => {
	res.status(201).json({ message: "Creat  contact" });
};

//@desc Update contact
//@route PUT/api/contact/:id
//@access public

const updateContact = (req, res) => {
	res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc delete contact
//@route Delete/api/contact/:id
//@access public

const deleteContact = (req, res) => {
	res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};
module.exports = {
	getContact,
	getContacts,
	createContact,
	updateContact,
	deleteContact,
};
