const command = require('../../command');

module.exports = (client, alias) => {
  command(client, alias, (message) => {
    const { member, mentions } = message;
    const tag = `<@${member.id}>`;

    if (member.hasPermission('BAN_MEMBERS')) {
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        if (targetMember.hasPermission('ADMINISTRATOR')) {
          message.channel.send(`❌ ${tag}, you can't ban a moderator.`);
        } else {
          targetMember.ban().then((bannedMember) => {
            message.channel.send(
              `**${bannedMember.user.tag}** has been been banned.`
            );
          });
        }
      } else {
        message.channel.send(`🤔 ${tag}, please specify someone to ban.`);
      }
    } else {
      message.channel.send(`❌ ${tag}, you can't use that.`);
    }
  });
};
