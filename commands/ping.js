exports.run = (client, msg) => {
            msg.reply("Pong! :ping_pong:").then(msg => msg.delete(3000));
            msg.channel.send(new Date().getTime() - msg.createdTimestamp + " ms").then(msg => msg.delete(3000));        
    }
