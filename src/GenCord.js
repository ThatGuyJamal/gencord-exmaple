const { TOKEN, STATUS, PREFIX } = require("./config.json"); // importing our config file data.
const { Message, Client } = require("gencord"); // importing the gencord package into this file.
const { MessageEmbed, colors } = require("gencord"); // importing deps for embed creation

// Keep in mind that most people name the bots 'new Client' "client". You can name yours whatever, but make sure you be consistent with it. For more complex use just use "client or bot"

const client = new Client({
	token: TOKEN,
	status: STATUS,
	intents: 513,
}); // We are importing our bots data (token, etc.) from the config.json file.

// Here we are sending a message to our console when the client function has connected to discord js
client.on("READY", () => {
	console.log("GenCord is online!");
});

// Here is a simple message event.
client.on("message", (msg) => {
	if (!msg.content.startsWith(PREFIX)) return; // Checks if the message starts with the bot prefix. If not dont reply to the command.
	// checks if the user is another bot, if so dont reply.
	if (msg.author.bot) return;
	else {
		// here until permission checking is added to gencord (becuase in alpha) we will use a try catch statment.
		try {
			// ping command
			if (msg.content.startsWith(PREFIX + "ping")) {
				// An if event. We call the client(gencord) and ask if a user sends a message starting with the prefix and pong, then run the command.
				msg.channel.send(`Pong! ${client.ws.ping()}ms`); // Sends the pong message to the given channel.
			}
			// embed command
			if (msg.content.startsWith(PREFIX + "embed")) {
				const embed = new MessageEmbed(client);

				embed.send(msg.channel.id, {
					// Creates a template embed to send in the channel.
					title: "Title",
					description: "My description",
					footer: {
						text: "this is the footer",
					},
					color: colors.BLUE,
					url: "https://google.com",
					image: {
						url:
							"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
					},
				});
			}
			// catching any errors during run time for msg event.
		} catch (e) {
			console.log(e);
		}
	}
});
