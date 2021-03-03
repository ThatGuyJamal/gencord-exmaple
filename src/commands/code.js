const { MessageEmbed, colors } = require("gencord");

module.exports = {
	name: "code",
	description: "Sends a link to the bots source code.",

	execute(client, message, args) {
		var embed = new MessageEmbed();
		embed.setTitle("Source Code");
		embed.setColor(colors.BLURPLE);
		embed.setDescription(
			"[click me](https://github.com/ThatGuyJamal/gencord-exmaple)"
		);
		message.channel.send(embed);
	},
};
