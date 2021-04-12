const { TOKEN, STATUS, PREFIX } = require("./config.json");
const { Message, Client, ActivityTypes } = require("gencord");
const { MessageEmbed, colors } = require("gencord");
const fs = require("fs");

const client = new Client({
	token: TOKEN,
	status: STATUS,
	intents: 513,
	activityName: "Gencord.js",
	activityType: ActivityTypes.Listening,
	/**Playing ,
  Streaming,
  Listening,
  Competing */
});

client.on("READY", () => {
	console.log("GenCord is online!");
});

// Basic command handler
const commands = new Map();

for (const file of fs.readdirSync("./src/commands")) {
	const command = require(`./commands/${file}`);
	commands.set(command.name, command);
	console.log(`Loaded command: ${command.name}`);
}

client.on("message", (message) => {
	if (!message.content.toLowerCase().startsWith(PREFIX) || !message.guild)
		return;
	const args = message.content.slice(PREFIX.length).split(/ +/g);
	const command = args.shift().toLowerCase();

	if (!commands.has(command)) return;

	try {
		commands.get(command).execute(client, message, args);
	} catch (err) {
		console.log(err);
	}
});

