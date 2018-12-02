const config = require("../config.json")
exports.run = (client, msg, [mention, ...reason]) => {
  const modRole = msg.guild.roles.find("name", `${moderation}`);
  let banMember = msg.mentions.members.first();
  let reasonMsg = reason.join(" ");
  let banner = msg.author.tag;
  let channel = client.channels.get(config.logs);
  let date = new Date()
  
  if (!modRole)
  return console.log(`The ${config.moderation} role does not exist`);

  if (!msg.member.roles.has(modRole.id))
    return msg.reply("You can't use this command.");

  if (msg.mentions.members.size === 0)
    return msg.reply("Please mention a user to ban");

    if (reasonMsg.length === 0)
    return msg.reply("Enter a reason");

  if (!msg.guild.me.hasPermission("BAN_MEMBERS"))
    return msg.reply("");

msg.member.send(`You were banned on ${date} by ${banner} for the reason: ${reasonMsg}**`)

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