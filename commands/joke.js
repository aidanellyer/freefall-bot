exports.run = (client, message, args) => {

    const joke = [
        "Did you hear the one about the little mountain?\nIt's hill-arious! ",
        "How can you tell if a vampire has a horrible cold?\nBy his deep loud coffin!",
        "Knock knock\nWho's there?\nDoctor\nDoctor Who?\n*Sonic Screwdriver sounds*",
        "What do you call a dog sitting next to a fire?\nA hot dog!\nCue laugh track",
        "What do you call a fish without an eye?\nFSHHHH :fish:",
        "How many mexicans does it take to build a roof?\n Just Juan"
    ];

    message.channel.send(joke[Math.floor(Math.random() * joke.length)]);

}