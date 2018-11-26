const Scraper = require('images-scraper');
exports.run = (client, message, args) => {

    google = new Scraper.Google();

    google.list({
        keyword: args[0],
        num: 1,
        detail: false,
        nightmare: {
            show: true
        }
    }).then((res) => {
        message.channel.send('first results from google', res);
    }).catch((err) => {
        message.channel.send('err', err);
    });
}