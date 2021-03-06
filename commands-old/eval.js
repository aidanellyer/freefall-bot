const config = require('../config.json');
const {inspect} = require('util');

const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

exports.run = async (client, msg, args) => {
    if (msg.author.id !== config.ownerID) return;
    try {
        const code = args.join(' ');
        let evaled = await eval(code);
        evaled = inspect(evaled, null, 0)

        msg.channel.send(clean(evaled), {code: 'xl'});
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};