module.exports = {
    name: 'slap',
    description: "slap a person",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} slaps ${user.username} `)
        .setImage('https://c.tenor.com/pgq_YsVX7sEAAAAC/meliodas-seven-deadly-sins.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}