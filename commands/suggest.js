exports.run = (client, message, args) => {
    const config = require("../config.json")
    let sender = message.author;
    let argument = args;

    if (args.length === 0)
      return message.reply("Please enter a suggestion!");

    message.reply(`Your suggestion has been sent off to our management team!`)
    client.channels.get("510859889367842831").send(`**[${sender}]** ${argument}`)

}