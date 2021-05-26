module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('-----------');
  		console.log(`started bot as ${client.user.tag}`)
  		console.log('-----------');
	},
};
