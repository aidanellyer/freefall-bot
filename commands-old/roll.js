const _ = require("lodash")
exports.run = (client, msg, args) => {
    const num = Number(args[0]);
    const dnumber = Math.floor(Math.random() * `${args}`) + 1
    
    if (args.length === 0)
    return msg.reply("Enter your max number to roll between")
    // pnumber.match = /[a-z]/i


  
    if (isNaN(args[0])) {
        return msg.reply('Only include numbers!');
        }

    // msg.reply(`you rolled the dice - and your number is! :gift: ${dnumber}`);

        function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

 msg.reply('Working...').then(msg => {
    sleep(10000);
    msg.edit(`Your number is, ${dnumber}`);
    return msg;
})


}
