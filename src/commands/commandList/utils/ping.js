const command = require('../../command');

module.exports = (client, aliases) => {
  command(client, aliases, (message) => {
    message.channel.send('Pong!');
  });
};
