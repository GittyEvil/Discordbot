const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: ['pfp'],
    description: 'Return a users avatar picture',
    
    execute( message,client, args, Discord) {
        const Target = message.mentions.users.first() || message.author;


        const Response = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${Target.tag}s avatar`)
        .setImage(Target.displayAvatarURL(({Dynamic: true, size: 4096})))
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, size: 4096}))

        message.reply({embeds: [Response]});
    }   
     
}