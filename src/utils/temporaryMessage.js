module.exports = (client, text, duration = -1) => {
  const guild = client.guilds.cache.get('772889383618478130');
  const channel = guild.channels.cache.get('778823686484525066');

  channel.send(text).then((message) => {
    if (duration === -1) {
      return;
    }

    setTimeout(() => {
      message.delete();
    }, 1000 * duration);
  });
};
