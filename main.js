const Discord = require('discord.js');
const client = new Discord.Client();
const {token,prefix} = require('./config.json');
const path = require('path');
const fs = require('fs');
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
const fplace = path.resolve(__dirname,'commands')
const files = fs.readdirSync(path.resolve(__dirname,'commands'));
const eventFiles = fs.readdirSync(path.resolve(__dirname,'events')).filter(file => file.endsWith('.js'))
for (const file4 of eventFiles) {
	const file3 = file4.split(',');
	const event = require(path.resolve(__dirname, `./events/${file3}`));
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args,/*execute options*/));
	}else{
		client.on('message', async message => event.execute(/*execute options*/));
	}
}
for (const folders2 of files) {
	const folders = folders2.split(',');
	const folder = folders.indexOf(".DS_Store");
	if(folder >= 0){folders.splice(folder, 1)}
	const commandFiles = fs.readdirSync(path.resolve(__dirname, `commands/${folders}`)).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(path.resolve(__dirname, `commands/${folders}/${file}`));
		client.commands.set(command.name, command);
	}
}
client.on('message', async message => {
	if(message.author.bot)return;
	if (!message.content.startsWith(prefix))return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.guildOnly && message.channel.type === 'dm') {
		return /*when the command is not allowed in DM*/
	}
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return /*when the author doesn't have the permission*/
		}
	}
	if (command.args && !args.length) {
		return /*when the usage is out of rule*/
	}
	const { cooldowns } = client;
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return (/*when there is a cooldown using the command*/
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try{
		command.execute(/*execute options*/);
	}catch(error){
		return /*when there is an error*/
	}
});
client.login(token);
