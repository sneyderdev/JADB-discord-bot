require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const command = require('./src/commands/command');

client.once('ready', () => {
  console.log('The client is ready!');

  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!');
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
