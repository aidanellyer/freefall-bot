exports.run = (client, message, args) => {
    let pnumber = args

    var dnumber = Math.floor(Math.random() * `${pnumber}`) + 1

    message.reply(`you rolled the dice - and your number is! :gift: ${dnumber}`);

}
