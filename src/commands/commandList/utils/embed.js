const command = require('../../command');

module.exports = (Discord, client, alias) => {
  command(client, alias, (message) => {
    const gif = 'https://media.giphy.com/media/Id0IZ49MNMzKHI9qpV/giphy.gif';

    const embed = new Discord.MessageEmbed()
      .setTitle('Follow me on GitHub!')
      .setURL('https://github.com/sneyderdev')
      .setAuthor(message.author.username)
      .setThumbnail(gif)
      .setImage(gif)
      .setFooter('This is a footer', gif)
      .setColor('#C435E8')
      .addFields(
        {
          name: 'Field 1',
          value: 'Hello world!',
          inline: true,
        },
        {
          name: 'Field 2',
          value: 'Hello planet!',
          inline: true,
        },
        {
          name: 'Field 3',
          value: 'Hello people!',
          inline: true,
        }
      );

    message.channel.send(embed);
  });
};
