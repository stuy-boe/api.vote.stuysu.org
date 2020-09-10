const { gql } = require('apollo-server-express');

module.exports = gql`
	type CloudinaryPicture {
		defaultUrl: String
		publicId: String
	}
`;
