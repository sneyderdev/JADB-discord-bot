const command = require('../../command');

module.exports = (Discord, client, alias) => {
  command(client, alias, (message) => {
    const { guild } = message;
    const { name, region, memberCount, owner } = guild;
    const icon = guild.iconURL();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Member Count',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        }
      );

    message.channel.send(embed);
  });
};
