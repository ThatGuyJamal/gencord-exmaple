const { MessageEmbed, colors } = require("gencord");

module.exports = {
	name: "getchannels",
	description: "sends information on the channels.",

	execute(client, message, args) {
		const guild = client.guilds.get(message.guild.id);
		const embed = new MessageEmbed();
		guild.channels.forEach((channel) =>
			embed.addField(
				`Channel name: ${channel.name}`,
				`Channel Topic ${
					channel.topic === null || undefined ? "No Topic" : channel.topic
				}`,
				true
			)
		);
		message.channel.send(embed);
	},
};
