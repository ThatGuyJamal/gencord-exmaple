const config = require("./config.json"); // This file imports out hidden data we dont want to type over and over.

const { Message, Client } = require("gencord"); // importing the gencord package into this file.

// Keep in mind that most people name the bots 'new Client' "client". You can name yours whatever, but make sure you be consistent with it. For more complex use just use "client or bot"

const gencord = new Client({
	token: config.token,
	status: config.status,
}); // We are importing our bots data (token, etc.) from the config.json file.

// Here we are sending a message to our console when the client function has connected to discord js
gencord.on("READY", () => {
	console.log("GenCord is online!");
});

// Here is a simple message event.
gencord.on("message", (msg) => {
	if (!msg.content.startsWith(config.prefix)) return; // Checks if the message starts with the bot prefix. If not dont reply to the command.
	// checks if the user is another bot, if so dont reply.
	if (message.author.bot) return;
	else {
		if (msg.content.startsWith(config.prefix + "ping")) {
			// An if event. We call the client(gencord) and ask if a user sends a message starting with the prefix and pong, then run the command.
			message.channel.send(`Pong! ${client.ws.ping()}ms`);
		}
	}
});
