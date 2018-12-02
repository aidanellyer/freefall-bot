exports.run = (client, msg, args) => {
  const config = require("../config.json")
  if (msg.author.id !== `${config.ownerID}`) return; msg.reply("You do not have the right permissions to use this command!");

  if (!args || args.length < 1) return msg.reply("Must provide a command name to reload.");

  delete require.cache[require.resolve(`./${args[0]}.js`)];
  msg.reply(`The command ${args[0]} has been reloaded`);
};