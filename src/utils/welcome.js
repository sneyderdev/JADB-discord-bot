module.exports = (client) => {
  const channelId = '775565553292279808'; // Welcome channel
  const targetChannelId = '775565597499981865'; // Rules channel

  client.on('guildMemberAdd', (member) => {
    const message = `Hey <@${member.id}>, welcome to ${
      member.guild.name
    }! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()} 😉`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
