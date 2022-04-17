module.exports = {
    name: 'cry',
    description: "crying alot?",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} cries with ${user.username} `)
        .setImage('https://c.tenor.com/Vs9QNG3lQZUAAAAC/luffy-one-piece.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}