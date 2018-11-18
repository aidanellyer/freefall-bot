const config = require("../config.json")
exports.run = (client, message, args) => {
    var prefix = config.prefix;
message.channel.send("A list of commands has been sent to you!")
    message.author.send({
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
                value: `${prefix}roll (number) - This will generate a random number between 1-your number i.e !roll 10 - will give you a number between 1 and 10`
            },
            {
                name: "Administrative Commands",
                value: `${prefix}kick - This will remove a member, make sure and add a reason!
                    ${prefix}warn - This will send a message to a user warning them!`

            }]
        }
    })
}