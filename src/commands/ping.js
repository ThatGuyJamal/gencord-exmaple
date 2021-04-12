module.exports = {
	name: "ping",
	description: "ping pong go brrr",

	execute(client, message, args) {
		message.channel.send(`\`Pong! ${client.ping()}ms\``);
	},
};
