module.exports = {
    name: 'die',
    description: "dying",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} dies with ${user.username} `)
        .setImage('https://c.tenor.com/Ar87IlqZLh0AAAAC/naruto-ninja.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}