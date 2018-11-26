exports.run = (client, message, [mention, ...reason]) => {
    const config = require("../config.json")
    let userToModify = message.mentions.members.first();
    const role = message.guild.roles.find('name', 'muted');
    const modRole = message.guild.roles.find("name", `${config.moderation}`);
    const muteMember = message.mentions.members.first();
    let reasonMsg = reason.join(" ");
    let muter = message.author.tag;
    let date = new Date();
    let channel = client.channels.get(config.logs);

    if (!modRole)
        return console.log(`The ${config.moderation} role does not exist`);

    if (!message.member.roles.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to mute");

        if (reasonMsg.length === 0)
        return message.reply("Enter a reason");

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.reply("");




    userToModify.addRole(role);

    if (channel) {
        channel.send({
            embed: {
                color: 13273357,
                author: {
                    icon_url: client.user.avatarURL

                },

                title: "A user has been muted!",
                description: `A user was muted recently! Here is all the information you need
              
              **User muted:** ${muteMember}
              **Muted by:** ${muter}
              **User was muted for:** ${reasonMsg}
              **User was muted on:** ${date}`
            }
        }

        )
    }
};