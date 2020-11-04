const command = require('../../command');

module.exports = (client, alias) => {
  command(client, alias, (message) => {
    console.log(client.guilds.cache);
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      );
    });
  });
};
