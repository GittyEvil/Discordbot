module.exports = {
    name: 'smile',
    description: "smile!",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} smiles with ${user.username} `)
        .setImage('https://c.tenor.com/WFxzA4PQTiEAAAAC/smile-anime.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}