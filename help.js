module.exports = {
    name: 'help',
    description: "help for lost people?",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setTitle('A helping hand')
        .setDescription('Some help for the lost ones <3')
        .setImage('https://tenor.com/view/marin-kitagawa-my-dress-up-darling-anime-gif-23714979')
        .addFields(
            {name: 'Help 1', value:' To see list of commands for Marin bot just do m!commands'},
            {name: 'Help 2', value:' If you need further help just dm a mod'}
        )
        .setImage('https://c.tenor.com/F-iYHvwyTtkAAAAd/marin-marin-smiling.gif')
        .setFooter("Have Fun Chatting Cuties!! <3");
        message.channel.send({embeds: [newEmbed]});
    }
    
}
