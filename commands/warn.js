const config = require("../config.json")
exports.run = (client, message, [mention, ...reason]) => {
    let moderation = config.moderation;
    const modRole = message.guild.roles.find("name", `${moderation}`);
    if (!modRole)
        return console.log(`The ${moderation} role does not exist`);

    if (!message.member.roles.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to warn");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return message.reply("");

    let warnMember = message.mentions.members.first();
    let reasonMsg = reason.join(" ");

    let warner = message.author.tag;

    warnMember.send(`You've been warned for ${reasonMsg} by ${warner}`).then(member => {
        let date = new Date();

        message.reply({
            embed: {
                color: 13632027,
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
    })
};