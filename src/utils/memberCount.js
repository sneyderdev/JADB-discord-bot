module.exports = (client) => {
  const channelId = '775920979795902464';

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId);
    channel.setName(`Members: ${guild.memberCount}`);
  };

  client.on('guildMemberAdd', (member) => updateMembers(member.guild));
  client.on('guildMemberRemove', (member) => updateMembers(member.guild));

  const guild = client.guilds.cache.get('772889383618478130');
  updateMembers(guild);
};
