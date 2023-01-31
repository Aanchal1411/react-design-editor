const ghpages = require('gh-pages');

ghpages.publish(
	'docs',
	{
		repo: 'https://github.com/Aanchal1411/react-design-editor.git',
		message: 'published https://Aanchal1411.github.io/react-design-editor',
		user: {
			name: 'Aanchal1411',
			email: 'aanchal.paryani97@gmail.com',
		},
	},
	function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('published https://Aanchal1411.github.io/react-design-editor');
		}
	},
);
