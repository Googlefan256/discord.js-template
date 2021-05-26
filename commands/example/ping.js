module.exports = {
	name: 'ping',
	description: 'Pong!',
	async execute(message) {
		await message.channel.send({embed: {title: 'pinging..'}}).then(sent => {
			sent.edit({embed: {title: 'Pong!', description: `main: ${sent.createdTimestamp - message.createdTimestamp}ms\nwebsocket: ${message.client.ws.ping}ms`, color:('RANDOM')}});
		})
	}
};
