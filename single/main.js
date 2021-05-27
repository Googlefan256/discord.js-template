const Discord = require('discord.js');
const client = new Discord.Client();
const {token,prefix} = require('./config.json');
client.on('message', async message => {
	if(message.author.bot || !message.content.startsWith(prefix))return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
  if(command === 'ping'){
    await message.channel.send({embed: {title: 'pinging..'}}).then(sent => {
			sent.edit({embed: {title: 'Pong!', description: `main: ${sent.createdTimestamp - message.createdTimestamp}ms\nwebsocket: ${message.client.ws.ping}ms`, color:('RANDOM')}});
		})
  }//add more commands here
});
client.login(token);
