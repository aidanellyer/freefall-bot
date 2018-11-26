exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Who is the management team?",
            description: "The management team deal with all things community and server related.",
            fields: [{
                name: "@CaughtRed#9062 - Director",
                value: "Hi, my name is Aidan. I've been running this community since 2013 and the community has gone through many different phases.",
            },
            {
                name: "@Freddoccino#0641 - Development Team",
                value: "Short bio / Job Duties",
            },
            {
                name: "@Jade#1271 - Community Team",
                value: "Short bio / Job Duties",
            },
            {
                name: "@Jayo#6913 - Community Team",
                value: "Hello everyone! I am Jayo. I consider myself to be a mature and respectful person who always has time to spare for the people around me. My prioirty is always kindness so you can always trust me to bring a smile to the people around! Thank you for reading!"

            }
            ],
        }
    });
};