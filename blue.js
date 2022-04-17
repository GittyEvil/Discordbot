module.exports = {
    name: 'blue',
    description: "blue",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} blue lights with ${user.username} `)
        .setImage('https://c.tenor.com/qRAW3f5xuBEAAAAd/dance-blue.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}