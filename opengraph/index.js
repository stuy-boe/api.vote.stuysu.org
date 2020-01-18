const router = require("express").Router();
const path = require("path");
const htmlEntities = (str) => {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

router.use("*", (req, res, next) => {
	let og = {};
	og.site_name = "Stuy Board of Elections Voting Site";
	og.title = "Error 404 | Page Not Found";
	og.type = "website";
	og.image = "/logo512.png";
	og.description = "This page does not exist or has been moved";
	og.url = path.join(process.env.PUBLIC_URL || "", req.path);
	console.log(process.env.PUBLIC_URL);
	req.og = og;

	req.buildOG = () => {
		let og_str = "";
		for(let type in req.og){
			og_str += `<meta property="og:${type}" content="${htmlEntities(req.og[type])}"/>`;
		}
		return og_str;
	};

	next();
});

router.use("/", (req, res, next) => {
	req.og.title = "Home";
	req.og.description = "This is where voting as well as campaigning for Student Union Elections takes place";
	next();
});

module.exports = router;
