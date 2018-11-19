const config = require("../config.json")
exports.run = (client, message, [mention, ...reason]) => {
  let moderation = config.moderation;
  const modRole = message.guild.roles.find("name", `${moderation}`);
  if (!modRole)
    return console.log(`The ${moderation} role does not exist`);

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to ban");

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("");

  let banMember = message.mentions.members.first();
  let reasonMsg = reason.join(" ");

  message.member.send(`You were banned by **${banner}** for the reason: **${reasonMsg}**`)

  banMember.ban(reasonMsg).then(member => {
    let banner = message.author.tag;
    let date = new Date();

    message.reply({
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
            **User was banned on:** ${date}`
      }
    })


  })
}