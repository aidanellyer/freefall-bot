exports.run = (client, msg, args) => {
    let giapi = require("google-images");
    let gimages = new giapi('006724086393223036190:6pb76s-bsus', 'AIzaSyBQp-k4DdwALOUqbTL25vHfytSI5s3BykI');

    if (!args) {
        msg.channel.send("Arguments are required!");
    } else {
        gimages
            .search(args, {
                safe:
                    msg.channel &&
                    msg.channel.nsfw &&
                    !msg.channel.topic.includes("[no_nsfw]")
                        ? "off"
                        : "high"
            })
            .then(data => {
                let rand = Math.floor(Math.random() * data.length);
                let img = data[rand];

                msg.channel.createmsg({
                    embed: {
                        title: img.description,
                        url: img.parentPage,
                        image: {
                            url: img.url
                        },
                        footer: {
                            text: `Image ${rand +
                                1}/10, rerun to get a different image.`
                        }
                    }
                });
            });
    }}

