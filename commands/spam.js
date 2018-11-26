const config = require("../config.json")
    let moderation = config.moderation;
    const modRole = message.guild.roles.find("name", `${moderation}`);
    let Slapper = message.guild.roles.find("name", "Slapper");
    const talkedRecently = new Set();


    if (!modRole)
        return console.log(`The ${moderation} role does not exist`);

    if (message.member.roles.has(Slapper.id))
        return message.reply("This is not a command.");

    // if (message.member.role.name("Slapper"))
    // return message.reply("");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return message.reply("");

        let sender = message.author
    let warnMember = message.mentions.members.first();
    let reasonMsg = reason.join(" ");

    let warner = message.author.tag;
        message.channel.send("Sent!")
        warnMember.send(`${reasonMsg}`) //1
        warnMember.send(`${reasonMsg}`) //2
        warnMember.send(`${reasonMsg}`) //3
        warnMember.send(`${reasonMsg}`) //4
        warnMember.send(`${reasonMsg}`) //5
        warnMember.send(`${reasonMsg}`) //6
        warnMember.send(`${reasonMsg}`) //7
        warnMember.send(`${reasonMsg}`) //8
        warnMember.send(`${reasonMsg}`) //9
        warnMember.send(`${reasonMsg}`) //10
        warnMember.send(`${reasonMsg}`) //11
        warnMember.send(`${reasonMsg}`) //12
        warnMember.send(`${reasonMsg}`) //13
        warnMember.send(`${reasonMsg}`) //14
        warnMember.send(`${reasonMsg}`) //15
        warnMember.send(`${reasonMsg}`) //16
        warnMember.send(`${reasonMsg}`) //17
        warnMember.send(`${reasonMsg}`) //18 
        warnMember.send(`${reasonMsg}`) //19
        warnMember.send(`${reasonMsg}`) //20
        warnMember.send(`${reasonMsg}`) //21
        warnMember.send(`${reasonMsg}`) //1
        warnMember.send(`${reasonMsg}`) //2
        warnMember.send(`${reasonMsg}`) //3
        warnMember.send(`${reasonMsg}`) //4
        warnMember.send(`${reasonMsg}`) //5
        warnMember.send(`${reasonMsg}`) //6
        warnMember.send(`${reasonMsg}`) //7
        warnMember.send(`${reasonMsg}`) //8
        warnMember.send(`${reasonMsg}`) //9
        warnMember.send(`${reasonMsg}`) //10
        warnMember.send(`${reasonMsg}`) //11
        warnMember.send(`${reasonMsg}`) //12
        warnMember.send(`${reasonMsg}`) //13
        warnMember.send(`${reasonMsg}`) //14
        warnMember.send(`${reasonMsg}`) //15
        warnMember.send(`${reasonMsg}`) //16
        warnMember.send(`${reasonMsg}`) //17
        warnMember.send(`${reasonMsg}`) //18 
        warnMember.send(`${reasonMsg}`) //19
        warnMember.send(`${reasonMsg}`) //20
        warnMember.send(`${reasonMsg}`) //21
        warnMember.send(`${reasonMsg}`) //1
        warnMember.send(`${reasonMsg}`) //2
        warnMember.send(`${reasonMsg}`) //3
        warnMember.send(`${reasonMsg}`) //4
        warnMember.send(`${reasonMsg}`) //5
        warnMember.send(`${reasonMsg}`) //6
        warnMember.send(`${reasonMsg}`) //7
        warnMember.send(`${reasonMsg}`) //8
        warnMember.send(`${reasonMsg}`) //9
        warnMember.send(`${reasonMsg}`) //10
        warnMember.send(`${reasonMsg}`) //11
        warnMember.send(`${reasonMsg}`) //12
        warnMember.send(`${reasonMsg}`) //13
        warnMember.send(`${reasonMsg}`) //14
        warnMember.send(`${reasonMsg}`) //15
        warnMember.send(`${reasonMsg}`) //16
        warnMember.send(`${reasonMsg}`) //17
        warnMember.send(`${reasonMsg}`) //18 
        warnMember.send(`${reasonMsg}`) //19
        warnMember.send(`${reasonMsg}`) //20
        warnMember.send(`${reasonMsg}`) //63
        warnMember.send(`${reasonMsg}`) //1
        warnMember.send(`${reasonMsg}`) //2
        warnMember.send(`${reasonMsg}`) //3
        warnMember.send(`${reasonMsg}`) //4
        warnMember.send(`${reasonMsg}`) //5
        warnMember.send(`${reasonMsg}`) //6
        warnMember.send(`${reasonMsg}`) //7
        warnMember.send(`${reasonMsg}`) //8
        warnMember.send(`${reasonMsg}`) //9
        warnMember.send(`${reasonMsg}`) //10
        warnMember.send(`${reasonMsg}`) //11
        warnMember.send(`${reasonMsg}`) //12
        warnMember.send(`${reasonMsg}`) //13
        warnMember.send(`${reasonMsg}`) //14
        warnMember.send(`${reasonMsg}`) //15
        warnMember.send(`${reasonMsg}`) //16
        warnMember.send(`${reasonMsg}`) //17
        warnMember.send(`${reasonMsg}`) //18 
        warnMember.send(`${reasonMsg}`) //19
        warnMember.send(`${reasonMsg}`) //20
        warnMember.send(`${reasonMsg}`) //84
        warnMember.send(`${reasonMsg}`) //1
        warnMember.send(`${reasonMsg}`) //2
        warnMember.send(`${reasonMsg}`) //3
        warnMember.send(`${reasonMsg}`) //4
        warnMember.send(`${reasonMsg}`) //5
        warnMember.send(`${reasonMsg}`) //6
        warnMember.send(`${reasonMsg}`) //7
        warnMember.send(`${reasonMsg}`) //8
        warnMember.send(`${reasonMsg}`) //9
        warnMember.send(`${reasonMsg}`) //10
        warnMember.send(`${reasonMsg}`) //11
        warnMember.send(`${reasonMsg}`) //12
        warnMember.send(`${reasonMsg}`) //13
        warnMember.send(`${reasonMsg}`) //14
        warnMember.send(`${reasonMsg}`) //15
        warnMember.send(`${reasonMsg}`) //16
        warnMember.send(`${reasonMsg}`) //17
        warnMember.send(`${reasonMsg}`) //18 
        warnMember.send(`${reasonMsg}`) //19
        warnMember.send(`${reasonMsg}`) //20
        warnMember.send(`${reasonMsg}`) //105
                    
        if (talkedRecently.has(message.author.id))
        return;
      ​
      // Adds the user to the set so that they can't talk for 2.5 seconds
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after 2.5 seconds
        talkedRecently.delete(message.author.id);
      }, 2500);
    