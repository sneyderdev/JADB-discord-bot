require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const command = require('./src/commands/command');

client.once('ready', () => {
  console.log('The client is ready!');

  // Basic command
  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!');
  });

  // List servers command
  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      );
    });
  });

  // Clear channel command
  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results);
      });
    } else {
      message.reply("you don't have permissions for using this command.");
    }
  });

  // Set status command
  command(client, 'status', (message) => {
    const content = message.content.replace('!status', '');

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    });
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
