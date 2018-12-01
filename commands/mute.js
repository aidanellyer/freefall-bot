const config = require("../config.json")
exports.run = (client, message, [mention, ...reason]) => {
    let userToModify = message.mentions.members.first();
    const role = message.guild.roles.find('name', 'muted');
    const modRole = message.guild.roles.find("name", `${config.moderation}`);
    let muter = message.author.tag;
    let date = new Date();
    let channel = client.channels.get(config.logs);

    if (!modRole)
        return console.log(`The ${config.moderation} role does not exist`);

    if (!message.member.roles.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to mute");

        if (reason.length === 0)
        return message.reply("Enter a reason");

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.reply("");




    userToModify.addRole(role);

    message.reply("User has been muted!").then(msg => msg.delete(3000)).catch(err => console.error(err));

    message.member.send(`You were banned on ${date} by ${banner} for the reason: ${reason}**`)

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