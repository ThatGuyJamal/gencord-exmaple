const { MessageEmbed, colors } = require("gencord");
module.exports = {
	name: "ban",
	description: "Bans a user from the guild.",

	execute(client, message, args) {
		if (!message.guild) return;
		// const userID = args[0];

		// if (!userID) return message.channel.send("You need to provide a user ID!");

		// message.guild.ban(message.guild_id, userID, {
		// 	delete_message_days: 5,
		// 	reason: "test",
		// });

		// message.channel.send(`Banned ${userID}`);

		message.reply("comming soon...");
	},
};
