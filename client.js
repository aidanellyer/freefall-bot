const Discord = require("discord.js")

class Client extends Discord.Client {

    constructor(config) {
        super(config.client)
        this.config = config
        this.connect()
        this.on("message", message => this.handle(message))
        this.on("ready", () => this.status())
        this.antiRacism()
    }
    //USE THIS instead of BEFORE THING
    connect() {
        this.login(this.config.token)

    }
    handle(message) {
        if (message.author.bot) return;
        if (message.content.indexOf(this.config.prefix) !== 0) return;

        // This is the best way to define args. Trust me.
        const args = message.content.slice(this.config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        // The list of if/else is replaced with those simple 2 lines:
        try {
            const commandFile = require(`./commands/${command}.js`);
            commandFile.run(this, message, args);
        } catch (err) {
            console.error(err);
        }
    };
    status() {
        console.log('Bot ready!');
        this.setInterval(() => {
            const Status = [
                `with myself - ${this.config.prefix}help`,
                `join me - ${this.config.prefix}ip`,
                `imma roblock you if you touch my robux - ${this.config.prefix}help`,
                `${this.config.version} - ${this.config.prefix}updates`,
            ];

            this.user.setActivity(Status[Math.floor(Math.random() * Status.length)], { 'type': 'PLAYING' });
            this.user.setStatus('online');
        }, 30000);
    };



antiRacism(){
    this.on('message', message => {
        const swearWords = ['nigger', 'nigga', 'niggar', 'niggor', 'niggr'];
        if (swearWords.some(word => message.cleanContent.toLowerCase().includes(word))) {
            message.delete();
            message.reply('You said a banned word! :punch: :punch: :punch: :cry: ').then(msg => msg.delete(3000)).catch(err => console.error(err));
        }
    });

}

}

module.exports = Client;