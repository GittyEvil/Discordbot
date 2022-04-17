module.exports = {
    name: 'laugh',
    description: "laughing",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} laughs with ${user.username} `)
        .setImage('https://c.tenor.com/57faZG6GIzEAAAAC/jujutsu-kaisen-sukuna.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}