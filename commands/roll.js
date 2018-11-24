exports.run = (client, message, args) => {
    let pnumber = args

    var dnumber = Math.floor(Math.random() * `${pnumber}`) + 1
    
    if (pnumber.length === 0)
    return message.reply("Enter your max number to roll between")

    if (pnumber.match = /[a-z]/i)
    return message.reply("Only include numbers!")

    message.reply(`you rolled the dice - and your number is! :gift: ${dnumber}`);

}
