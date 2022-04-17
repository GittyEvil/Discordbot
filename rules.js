module.exports = {
    name: 'rules',
    description: "shows the rules",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setTitle('Rules')
        .setURL('https://animixplay.to/v1/sono-bisque-doll-wa-koi-wo-suru')
        .setDescription('The Rules Of This Server <3')
        .setImage('https://cdn.discordapp.com/attachments/930714305907810366/930751614254452746/13266067-313e-49bb-8cb2-751fbf7fd969.png')
        .addFields(
            {name: 'Rule 1', value:' Make sure to follow the Discord Guidelines, which can be found here: https://discordapp.com/guidelines'},
            {name: 'Rule 2', value:' No extreme politics. It is okay to have an opinion, just keep it to yourself when it comes to politics.'},
            {name: 'Rule 3', value:' Server Raiding, raiding or mentions of raiding are not allowed and will result in a ban or major consequences.'},
            {name: 'Rule 4', value:' Try to keep your discussion in the right channel to what they are created for. For example, if you wish to discuss about the manga related topic, use the manga channels.'},
            {name: 'Rule 5', value:' Do not leak personal information. We take personal information very seriously! Leaking others information will result in a permanent ban!'},
            {name: 'Rule 6', value:' No advertisements, posting any kind of advertisements or servers in the chat or DMS of people will get you banned. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)'},
            {name: 'Rule 7', value:' And please dont spoil the anime for other people, this will result in a 1 hour mute.'},
            {name: 'Rule 8', value:' English is the only language permitted throughout the server. Small sentences of other languages are only permitted for clarification.For other languages, go to: other-languages🌍'},
            {name: 'Rule 9', value:' And yes bullying the owner is allowed. But please do respect the staff!'}

        )
        .setImage('https://images2.alphacoders.com/120/1202696.jpg')
        .setFooter("Have Fun Chatting Cuties!! <3");
        message.channel.send({embeds: [newEmbed]});
    }
    
}
