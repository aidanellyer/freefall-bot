const config = require("../config.json")
exports.run = (client, msg, args) => {
    var prefix = config.prefix;
    msg.channel.send("A list of commands has been sent to you!")
    msg.author.send({
        embed: {
            color: 3447003,
            author: {
                icon_url: client.user.avatarURL

            },
            title: "Commands List",
            description: "All commands are listed here!",
            fields: [{
                name: "General Commands",
                value: `${prefix}ip - This shows the IP to our server(s)
                   ${prefix}management - This shows our team members and the definition of our management team
                   ${prefix}suggest - This will allow a user to suggest a new feature.`,
            },
            {
                name: "Fun Commands",
                value: `${prefix}roll (number) - This will generate a random number between 1-your number i.e !roll 10 - will give you a number between 1 and 10
                        ${prefix}joke - Grab a joke! Because we all know you're talentless!`
            },
            {
                name: "Administrative Commands",
                value: `${prefix}poll - Creates a vote.
                ${prefix}ban - This bans a member.
                ${prefix}kick - This will remove a member, make sure and add a reason!
                    ${prefix}warn - This will send a msg to a user warning them!`

            }]
        }
    })
}