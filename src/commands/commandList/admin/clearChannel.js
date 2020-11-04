const command = require('../../command');

module.exports = (client, aliases) => {
  command(client, aliases, (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results);
      });
    } else {
      message.reply("you don't have permissions for using this command.");
    }
  });
};
