exports.run = (client, message) => {
            message.reply("Pong! :ping_pong:").then(msg => msg.delete(3000));
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms").then(msg => msg.delete(3000));        
    }
