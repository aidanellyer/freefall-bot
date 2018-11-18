exports.run = (client, message, args) => {
  if (message.author.id !== "228546171562491904") return; message.reply("You do not have the right permissions to use this command!");

    if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");

    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  };