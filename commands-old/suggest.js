exports.run = (client, msg, args) => {
  const config = require("../config.json")
  let sender = msg.author;
  let argument = args;

  if (args.length === 0)
    return msg.reply("Please enter a suggestion!");

  msg.reply(`Your suggestion has been sent off to our management team!`)
  client.channels.get(`${config.suggest}`).send(`**[${sender}]** ${argument}`)

}