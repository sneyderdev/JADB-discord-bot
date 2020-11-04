require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./src/data/config.json');
const command = require('./src/commands/command');
const firstMessage = require('./src/utils/firstMessage');
const privateMessage = require('./src/utils/privateMessage');

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
  command(client, 'createtextchannel', (message) => {
    const name = message.content.replace('!createtextchannel ', '');

    message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        const categoryId = '773289641838641152';
        channel.setParent(categoryId);
      });
  });

  // Create voice channel command
  command(client, 'createvoicechannel', (message) => {
    const name = message.content.replace('!createvoicechannel ', '');

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = '773289641838641152';
        channel.setParent(categoryId);
        channel.setUserLimit(10);
      });
  });

  // Embed command
  command(client, 'embed', (message) => {
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

  // Server info command
  command(client, 'serverinfo', (message) => {
    const { guild } = message;
    const { name, region, memberCount, owner } = guild;
    const icon = guild.iconURL();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Member Count',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        }
      );

    message.channel.send(embed);
  });

  // Help command
  command(client, 'help', (message) => {
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
});

client.login(process.env.DISCORD_BOT_TOKEN);
