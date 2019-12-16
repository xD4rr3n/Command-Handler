const Discord = require("discord.js")

module.exports.run = async (bot, message) => {
    console.log("works")

}

module.exports.help = {
	name: 'ping',
	description: 'Checks API Latency',
	execute(message, args) {
        message.channel.send(`🏓 Pong! API Latency is ${Math.round(client.ping)}ms`);
        if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(bot, message);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
	},
};
