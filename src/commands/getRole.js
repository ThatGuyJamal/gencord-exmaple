const { MessageEmbed, colors } = require("gencord");

module.exports = {
  name: "getroles",
  description: "Sends info on all the build roles",

  execute(client, message, args) {
    const guild = client.guilds.get(message.guild.id);
    const embed = new MessageEmbed();
    guild.roles.forEach((role) =>
      embed.addField(
        `Role name: ${role.name}`,
        `Mentionable? ${role.mentionable}`,
        true
      )
    );
    message.channel.send(embed);
  },
};
