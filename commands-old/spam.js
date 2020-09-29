const config = require("../config.json")
    let moderation = config.moderation;
    const modRole = msg.guild.roles.find("name", `${moderation}`);
    let Slapper = msg.guild.roles.find("name", "Slapper");
    const talkedRecently = new Set();


    if (!modRole)
        return console.log(`The ${moderation} role does not exist`);

    if (msg.member.roles.has(Slapper.id))
        return msg.reply("This is not a command.");

    // if (msg.member.role.name("Slapper"))
    // return msg.reply("");

    if (!msg.guild.me.hasPermission("MANAGE_msgS"))
        return msg.reply("");

        let sender = msg.author
    let warnMember = msg.mentions.members.first();
    let reasonMsg = reason.join(" ");

    let warner = msg.author.tag;
        msg.channel.send("Sent!")
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
                    
        if (talkedRecently.has(msg.author.id))
        return;
      ​
      // Adds the user to the set so that they can't talk for 2.5 seconds
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        // Removes the user from the set after 2.5 seconds
        talkedRecently.delete(msg.author.id);
      }, 2500);
    