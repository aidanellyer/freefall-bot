exports.run = (client, msg, args) => {
  msg.channel.send({
    embed: {
      color: 3447003,
      author: {
        icon_url: client.user.avatarURL

      },
      title: "What is the IP?",
      description: "Minecraft server: 51.38.75.193"



    }
  });
}