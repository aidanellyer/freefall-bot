exports.run = (client, message, args) => {

    const joke = [
        "Did you hear the one about the little mountain? It's hill-arious! ",
        "How can you tell if a vampire has a horrible cold? By his deep loud coffin!",
        "Callum"
    ];

    message.reply(joke[Math.floor(Math.random() * joke.length)]);

}