const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate
	},
	electionId: String,
	name: String,
	url: String,
	profilePic: {
		publicId: String,
		defaultUrl: String
	},
	coverPic: {
		publicId: String,
		defaultUrl: String
	},
	active: Boolean
});

mongoose.model('Candidate', CandidateSchema);
