const { User } = require("discord.js");

module.exports = {
    name: 'kiss',
    description: "kisses a user",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('#353333')
        .setDescription(`${message.author} kisses ${user.username} `)
        .setImage('https://c.tenor.com/TnjL6WcdkkwAAAAd/anime-kiss.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}