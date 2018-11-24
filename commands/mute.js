exports.run = (client, message, args) => {
    let userToModify = message.mentions.members.first();
    const role = message.guild.roles.find('name', 'muted');

    userToModify.addRole(role);
    message.channel.send("Done")

}