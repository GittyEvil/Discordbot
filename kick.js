module.exports = {
    name: 'kick',
    description: "kicks a user",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} kicks ${user.username} `)
        .setImage('https://c.tenor.com/xJyw7SRtDRoAAAAC/anime-punch.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}