require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

// Utilities
const firstMessage = require('./src/utils/firstMessage');
const privateMessage = require('./src/utils/privateMessage');
const roleClaim = require('./src/utils/roleClaim');

// Admin commands
const clearChannel = require('./src/commands/commandList/admin/clearChannel');
const createTextChannel = require('./src/commands/commandList/admin/createTextChannel');
const createVoiceChannel = require('./src/commands/commandList/admin/createVoiceChannel');
const ban = require('./src/commands/commandList/admin/ban');
const kick = require('./src/commands/commandList/admin/kick');

// Utils commands
const ping = require('./src/commands/commandList/utils/ping');
const servers = require('./src/commands/commandList/utils/servers');
const status = require('./src/commands/commandList/utils/status');
const serverInfo = require('./src/commands/commandList/utils/serverInfo');
const embed = require('./src/commands/commandList/utils/embed');
const help = require('./src/commands/commandList/utils/help');

client.once('ready', () => {
  console.log('The client is ready!');

  // Basic command
  ping(client, ['ping', 'test']);

  // List servers command
  servers(client, 'servers');

  // Clear channel command
  clearChannel(client, ['cc', 'clearchannel']);

  // Set status command
  status(client, 'status');

  // Edit and react to the first message
  firstMessage(
    client,
    '773276377545703424',
    'Editing and reacting to the first message of a channel!',
    ['🔥', '💚']
  );

  // Reply to a message by DM
  privateMessage(client, 'Ping!', 'Pong!');

  // Send a DM by user's ID
  // client.users.fetch('468078148207247372').then((user) => {
  //   user.send('Hey there!');
  // });

  // Create text channel command
  createTextChannel(client, 'createtextchannel');

  // Create voice channel command
  createVoiceChannel(client, 'createvoicechannel');

  // Embed command
  embed(Discord, client, 'embed');

  // Server info command
  serverInfo(Discord, client, 'serverinfo');

  // Help command
  help(Discord, client, 'help');

  // Reaction roles
  roleClaim(client);

  // Ban command
  ban(client, 'ban');

  // Kick command
  kick(client, 'kick');
});

client.login(process.env.DISCORD_BOT_TOKEN);
