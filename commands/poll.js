exports.run = (client, message, args) => {
    let poll = args;
    let creator = message.author.tag;

    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: `${creator} has created a poll`,
            description: `${poll}`,
            footer: {
                icon_url: client.user.avatarURL,
                text: "👍 for yes 👎 for no "

            }
        }
    })
}