exports.run = (client, message, args) => {
  const config = require("../config.json")
  if (message.author.id !== `${config.ownerID}`) return; message.reply("You do not have the right permissions to use this command!");

  if (!args || args.length < 1) return message.reply("Must provide a command name to reload.");

  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};