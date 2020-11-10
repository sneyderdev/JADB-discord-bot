module.exports = (client) => {
  const channelIds = ['775556522649976832'];

  const addReactions = (message) => {
    message.react('👍');

    setTimeout(() => {
      message.react('👎');
    }, 750);
  };

  client.on('message', async (message) => {
    if (channelIds.includes(message.channel.id)) {
      addReactions(message);
    } else if (message.content.toLowerCase() === '!poll') {
      await message.delete();

      const fetchedMessage = await message.channel.messages.fetch({ limit: 1 });
      if (fetchedMessage && fetchedMessage.first()) {
        addReactions(fetchedMessage.first());
      }
    }
  });
};
