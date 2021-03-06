const config = require("../config.json")
exports.run = (client, msg, [mention, ...reason]) => {
    let userToModify = msg.mentions.members.first();
    const role = msg.guild.roles.find('name', 'muted');
    const modRole = msg.guild.roles.find("name", `${config.moderation}`);
    let muter = msg.author.tag;
    let date = new Date();
    let channel = client.channels.get(config.logs);

    if (!modRole)
        return console.log(`The ${config.moderation} role does not exist`);

    if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");

    if (msg.mentions.members.size === 0)
        return msg.reply("Please mention a user to mute");

        if (reason.length === 0)
        return msg.reply("Enter a reason");

    if (!msg.guild.me.hasPermission("MANAGE_ROLES"))
        return msg.reply("");




    userToModify.addRole(role);

    msg.reply("User has been muted!").then(msg => msg.delete(3000)).catch(err => console.error(err));

    msg.member.send(`You were banned on ${date} by ${banner} for the reason: ${reason}**`)

    if (channel) {
        channel.send({
            embed: {
                color: 13273357,
                author: {
                    icon_url: client.user.avatarURL

                },

                title: "A user has been muted!",
                description: `A user was muted recently! Here is all the information you need
              
              **User muted:** ${userToModify}
              **Muted by:** ${muter}
              **User was muted for:** ${reason}
              **User was muted on:** ${date}`
            }
        }

        )
    }
};