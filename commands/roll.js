const _ = require("lodash")
exports.run = (client, message, args) => {
    const num = Number(args[0]);
    const dnumber = Math.floor(Math.random() * `${args}`) + 1
    
    if (args.length === 0)
    return message.reply("Enter your max number to roll between")
    // pnumber.match = /[a-z]/i


  
    if (isNaN(args[0])) {
        return message.reply('Only include numbers!');
        }

    // message.reply(`you rolled the dice - and your number is! :gift: ${dnumber}`);

        function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

 message.reply('Working...').then(message => {
    sleep(10000);
    message.edit(`Your number is, ${dnumber}`);
    return message;
})


}
