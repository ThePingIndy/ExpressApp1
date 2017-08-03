'use strict';

exports.get = (req, res) => {
	res.render('home', { title: 'Express' });
};
