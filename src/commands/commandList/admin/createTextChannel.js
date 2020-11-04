const command = require('../../command');

module.exports = (client, alias) => {
  command(client, alias, (message) => {
    const name = message.content.replace(`!${alias} `, '');

    message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        const categoryId = '773289641838641152';
        channel.setParent(categoryId);
      });
  });
};
