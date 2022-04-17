module.exports = {
    name: 'sad',
    description: "sadness",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} cries with ${user.username} `)
        .setImage('https://c.tenor.com/SVvaVhZlVB8AAAAC/anime-crying.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}