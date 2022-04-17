module.exports = {
    name: 'commands',
    description: "shows all the commands for this bot. ",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setTitle('Commands')
        .setDescription('The commands for this bot.')
        .setImage('https://cdn.discordapp.com/attachments/930714305907810366/930751614254452746/13266067-313e-49bb-8cb2-751fbf7fd969.png')
        .addFields(
            {name: 'Command 1', value:'m!help, a command for the lost souls, normal help ig'},
            {name: 'Command 2', value:'m!rules , displays the rules for this server'},
            {name: 'Command 3', value:'m!avatar, displays the persons pfp'},
            {name: 'Command 4', value:'different roleplay commands? \n such as m!cry, m!kick,shoot, kiss, hug, smile, slap, \n laugh, die, dance, excited, stomp,happy, sad \n(more coming).'},
            {name: 'Command 5', value:'coming later.'},
            {name: 'Command 6', value:'coming later.'},
            {name: 'Command 7', value:'coming later.'},
            {name: 'Command 8', value:'coming later.'},
            {name: 'Command 9', value:'m!clear, can only delete 100 messages at a time, for mods'},
            {name: 'extra', value: 'If you got problems direct message: NotEvil#5568'}       
        )
        .setImage('https://cdn.discordapp.com/attachments/931843415187021865/932713870458507324/Sono-Bisque-Doll-wa-Koi-wo-Suru-anime-min-2-1.png')
        .setFooter("Have Fun Chatting Cuties!! <3");
        message.channel.send({embeds: [newEmbed]});
    }
    
}
