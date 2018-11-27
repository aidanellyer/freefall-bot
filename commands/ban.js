const config = require("../config.json")
exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", `${moderation}`);
  let banMember = message.mentions.members.first();
  let reasonMsg = reason.join(" ");
  let banner = message.author.tag;
  let channel = client.channels.get(config.logs);
  let date = new Date()
  if (!modRole)
  return console.log(`The ${config.moderation} role does not exist`);

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to ban");

    if (reasonMsg.length === 0)
    return message.reply("Enter a reason");

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("");

message.member.send(`You were banned on ${date} by ${banner} for the reason: ${reasonMsg}**`)

  banMember.ban(reasonMsg).then(member => {


    if (channel) {
      channel.send({
        embed: {
          color: 13632027,
          author: {
            icon_url: client.user.avatarURL

          },

          title: "A user has been banned!",
          description: `A user was banned recently! Here is all the information you need
              
              **User Banned:** ${banMember}
              **Banned by:** ${banner}
              **User was banned for:** ${reasonMsg}
              **User was banned on:** $new Date()`
        }
      })

    }


  })
}