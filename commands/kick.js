exports.run = (client, msg, [mention, ...reason]) => {
  const config = require("../config.json")
  const modRole = msg.guild.roles.find("name", `${config.moderation}`);
  const kickMember = msg.mentions.members.first();
  let reasonMsg = reason.join(" ");
  let kicker = msg.author.tag;
  let date = new Date();
  let channel = client.channels.get(config.logs);

  if (!modRole)
    return console.log(`The ${config.moderation} role does not exist`);

  if (!msg.member.roles.has(modRole.id))
    return msg.reply("You can't use this command.");

  if (msg.mentions.members.size === 0)
    return msg.reply("Please mention a user to kick");

  if (reasonMsg.length === 0)
    return msg.reply("Enter a reason");

  if (!msg.guild.me.hasPermission("KICK_MEMBERS"))
    return msg.reply("");


  kickMember.kick(reasonMsg).then(member => {
    kickMember.send(`You were banned on ${date} by ${banner} for the reason: ${reasonMsg}**`).then(member => {


      if (channel) {
        channel.send({
          embed: {
            color: 13632027,
            author: {
              icon_url: client.user.avatarURL

            },

            title: "A user has been kicked!",
            description: `A user was kicked recently! Here is all the information you need
            
            **User Kicked:** ${kickMember}
            **Kicked by:** ${kicker}
            **User was kicked for:** ${reasonMsg}
            **User was kicked on:** ${date}`
          }
        }

        )
      }
    })
  })
}
