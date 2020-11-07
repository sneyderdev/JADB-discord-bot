const command = require('../../command');

module.exports = (client, alias) => {
  command(client, alias, (message) => {
    const { member, mentions } = message;
    const tag = `<@${member.id}>`;

    if (member.hasPermission('KICK_MEMBERS')) {
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        if (targetMember.hasPermission('ADMINISTRATOR')) {
          message.channel.send(`❌ ${tag}, you can't kick a moderator.`);
        } else {
          targetMember.kick().then((kickedMember) => {
            message.channel.send(
              `**${kickedMember.user.tag}** has been been kicked.`
            );
          });
        }
      } else {
        message.channel.send(`🤔 ${tag}, please specify someone to kick.`);
      }
    } else {
      message.channel.send(`❌ ${tag}, you can't use that.`);
    }
  });
};
