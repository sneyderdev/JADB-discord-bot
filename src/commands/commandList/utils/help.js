const command = require('../../command');
const config = require('../../../data/config.json');

module.exports = (Discord, client, alias) => {
  command(client, alias, (message) => {
    const { prefix } = config;
    client.user.setPresence({
      activity: {
        name: `"${prefix}help" if you feel lost!`,
      },
    });

    const { guild } = message;
    const icon = guild.iconURL();

    const embed = new Discord.MessageEmbed()
      .setTitle('These are my supported commands:')
      .setThumbnail(icon)
      .setColor('#C435E8')
      .addFields(
        {
          name: '`!ping`',
          value: 'Play ping pong with me!',
        },
        {
          name: '`!servers`',
          value: "Lists the servers I'm in",
        },
        {
          name: '`!clearchannel`',
          value: 'Clears messages in a particular channel',
        },
        {
          name: '`!status [status message]`',
          value: 'Sets the status of the bot',
        },
        {
          name: '`!createtextchannel [channel name]`',
          value: 'Creates a new text channel',
        },
        {
          name: '`!createvoicechannel [channel name]`',
          value: 'Creates a new voice channel',
        },
        {
          name: '`!embed`',
          value: 'Creates an embed message',
        },
        {
          name: '`!serverinfo`',
          value: 'Gets information about your server',
        },
        {
          name: '`!help`',
          value: 'Gets command list',
        }
      );

    message.channel.send(embed);
  });
};
