exports.run = (client, message, [mention, ...reason]) => {
  const config = require("../config.json")
  let moderation = config.moderation;
  const modRole = message.guild.roles.find("name", `${moderation}`);
  const kickMember = message.mentions.members.first();
  let reasonMsg = reason.join(" ");
  let kicker = message.author.tag;
  let date = new Date();

  if (!modRole)
    return console.log(`The ${moderation} role does not exist`);

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");


  kickMember.kick(reasonMsg).then(member => {

    let channel = client.channels.get('THECHANNELID');
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
}
