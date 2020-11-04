const command = require('../../command');

module.exports = (client, alias) => {
  command(client, alias, (message) => {
    const content = message.content.replace('!status', '');

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    });
  });
};
