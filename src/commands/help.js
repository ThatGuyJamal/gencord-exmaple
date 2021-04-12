const { MessageEmbed, colors } = require("gencord");

module.exports = {
  name: "help",
  description: "Sends a list of all commands.",

  execute(client, message, args) {
    var embed = new MessageEmbed();
    embed.setTitle("GenCord.js Commands");
    embed.setColor(colors.BLURPLE);
    embed.setDescription(
      "A list of my commands. \n `ban`, `code`, `getchannels`, `getroles`, `ping`, `server`, `github`"
    );
    message.channel.send(embed);
  },
};
