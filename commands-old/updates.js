const config = require("../config.json")
exports.run = (client, msg, [mention, ...reason]) => {
    msg.channel.send({
        embed: {
            color: 3447003,
            author: {
                icon_url: client.user.avatarURL

            },
            title: "All Updates in our Discord",
            description: `**${config.version}**
                    (**Added**)The suggest command, so users can now suggest stuff directly to the team.
                    (**Updated**)The roll command now allows you to select a number!
                    (**Updated**)The warn/kick/ban command now shows the date & time the warn was given.
                    (**Updated**)Removed some hard-coded stuff.
                    (**Bug**)Created a temporary fix for the anti-swear system.`,




        }
    });
}