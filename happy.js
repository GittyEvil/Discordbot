module.exports = {
    name: 'happy',
    description: "being happy",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} happy with ${user.username} `)
        .setImage('https://c.tenor.com/Q--iyrFnBw8AAAAC/anime-smile.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}

