exports.run = (client, message, [mention, ...reason]) => {
    const config = require("../config.json")
    const modRole = message.guild.roles.find("name", `${config.moderation}`);
    let channel = client.channels.get(config.logs);
    let date = new Date();
    let warnMember = message.mentions.members.first();
    let reasonMsg = reason.join(" ");
    let warner = message.author.tag;

    if (!modRole)
        return console.log(`The ${config.moderation} role does not exist`);

    if (!message.member.roles.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to warn");

        if (reasonMsg.length === 0)
        return message.reply("Enter a reason");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return message.reply("");



    warnMember.send(`You were banned on ${date} by ${banner} for the reason: ${reasonMsg}**`).then(member => {



        if (channel) {
            channel.send({
                embed: {
                    color: 13273357,
                    author: {
                        icon_url: client.user.avatarURL

                    },

                    title: "A user has been warned!",
                    description: `A user was warned recently! Here is all the information you need
        
            **User Warned:** ${warnMember}
            **Warned by:** ${warner}
            **User was warned for:** ${reasonMsg}
            **User was warned on:** ${date}`

                }

            })
        }
    })
};




