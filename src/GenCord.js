const { TOKEN, STATUS, PREFIX } = require("./config.json"); // importing our config file data.
const { Message, Client } = require("gencord"); // importing the gencord package into this file.
const { MessageEmbed, colors } = require("gencord"); // importing deps for embed creation

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

				embed
					.send(msg.channel.id, {
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
					})
					.catch((error) => {
						msg.channel.send(`There was an error: ${error}`);
					});
			}
			// help command
			if (msg.content.startsWith(PREFIX + "help")) {
				const embed = new MessageEmbed(client);

				embed
					.send(msg.channel.id, {
						// Creates a template embed to send in the channel.
						title: "Commands",
						description:
							"Here is a list of my commands.\n `ping` Sends the bots ping. \n `code` sends the bots source code.",
						footer: {
							text: "This is an example bot for the GenCord Framework.",
						},
						color: colors.GREEN,
					})
					.catch((error) => {
						msg.channel.send(`There was an error: ${error}`);
					});
			}
			// code command
			if (msg.content.startsWith(PREFIX + "code")) {
				const embed = new MessageEmbed(client);
				embed
					.send(msg.channel.id, {
						// Creates a template embed to send in the channel.
						title: "Source Code",
						description: "https://github.com/ThatGuyJamal/gencord-exmaple",
						footer: {
							text: "This is an example bot for the GenCord Framework.",
						},
						color: colors.RED,
					})
					.catch((error) => {
						msg.channel.send(`There was an error: ${error}`);
					});
			}
			// catching any errors during run time for msg event.
		} catch (e) {
			console.log(e);
		}
	}
});
